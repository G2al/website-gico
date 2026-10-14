import mysql from 'mysql2/promise';
import nextEnv from '@next/env';
import { randomBytes, scryptSync } from 'node:crypto';
nextEnv.loadEnvConfig(process.cwd());
const { ADMIN_INITIAL_USERNAME: username, ADMIN_INITIAL_PASSWORD: password } = process.env;
if (!username || !password || password.length < 12) throw new Error('Imposta ADMIN_INITIAL_USERNAME e una nuova ADMIN_INITIAL_PASSWORD di almeno 12 caratteri in .env.local.');
const db = await mysql.createConnection({ host: process.env.DB_HOST, port: Number(process.env.DB_PORT || 3306), user: process.env.DB_USER, password: process.env.DB_PASSWORD || '', database: process.env.DB_NAME });
try {
  const [rows] = await db.execute('SELECT id FROM gico_admins WHERE username=?', [username]);
  if (!rows.length) throw new Error('Amministratore non trovato.');
  const salt = randomBytes(16).toString('hex'), hash = `scrypt:${salt}:${scryptSync(password, salt, 64).toString('hex')}`;
  await db.beginTransaction();
  await db.execute('UPDATE gico_admins SET password_hash=?,local_only=FALSE WHERE id=?', [hash, rows[0].id]);
  await db.execute('DELETE FROM gico_sessions WHERE admin_id=?', [rows[0].id]);
  await db.execute("DELETE FROM gico_login_limits WHERE bucket='admin'");
  await db.commit(); console.log('Password aggiornata. Tutte le sessioni precedenti sono state revocate.');
} catch (error) { await db.rollback(); throw error; } finally { await db.end(); }
