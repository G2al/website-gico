import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { NextResponse } from "next/server";
import { authorizeMutation, limitedBody } from "@/lib/server/admin-auth";

export async function POST(request: Request) {
  if (!await authorizeMutation(request)) return NextResponse.json({ error: "Accesso non autorizzato." }, { status: 403 });
  try {
    const buffer = await limitedBody(request, 6 * 1024 * 1024);
    const form = await new Request(request.url, { method: "POST", headers: { "content-type": request.headers.get("content-type") || "" }, body: new Uint8Array(buffer) }).formData();
    const file = form.get("image");
    if (!(file instanceof File) || !["image/jpeg", "image/png", "image/webp"].includes(file.type) || !file.size || file.size > 5 * 1024 * 1024) return NextResponse.json({ error: "Scegli una foto JPG, PNG o WebP, massimo 5 MB." }, { status: 400 });
    const source = Buffer.from(await file.arrayBuffer());
    const metadata = await sharp(source, { limitInputPixels: 25_000_000 }).metadata();
    if (!["jpeg", "png", "webp"].includes(metadata.format || "") || (metadata.pages || 1) > 1) throw new Error("Formato non consentito.");
    const { data, info } = await sharp(source, { limitInputPixels: 25_000_000 }).rotate().resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true }).webp({ quality: 85 }).toBuffer({ resolveWithObject: true });
    const filename = `${randomUUID()}.webp`, directory = path.join(process.cwd(), ".data", "news-images");
    await mkdir(directory, { recursive: true }); await writeFile(path.join(directory, filename), data, { flag: "wx" });
    return NextResponse.json({ image: `/media/news/${filename}`, width: info.width, height: info.height });
  } catch { return NextResponse.json({ error: "Immagine non valida o troppo grande. Usa JPG, PNG o WebP entro 5 MB." }, { status: 400 }); }
}
