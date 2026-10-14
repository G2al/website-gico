import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { revalidatePath } from "next/cache";
import { adminNews } from "@/lib/server/news-store";
import { authorizeMutation, currentAdmin, limitedBody } from "@/lib/server/admin-auth";
import { database } from "@/lib/server/database";

export async function GET() {
  try {
    if (!await currentAdmin()) return NextResponse.json({ error: "Accesso richiesto." }, { status: 401 });
    return NextResponse.json(await adminNews(), { headers: { "Cache-Control": "no-store" } });
  } catch { return NextResponse.json({ error: "Database temporaneamente non disponibile. Riprova tra poco." }, { status: 503 }); }
}

export async function POST(request: Request) {
  try { return await writeNews(request); }
  catch { return NextResponse.json({ error: "Salvataggio non riuscito. Controlla MySQL e riprova." }, { status: 503 }); }
}

async function writeNews(request: Request) {
  if (!await authorizeMutation(request)) return NextResponse.json({ error: "Sessione scaduta o accesso non autorizzato." }, { status: 403 });
  let data;
  try { data = JSON.parse((await limitedBody(request, 200_000)).toString()); } catch { return NextResponse.json({ error: "Dati non validi o troppo grandi." }, { status: 400 }); }
  if (!data || typeof data !== "object" || Array.isArray(data)) return NextResponse.json({ error: "Dati non validi." }, { status: 400 });
  const db = database();
  const id = Number(data.id);
  if (data.action === "trash" || data.action === "restore") {
    if (!Number.isSafeInteger(id) || id < 1) return NextResponse.json({ error: "Notizia non valida." }, { status: 400 });
    const [result] = await db.execute<ResultSetHeader>(data.action === "trash" ? "UPDATE gico_news SET deleted_at=UTC_TIMESTAMP() WHERE id=? AND deleted_at IS NULL" : "UPDATE gico_news SET deleted_at=NULL,status='draft' WHERE id=? AND deleted_at IS NOT NULL", [id]);
    if (!result.affectedRows) return NextResponse.json({ error: "Notizia non trovata." }, { status: 404 });
  } else if (data.action === "save") {
    const { title, content, date, status, image, imageAlt } = data;
    const validDate = typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date) && Number.isFinite(Date.parse(date)) && new Date(date).toISOString().slice(0, 10) === date;
    if (typeof title !== "string" || !title.trim() || title.length > 300 || typeof content !== "string" || content.length > 30000 || !validDate || !["draft", "published"].includes(status) || typeof imageAlt !== "string" || imageAlt.length > 300) return NextResponse.json({ error: "Controlla titolo, testo, data e stato della notizia." }, { status: 400 });
    if (image !== null && (typeof image !== "string" || !/^\/(?:images\/[a-zA-Z0-9._-]+\.(?:webp|png|jpg|jpeg)|media\/news\/[a-f0-9-]{36}\.webp)$/.test(image))) return NextResponse.json({ error: "Immagine non valida." }, { status: 400 });
    const width = Number(data.width), height = Number(data.height);
    if (![width, height].every(v => Number.isInteger(v) && v > 0 && v <= 10000)) return NextResponse.json({ error: "Dimensioni immagine non valide." }, { status: 400 });
    const values = [title.trim(), content.trim(), date, status, image, imageAlt.trim(), width, height];
    if (data.id != null) {
      if (!Number.isSafeInteger(id) || id < 1) return NextResponse.json({ error: "Notizia non valida." }, { status: 400 });
      const [existing] = await db.execute<RowDataPacket[]>("SELECT id FROM gico_news WHERE id=? AND deleted_at IS NULL", [id]);
      if (!existing.length) return NextResponse.json({ error: "Notizia non trovata." }, { status: 404 });
      await db.execute("UPDATE gico_news SET title=?,content=?,publish_date=?,status=?,image=?,image_alt=?,image_width=?,image_height=? WHERE id=? AND deleted_at IS NULL", [...values, id]);
    } else {
      const slug = (title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 130) || "notizia") + "-" + randomUUID().slice(0, 8);
      await db.execute("INSERT INTO gico_news (title,content,publish_date,status,image,image_alt,image_width,image_height,slug) VALUES (?,?,?,?,?,?,?,?,?)", [...values, slug]);
    }
  } else return NextResponse.json({ error: "Operazione non valida." }, { status: 400 });
  revalidatePath("/"); revalidatePath("/news", "layout");
  return NextResponse.json({ ok: true });
}
