import "server-only";
import mysql, { type Pool } from "mysql2/promise";

const globalDatabase = globalThis as typeof globalThis & { gicoPool?: Pool };
export function database() {
  if (!process.env.DB_NAME || !process.env.DB_USER) throw new Error("Database non configurato.");
  return globalDatabase.gicoPool ??= mysql.createPool({
    host: process.env.DB_HOST || "127.0.0.1", port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER, password: process.env.DB_PASSWORD || "", database: process.env.DB_NAME,
    charset: "utf8mb4", dateStrings: true, timezone: "Z", connectionLimit: 5,
    connectTimeout: 5000, waitForConnections: true, queueLimit: 50,
  });
}
