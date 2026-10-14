import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/institutional-page";
import { NewsArchive } from "@/components/news-archive";
import { Suspense } from "react";
import { publishedNews } from "@/lib/server/news-store";

export const metadata: Metadata = { title: "News | GiCo", description: "Le notizie di GiCo: attività, esperienze e momenti condivisi. Esplora l’archivio del Centro Sociale e del Centro di Formazione." };

export default function NewsPage() {
  return <InstitutionalPage title="News" path="/news" parent={null} sections={[{ id: "notizie", label: "Esplora le notizie" }]}><Suspense fallback={<p className="institutional-width">Caricamento delle notizie…</p>}><DatabaseNews /></Suspense></InstitutionalPage>;
}
async function DatabaseNews() {
  const articles = await publishedNews();
  return <NewsArchive articles={articles.map(article => ({ id: article.id, title: article.title, date: article.date, href: article.href, image: article.image, width: article.width, height: article.height, sourceImage: null }))} />;
}
