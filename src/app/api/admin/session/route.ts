import { NextResponse } from "next/server";
import type { RowDataPacket } from "mysql2";
import { database } from "@/lib/server/database";
import { authorizeMutation, createSession, currentAdmin, limitedBody, revokeSession, sameOrigin, sessionAge, sessionCookie, verifyPassword } from "@/lib/server/admin-auth";

export async function GET() {
  const admin = await currentAdmin();
  return NextResponse.json(admin ? { username: admin.username, csrf: admin.csrf } : { error: "Accesso richiesto." }, { status: admin ? 200 : 401, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return NextResponse.json({ error: "Origine non autorizzata." }, { status: 403 });
  try {
    const data = JSON.parse((await limitedBody(request, 4096)).toString());
    if (typeof data.username !== "string" || typeof data.password !== "string" || data.username.length > 100 || data.password.length > 256) return NextResponse.json({ error: "Credenziali non valide." }, { status: 400 });
    const db = database();
    await db.execute("INSERT INTO gico_login_limits (bucket,attempts,expires_at) VALUES ('admin',1,DATE_ADD(UTC_TIMESTAMP(),INTERVAL 15 MINUTE)) ON DUPLICATE KEY UPDATE attempts=IF(expires_at<=UTC_TIMESTAMP(),1,attempts+1),expires_at=IF(expires_at<=UTC_TIMESTAMP(),DATE_ADD(UTC_TIMESTAMP(),INTERVAL 15 MINUTE),expires_at)");
    const [limits] = await db.query<RowDataPacket[]>("SELECT attempts FROM gico_login_limits WHERE bucket='admin'");
    if (limits[0].attempts > 15) return NextResponse.json({ error: "Troppi tentativi. Riprova fra 15 minuti." }, { status: 429, headers: { "Retry-After": "900" } });
    const [rows] = await db.execute<RowDataPacket[]>("SELECT id,password_hash,local_only FROM gico_admins WHERE username=?", [data.username]);
    const row = rows[0];
    const dummy = "scrypt:00000000000000000000000000000000:" + "0".repeat(128);
    const valid = await verifyPassword(data.password, row?.password_hash || dummy);
    if (!row || !valid) return NextResponse.json({ error: "Nome utente o password errati." }, { status: 401 });
    if (process.env.NODE_ENV === "production" && (row.local_only || !process.env.APP_URL?.startsWith("https://"))) return NextResponse.json({ error: "Configura HTTPS e una password sicura prima della pubblicazione." }, { status: 403 });
    await db.execute("UPDATE gico_login_limits SET attempts=0 WHERE bucket='admin'");
    await revokeSession();
    const token = await createSession(row.id);
    const response = NextResponse.json({ ok: true });
    response.cookies.set(sessionCookie, token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: sessionAge });
    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch { return NextResponse.json({ error: "Accesso non disponibile. Controlla MySQL e la configurazione." }, { status: 503 }); }
}

export async function DELETE(request: Request) {
  if (!await authorizeMutation(request)) return NextResponse.json({ error: "Accesso non autorizzato." }, { status: 403 });
  await revokeSession();
  const response = NextResponse.json({ ok: true }); response.cookies.delete(sessionCookie); return response;
}
