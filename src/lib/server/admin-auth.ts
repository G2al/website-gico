import "server-only";
import { createHash, randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import type { RowDataPacket } from "mysql2";
import { database } from "./database";

export const sessionCookie = "gico_admin_session";
export const sessionAge = 60 * 60 * 8;
const digest = (token: string) => createHash("sha256").update(token).digest("hex");
export type AdminSession = { adminId: number; username: string; csrf: string };

export async function currentAdmin(): Promise<AdminSession | null> {
  const token = (await cookies()).get(sessionCookie)?.value;
  if (!token || !/^[a-f0-9]{64}$/.test(token)) return null;
  const [rows] = await database().execute<RowDataPacket[]>("SELECT s.admin_id,s.csrf,a.username,a.local_only FROM gico_sessions s JOIN gico_admins a ON a.id=s.admin_id WHERE s.token_hash=? AND s.expires_at>UTC_TIMESTAMP()", [digest(token)]);
  const row = rows[0];
  if (!row || (process.env.NODE_ENV === "production" && row.local_only)) return null;
  return { adminId: row.admin_id, username: row.username, csrf: row.csrf };
}

export async function verifyPassword(password: string, stored: string) {
  const [scheme, salt, hex] = stored.split(":");
  if (scheme !== "scrypt" || !salt || !/^[a-f0-9]{128}$/.test(hex || "")) return false;
  const actual = await new Promise<Buffer>((resolve, reject) => scrypt(password, salt, 64, (error, key) => error ? reject(error) : resolve(key)));
  return timingSafeEqual(actual, Buffer.from(hex, "hex"));
}

export async function createSession(adminId: number) {
  const token = randomBytes(32).toString("hex"), csrf = randomBytes(32).toString("hex");
  await database().execute("INSERT INTO gico_sessions (token_hash,admin_id,csrf,expires_at) VALUES (?,?,?,DATE_ADD(UTC_TIMESTAMP(),INTERVAL 8 HOUR))", [digest(token), adminId, csrf]);
  return token;
}

export async function revokeSession() {
  const token = (await cookies()).get(sessionCookie)?.value;
  if (token) await database().execute("DELETE FROM gico_sessions WHERE token_hash=?", [digest(token)]);
}

export function sameOrigin(request: Request) {
  const expected = process.env.APP_URL;
  if (!expected) return false;
  try { return request.headers.get("origin") === new URL(expected).origin; } catch { return false; }
}

export async function authorizeMutation(request: Request) {
  if (!sameOrigin(request)) return null;
  const admin = await currentAdmin();
  const token = request.headers.get("x-csrf-token") || "";
  if (!admin || !/^[a-f0-9]{64}$/.test(token) || !timingSafeEqual(Buffer.from(token), Buffer.from(admin.csrf))) return null;
  return admin;
}

export async function limitedBody(request: Request, max: number) {
  const reader = request.body?.getReader();
  if (!reader) throw new Error("Richiesta vuota.");
  const chunks: Uint8Array[] = []; let size = 0;
  while (true) { const { value, done } = await reader.read(); if (done) break; size += value.byteLength; if (size > max) { await reader.cancel(); throw new Error("Richiesta troppo grande."); } chunks.push(value); }
  return Buffer.concat(chunks);
}
