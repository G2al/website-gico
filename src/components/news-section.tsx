import Image from "next/image";
import { Newspaper } from "lucide-react";
import { originalPage } from "@/lib/navigation";
import { ArrowLink } from "./arrow-link";
import "./news-section.css";

type HomeNewsArticle = { id: string; title: string; date: string; day: string; month: string; dateLabel: string; image: string | null; alt: string; href: string };

export function NewsSection({ newsArticles }: { newsArticles: HomeNewsArticle[] }) {
  return (
    <section id="news" className="section news-section" aria-labelledby="news-title">
      <div className="wrap">
        <div className="section-head is-split">
          <div>
            <p className="kicker">Notizie</p>
            <h2 id="news-title">Dalla vita di GiCo</h2>
          </div>
          <ArrowLink href={originalPage("/news/")} secondary>Tutte le notizie</ArrowLink>
        </div>
        {newsArticles.length ? (
          <ul className="news-grid">
            {newsArticles.map(article => (
              <li key={article.id}>
                <article className="news-card">
                  <a className="news-card-photo" href={article.href} tabIndex={-1} aria-hidden="true">
                    {article.image ? <Image src={article.image} alt="" fill sizes="(max-width: 900px) calc(100vw - 48px), 380px" /> : <Newspaper size={40} strokeWidth={1.3} />}
                  </a>
                  <div className="news-card-body">
                    <time dateTime={article.date}>{article.dateLabel}</time>
                    <h3><a href={article.href}>{article.title}</a></h3>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        ) : <p className="news-empty">Nessuna notizia pubblicata al momento.</p>}
      </div>
    </section>
  );
}
