import "server-only";
import { connection } from "next/server";
import type { RowDataPacket } from "mysql2";
import type { NewsEntry } from "../news-archive";
import { database } from "./database";

export type ManagedNews = NewsEntry & { slug: string; content: string; status: "draft" | "published"; imageAlt: string; deleted: boolean };
function mapNews(row: RowDataPacket): ManagedNews {
  return { id: row.id, title: row.title, slug: row.slug, content: row.content, date: String(row.publish_date).slice(0, 10), status: row.status, image: row.image, width: row.image_width, height: row.image_height, sourceImage: null, imageAlt: row.image_alt, href: `/news/${row.slug}`, deleted: !!row.deleted_at };
}
export async function publishedNews(): Promise<ManagedNews[]> {
  await connection();
  const [rows] = await database().query<RowDataPacket[]>("SELECT * FROM gico_news WHERE status='published' AND deleted_at IS NULL ORDER BY publish_date DESC,id DESC");
  return rows.map(mapNews);
}
export async function publicArticle(slug: string) {
  await connection();
  const [rows] = await database().execute<RowDataPacket[]>("SELECT * FROM gico_news WHERE slug=? AND status='published' AND deleted_at IS NULL", [slug]);
  return rows[0] ? mapNews(rows[0]) : null;
}
export async function adminNews() {
  const [rows] = await database().query<RowDataPacket[]>("SELECT * FROM gico_news ORDER BY publish_date DESC,id DESC");
  return rows.map(mapNews);
}
