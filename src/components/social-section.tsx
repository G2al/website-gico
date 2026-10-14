"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { originalPage } from "@/lib/navigation";
import { ArrowLink } from "./arrow-link";
import { ScrollReveal } from "./scroll-reveal";
import { MobileCarousel } from "./mobile-carousel";
import "./social-section.css";

const chapters = [
  {
    title: "Accoglienza",
    heading: "Il primo passo è sentirsi a casa.",
    description: "Al Centro Sociale Polifunzionale Le Perle Preziose, accoglienza e assistenza sono pensate per le persone con disabilità. Un luogo in cui ascoltare i bisogni e valorizzare ogni persona.",
    detail: "La persona, al centro",
    image: "/images/centro-sociale-esterno.webp",
    alt: "Il giardino e gli edifici del Centro Sociale GiCo, con il prato e la grande palma",
  },
  {
    title: "Spazi da vivere",
    heading: "Dentro e fuori, spazio alle possibilità.",
    description: "Ambienti dedicati alle attività di gruppo, laboratori e aree per il relax. Spazi progettati per favorire accessibilità, comfort e incontro, insieme al verde che circonda la struttura.",
    detail: "Insieme, ogni giorno",
    image: "/images/hero-centro-sociale.webp",
    alt: "Gli spazi verdi del Centro Sociale GiCo, con decorazioni colorate e la struttura sullo sfondo",
  },
  {
    title: "Partecipazione",
    heading: "Le esperienze più belle si fanno insieme.",
    description: "Laboratori creativi, musica, movimento e giardinaggio: attività per esprimersi, coltivare interessi e condividere esperienze. Piccoli momenti quotidiani che danno forma all’inclusione.",
    detail: "Ognuno porta qualcosa di prezioso",
    image: "/images/centro-sociale-attivita.webp",
    alt: "Attività condivisa al Centro Sociale GiCo intorno a un cartellone sull'inclusione",
  },
];

