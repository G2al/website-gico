"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Newspaper, Search, X } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { newsDateLabel, newsMonthLabel, newsTitle, type NewsEntry } from "@/lib/news-archive";
import { MobileCarousel } from "./mobile-carousel";
import "./news-archive.css";

function NewsCard({ article, featured = false }: { article: NewsEntry; featured?: boolean }) {
  return <article className={`archive-card${featured ? " is-featured" : ""}`}>
    <a className="archive-card-photo" href={article.href} aria-label={`Leggi: ${newsTitle(article)}`}>
      {article.image ? <Image src={article.image} alt="" width={article.width} height={article.height} loading={featured ? "eager" : "lazy"} sizes={featured ? "(max-width: 600px) calc(100vw - 40px), 60vw" : "(max-width: 600px) calc(100vw - 40px), (max-width: 1000px) 50vw, 33vw"} /> : <span className="archive-card-placeholder"><Newspaper size={42} strokeWidth={1.2} aria-hidden="true" /><span>GiCo · News</span></span>}
      <time className="archive-photo-date" dateTime={article.date}><strong>{article.date.slice(8)}</strong><span>{newsMonthLabel(article.date.slice(0, 7)).split(" ")[0].slice(0, 3)}</span></time>
    </a>
    <div className="archive-card-copy"><time dateTime={article.date}>{newsDateLabel(article.date)}</time><h3><a href={article.href}>{newsTitle(article)}</a></h3><a className="archive-read" href={article.href} aria-label={`Leggi altro: ${newsTitle(article)}`}><span>Leggi altro</span><ArrowUpRight size={19} aria-hidden="true" /></a></div>
  </article>;
}

export function NewsArchive({ articles }: { articles: readonly NewsEntry[] }) {
  const [query, setQuery] = useState("");
  const [month, setMonth] = useState("");
  const [page, setPage] = useState(1);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const months = useMemo(() => Array.from(new Set(articles.map(article => article.date.slice(0, 7)))), [articles]);
  const filtered = useMemo(() => articles.filter(article => (!month || article.date.startsWith(month)) && (!query.trim() || `${newsTitle(article)} ${newsDateLabel(article.date)}`.toLocaleLowerCase("it").includes(query.trim().toLocaleLowerCase("it")))), [articles, query, month]);
  const pageCount = Math.ceil(filtered.length / 10);
  const visible = filtered.slice((page - 1) * 10, page * 10);
  const reset = () => { setQuery(""); setMonth(""); setPage(1); };
  const changePage = (next: number) => {
    setPage(next);
    headingRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  };

  return <section className="news-archive institutional-width" id="notizie" aria-labelledby="archive-title">
    <header className="archive-heading" data-reveal><p className="institutional-eyebrow">Dalla vita di GiCo</p><h2 id="archive-title" ref={headingRef}>Storie da condividere.</h2></header>
    <div className="archive-filters">
      <label className="archive-search"><span>Cerca una notizia</span><span className="archive-search-input"><Search size={18} aria-hidden="true" /><input ref={searchRef} type="search" value={query} placeholder="Cerca nell’archivio" maxLength={120} onChange={event => { setQuery(event.target.value); setPage(1); }} />{query && <button type="button" aria-label="Cancella la ricerca" onClick={() => { setQuery(""); setPage(1); searchRef.current?.focus(); }}><X size={17} aria-hidden="true" /></button>}</span></label>
      <label className="archive-month"><span>Archivio per mese</span><select value={month} onChange={event => { setMonth(event.target.value); setPage(1); }}><option value="">Tutti i mesi</option>{months.map(value => <option value={value} key={value}>{newsMonthLabel(value)}</option>)}</select></label>
    </div>
    <div className="archive-results"><p role="status" aria-live="polite">{filtered.length} {filtered.length === 1 ? "notizia" : "notizie"}{filtered.length > 0 && <span> · Pagina {page} di {pageCount}</span>}</p>{(query || month) && <button type="button" onClick={reset}>Rimuovi filtri<X size={14} aria-hidden="true" /></button>}</div>
    {visible.length ? <>
      <div className="archive-desktop-grid">{visible.map((article, index) => <NewsCard key={article.id} article={article} featured={index === 0} />)}</div>
      <div className="archive-mobile-carousel"><MobileCarousel key={`${query}-${month}-${page}`} label="Archivio news" slides={visible.map(article => <NewsCard key={article.id} article={article} />)} /></div>
      {pageCount > 1 && <nav className="archive-pagination" aria-label="Pagine delle notizie"><button type="button" disabled={page === 1} onClick={() => changePage(page - 1)} aria-label="Pagina precedente"><ArrowLeft size={18} aria-hidden="true" /><span>Precedente</span></button><span>{page} / {pageCount}</span><button type="button" disabled={page === pageCount} onClick={() => changePage(page + 1)} aria-label="Pagina successiva"><span>Successiva</span><ArrowRight size={18} aria-hidden="true" /></button></nav>}
    </> : <div className="archive-empty"><Newspaper size={32} strokeWidth={1.4} aria-hidden="true" /><h3>Nessuna notizia trovata.</h3><p>Prova con un’altra parola o un altro mese.</p><button type="button" onClick={reset}>Mostra tutte le notizie</button></div>}
  </section>;
}
