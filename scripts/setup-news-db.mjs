import mysql from 'mysql2/promise';
import nextEnv from '@next/env';
import { randomBytes, scryptSync } from 'node:crypto';
import { readFile } from 'node:fs/promises';

nextEnv.loadEnvConfig(process.cwd());
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, ADMIN_INITIAL_USERNAME, ADMIN_INITIAL_PASSWORD } = process.env;
if (!DB_NAME || !DB_USER) throw new Error('Configura .env.local prima di procedere.');
if (!ADMIN_INITIAL_USERNAME || !ADMIN_INITIAL_PASSWORD) throw new Error('Imposta le credenziali iniziali in .env.local.');
if (process.env.NODE_ENV === 'production' && ADMIN_INITIAL_PASSWORD.length < 12) throw new Error('In produzione serve una password di almeno 12 caratteri.');
const db = await mysql.createConnection({ host: DB_HOST, port: Number(DB_PORT || 3306), database: DB_NAME, user: DB_USER, password: DB_PASSWORD || '', charset: 'utf8mb4', timezone: 'Z' });
try {
  await db.query(`CREATE TABLE IF NOT EXISTS gico_admins (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL, local_only BOOLEAN NOT NULL DEFAULT FALSE
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`);
  await db.query(`CREATE TABLE IF NOT EXISTS gico_sessions (
    token_hash CHAR(64) PRIMARY KEY, admin_id INT UNSIGNED NOT NULL,
    csrf CHAR(64) NOT NULL, expires_at DATETIME NOT NULL,
    INDEX(expires_at), FOREIGN KEY(admin_id) REFERENCES gico_admins(id) ON DELETE CASCADE
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);
  await db.query(`CREATE TABLE IF NOT EXISTS gico_login_limits (
    bucket VARCHAR(100) PRIMARY KEY, attempts INT UNSIGNED NOT NULL, expires_at DATETIME NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);
  await db.query(`CREATE TABLE IF NOT EXISTS gico_news (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, legacy_id INT UNSIGNED UNIQUE,
    slug VARCHAR(190) NOT NULL UNIQUE, title VARCHAR(300) NOT NULL,
    content MEDIUMTEXT NOT NULL, publish_date DATE NOT NULL,
    status ENUM('draft','published') NOT NULL DEFAULT 'draft',
    image VARCHAR(255), image_alt VARCHAR(300) NOT NULL DEFAULT '',
    image_width INT UNSIGNED NOT NULL DEFAULT 1000, image_height INT UNSIGNED NOT NULL DEFAULT 666,
    source_url TEXT, deleted_at DATETIME NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX(status,deleted_at,publish_date)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`);
  const salt = randomBytes(16).toString('hex');
  const hash = `scrypt:${salt}:${scryptSync(ADMIN_INITIAL_PASSWORD, salt, 64).toString('hex')}`;
  await db.execute('INSERT IGNORE INTO gico_admins (username,password_hash,local_only) VALUES (?,?,?)', [ADMIN_INITIAL_USERNAME, hash, ADMIN_INITIAL_PASSWORD.length < 12]);
  const archive = JSON.parse(await readFile(new URL('../src/lib/news-archive.json', import.meta.url), 'utf8'));
  let sourcePosts = [];
  // Importa il testo editoriale, non HTML eseguibile, dal CMS originale.
  for (let page = 1; page <= 2; page++) {
    const response = await fetch(`https://www.gicocoop.it/wp-json/wp/v2/posts?per_page=100&page=${page}`);
    if (!response.ok) throw new Error('Impossibile recuperare i testi originali. Riprova: le notizie esistenti non vengono sovrascritte.');
    sourcePosts.push(...await response.json());
  }
  const text = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<\/(?:p|div|h[1-6]|li)>|<br\s*\/?>/gi, '\n\n').replace(/<[^>]*>/g, '').replace(/&#x([0-9a-f]+);/gi, (_, x) => String.fromCodePoint(parseInt(x, 16))).replace(/&#([0-9]+);/g, (_, x) => String.fromCodePoint(Number(x))).replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/\n\s*\n+/g, '\n\n').trim();
  let imported = 0;
  await db.beginTransaction();
  for (const article of archive) {
    const original = sourcePosts.find(p => p.id === article.id);
    const content = text(original?.content?.rendered || '');
    const slug = (article.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 130) || 'notizia') + '-' + article.id;
    const [result] = await db.execute('INSERT IGNORE INTO gico_news (legacy_id,slug,title,content,publish_date,status,image,image_width,image_height,source_url) VALUES (?,?,?,?,?,?,?,?,?,?)', [article.id, slug, article.title, content, article.date, 'published', article.image, article.width, article.height, article.href]);
    imported += result.affectedRows;
  }
  await db.commit();
  console.log(`Database pronto. ${imported} notizie importate; i contenuti e le credenziali già presenti non sono stati modificati.`);
} catch (error) { await db.rollback(); throw error; } finally { await db.end(); }