export function SocialSection() {
  const [active, setActive] = useState(0);
  const [mobileActive, setMobileActive] = useState(0);
  const storyRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<(HTMLLIElement | null)[]>([]);
  const clickDeadline = useRef(0);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!desktop.matches || !storyRef.current) return;
      if (performance.now() < clickDeadline.current) return;
      const bounds = storyRef.current.getBoundingClientRect();
      if (bounds.top >= window.innerHeight || bounds.bottom <= 0) return;
      const target = window.innerHeight * 0.48;
      let nearest = 0;
      let distance = Infinity;
      chapterRefs.current.forEach((chapter, index) => {
        if (!chapter) return;
        const rect = chapter.getBoundingClientRect();
        const nextDistance = Math.abs(rect.top + rect.height / 2 - target);
        if (nextDistance < distance) {
          nearest = index;
          distance = nextDistance;
        }
      });
      setActive(previous => previous === nearest ? previous : nearest);
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    const resumeScrolling = () => { clickDeadline.current = 0; schedule(); };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("wheel", resumeScrolling, { passive: true });
    window.addEventListener("touchstart", resumeScrolling, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("wheel", resumeScrolling);
      window.removeEventListener("touchstart", resumeScrolling);
    };
  }, []);

  const handleChapterSelect = (index: number, eventTime: number) => {
    setActive(index);
    if (window.matchMedia("(min-width: 901px)").matches) {
      // Keep the chosen photograph steady during the smooth jump between chapters.
      clickDeadline.current = eventTime + 1000;
      chapterRefs.current[index]?.scrollIntoView({
        block: "center",
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      });
    }
  };

  return (
    <section id="centro-sociale" className="social-section" aria-labelledby="social-title">
      <div className="social-panel">
        <ScrollReveal>
          <header className="social-heading" data-reveal>
            <div>
              <p className="social-eyebrow">Centro Sociale · Le Perle Preziose</p>
              <h2 id="social-title">Uno spazio per sentirsi accolti.<br /><span>E crescere insieme.</span></h2>
            </div>
            <div className="social-intro">
              <p>Nel complesso del Cottolengo di Trentola Ducenta, un luogo dove accoglienza, cura e vita condivisa si incontrano.</p>
              <span className="social-location"><MapPin size={15} aria-hidden="true" /> Trentola Ducenta</span>
            </div>
          </header>
        </ScrollReveal>

        <div className="social-story" ref={storyRef}>
          <div className="social-photo-column">
            <div className="social-photo-stack" id="social-story-photo" role="group" aria-label="Fotografie del Centro Sociale">
              {chapters.map((chapter, index) => (
                <div className={`social-photo-slide${active === index ? " is-active" : ""}`} key={chapter.title} aria-hidden={active !== index}>
                  <Image src={chapter.image} alt={chapter.alt} fill sizes="(max-width: 900px) 1px, (max-width: 1440px) 48vw, 640px" />
                  <div className="social-photo-caption">
                    <p>{chapter.detail}</p>
                    <span>{chapter.title}</span>
                  </div>
                </div>
              ))}
              <a className="social-gallery-link" href={originalPage("/gallery/")} aria-label="Esplora la gallery del Centro Sociale"><ArrowUpRight size={22} aria-hidden="true" /></a>
              <div className="social-photo-controls" aria-label="Scegli una tappa del racconto">
                {chapters.map((chapter, index) => (
                  <button type="button" key={chapter.title} aria-label={`Mostra ${chapter.title}`} aria-pressed={active === index} aria-controls="social-story-photo" onClick={event => handleChapterSelect(index, event.timeStamp)}>
                    <span aria-hidden="true">0{index + 1}</span>
                  </button>
                ))}
              </div>
            </div>
            <p className="social-scroll-hint"><ArrowDown size={14} aria-hidden="true" /> Scorri per conoscere il centro, oppure scegli una tappa</p>
          </div>

          <ScrollReveal>
          <ol className="social-chapters">
            {chapters.map((chapter, index) => (
              <li className={`social-chapter${active === index ? " is-active" : ""}`} key={chapter.title} ref={element => { chapterRefs.current[index] = element; }}>
                <div className="social-chapter-label"><span className="social-chapter-number" aria-hidden="true">0{index + 1}</span><span>{chapter.title}</span></div>
                <div className="social-chapter-content">
                  <h3><button type="button" onClick={event => handleChapterSelect(index, event.timeStamp)} aria-pressed={active === index} aria-controls="social-story-photo">{chapter.heading}</button></h3>
                  <p>{chapter.description}</p>
                </div>
              </li>
            ))}
          </ol>
          </ScrollReveal>
        </div>

        <div className="social-mobile-story">
          <MobileCarousel label="Centro Sociale" numbered timeline onActiveChange={setMobileActive} slides={chapters.map(chapter => (
            <div className="social-carousel-photo" key={chapter.title}>
              <Image src={chapter.image} alt={chapter.alt} fill sizes="(max-width: 600px) calc(100vw - 74px), (max-width: 900px) calc(100vw - 148px), 1px" />
            </div>
          ))} />
          <div className="social-mobile-copy">
            {chapters.map((chapter, index) => <div key={chapter.title} className={`social-mobile-text${mobileActive === index ? " is-active" : ""}`} aria-hidden={mobileActive !== index}>
              <h3>{chapter.heading}</h3>
              <p>{chapter.description}</p>
            </div>)}
          </div>
        </div>

        <div className="social-footer">
          <p>Conosci gli spazi.<br /><span>Scopri le persone, le attività, le possibilità.</span></p>
          <div className="social-actions">
            <ArrowLink href={originalPage("/servizi-centro-sociale/")}>Scopri i servizi</ArrowLink>
            <ArrowLink href={originalPage("/gallery/")} secondary>Esplora la gallery</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
