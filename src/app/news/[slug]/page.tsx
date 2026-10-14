import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { InstitutionalPage } from "@/components/institutional-page";
import { publicArticle } from "@/lib/server/news-store";
import { newsDateLabel, newsTitle } from "@/lib/news-archive";
import "./news-article.css";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> { const article = await publicArticle((await params).slug); return { title: article ? `${newsTitle(article)} | GiCo` : "Notizia non trovata | GiCo" }; }
async function Article({ params }: Props) {
  const article = await publicArticle((await params).slug);
  if (!article) notFound();
  return <InstitutionalPage title={newsTitle(article)} path="/news" parent={{ label: "News", href: "/news" }} sections={[{ id: "articolo", label: "Leggi la notizia" }]}><article id="articolo" className="news-article institutional-width"><time dateTime={article.date}>{newsDateLabel(article.date)}</time>{article.image && <Image className="news-article-cover" src={article.image} alt={article.imageAlt} width={article.width} height={article.height} loading="eager" sizes="(max-width: 900px) 100vw, 1000px" />}{article.content && <div className="news-article-copy">{article.content.split(/\n\s*\n/).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>}<a className="news-article-back" href="/news">← Tutte le notizie</a></article></InstitutionalPage>;
}
export default function ArticlePage(props: Props) { return <Suspense fallback={<p className="institutional-width">Caricamento della notizia…</p>}><Article {...props} /></Suspense>; }
