import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET(_request: Request, { params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params;
  if (!/^[a-f0-9-]{36}\.webp$/.test(filename)) return new Response(null, { status: 404 });
  try { const data = await readFile(path.join(process.cwd(), ".data", "news-images", filename)); return new Response(new Uint8Array(data), { headers: { "Content-Type": "image/webp", "X-Content-Type-Options": "nosniff", "Cache-Control": "public, max-age=31536000, immutable" } }); }
  catch { return new Response(null, { status: 404 }); }
}
