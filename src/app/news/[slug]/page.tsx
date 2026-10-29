import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  return <InstitutionalPage title={newsTitle(article)} path="/news" parent={{ label: "News", href: "/news" }}><div className="section"><article id="articolo" className="news-article institutional-width"><time dateTime={article.date}>{newsDateLabel(article.date)}</time>{article.image && <Image className="news-article-cover" src={article.image} alt={article.imageAlt} width={article.width} height={article.height} loading="eager" sizes="(max-width: 900px) calc(100vw - 48px), 880px" />}{article.content && <div className="news-article-copy">{article.content.split(/\n\s*\n/).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>}<Link className="text-link" href="/news">Tutte le notizie</Link></article></div></InstitutionalPage>;
}
export default function ArticlePage(props: Props) { return <Suspense fallback={<p className="institutional-width">Caricamento della notizia…</p>}><Article {...props} /></Suspense>; }
