"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import { originalPage } from "@/lib/navigation";
import { ArrowLink } from "./arrow-link";
import { ScrollReveal } from "./scroll-reveal";
import { MobileCarousel } from "./mobile-carousel";
import "./news-section.css";

type HomeNewsArticle = { id: string; title: string; date: string; day: string; month: string; dateLabel: string; image: string | null; alt: string; href: string };
export function NewsSection({ newsArticles }: { newsArticles: HomeNewsArticle[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const article = newsArticles[active] ?? newsArticles[0];
  if (!article) return <section className="news-section"><h2>News</h2><p>Nessuna notizia pubblicata al momento.</p></section>;

  const handleSelect = (index: number) => { setActive(index); };
  const handleKeys = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % newsArticles.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + newsArticles.length) % newsArticles.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = newsArticles.length - 1;
    else return;
    event.preventDefault();
    handleSelect(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="news" className="news-section" aria-labelledby="news-title">
      <ScrollReveal>
        <header className="news-heading" data-reveal>
          <div><p className="news-eyebrow">Dalla vita di GiCo</p><h2 id="news-title">News</h2></div>
          <ArrowLink href={originalPage("/news/")} secondary>Tutte le news</ArrowLink>
        </header>
        <div className="news-story" data-reveal>
          <div className="news-feature">
            <div className="news-photo-window" role="tabpanel" id="news-photo-panel" aria-labelledby={`news-tab-${article.id}`} tabIndex={0}>
              {newsArticles.map((item, index) => (
                <div key={item.id} className={`news-photo-slide${index === active ? " is-active" : ""}`} aria-hidden={index !== active}>
                  {item.image && <Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) calc(100vw - 40px), (max-width: 1440px) 52vw, 740px" />}
                  <time className="news-photo-date" dateTime={item.date}><strong>{item.day}</strong><span>{item.month}</span></time>
                </div>
              ))}
              <span className="news-photo-count" aria-hidden="true">0{active + 1}<span> / {String(newsArticles.length).padStart(2, "0")}</span></span>
            </div>
            <a className="news-read-link" href={article.href} aria-label={`Leggi altro: ${article.title}`}><span>Leggi altro</span><span className="news-read-arrow" aria-hidden="true"><ArrowUpRight size={23} strokeWidth={1.6} /></span></a>
          </div>
          <div className="news-timeline" role="tablist" aria-label="Scegli una notizia" aria-orientation="vertical">
            {newsArticles.map((item, index) => (
              <button className="news-story-tab" type="button" role="tab" id={`news-tab-${item.id}`} key={item.id} aria-selected={active === index} aria-controls="news-photo-panel" tabIndex={active === index ? 0 : -1} ref={element => { tabRefs.current[index] = element; }} onClick={() => handleSelect(index)} onKeyDown={event => handleKeys(event, index)}>
                <span className="news-tab-top"><time dateTime={item.date}>{item.dateLabel}</time><span className="news-tab-dot" aria-hidden="true" /></span>
                <span className="news-tab-title">{item.title}</span>
                <span className="news-tab-bottom"><span>{active === index ? "In primo piano" : "Scopri la notizia"}</span><ArrowRight size={18} aria-hidden="true" /></span>
              </button>
            ))}
          </div>
        </div>
        <div className="news-mobile-carousel">
          <MobileCarousel label="News GiCo" slides={newsArticles.map(item => (
            <article className="news-mobile-card" key={item.id}>
              <div className="news-mobile-photo">{item.image && <Image src={item.image} alt={item.alt} fill sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 800px) calc(100vw - 64px), 1px" />}<time className="news-photo-date" dateTime={item.date}><strong>{item.day}</strong><span>{item.month}</span></time></div>
              <div className="news-mobile-body"><time dateTime={item.date}>{item.dateLabel}</time><h3>{item.title}</h3><a className="news-read-link" href={item.href} aria-label={`Leggi altro: ${item.title}`}><span>Leggi altro</span><span className="news-read-arrow" aria-hidden="true"><ArrowUpRight size={22} /></span></a></div>
            </article>
          ))} />
        </div>
      </ScrollReveal>
    </section>
  );
}
