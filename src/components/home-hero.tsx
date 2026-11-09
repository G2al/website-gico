import Image from "next/image";
import { GraduationCap, HeartHandshake } from "lucide-react";
import { originalPage } from "@/lib/navigation";
import { ArrowLink } from "./arrow-link";
import { Blob, Dots, Ring, Sparkle, Squiggle, Wave } from "./decor";
import "./home-hero.css";

const centres = [
  {
    id: "perle",
    icon: HeartHandshake,
    overline: "Centro Sociale Polifunzionale per Disabili",
    name: "Le Perle Preziose",
    description: "Accoglienza, assistenza, laboratori e partecipazione per le persone con disabilità, dal 2013.",
    image: "/images/chi-siamo-gico.webp",
    alt: "Ospiti e operatori del Centro Sociale Le Perle Preziose durante le attività estive",
    href: originalPage("/centro-sociale-polifunzionale/"),
    secondary: { label: "Laboratori e attività", href: originalPage("/servizi-centro-sociale/") },
  },
  {
    id: "apicella",
    icon: GraduationCap,
    overline: "Centro Studi, Orientamento e Formazione Professionale",
    name: "Edoardo Apicella",
    description: "Orientamento, corsi professionali, certificazioni e accompagnamento negli studi, dal 2002.",
    image: "/images/pagina-centro-di-formazione-2.webp",
    alt: "Un’aula del Centro di Formazione Edoardo Apicella",
    href: originalPage("/centro-di-formazione/"),
    secondary: { label: "Richiedi informazioni", href: originalPage("/richiedi-informazioni/") },
  },
];

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <Blob className="hero-blob-1 float-slow" color="#cdeaf3" />
      <Ring className="hero-ring float-fast" color="#f7b500" />
      <Dots className="hero-dots" color="#0089ab" />
      <div className="wrap">
        <div className="hero-intro">
          <p className="kicker">GiCo Società Cooperativa Sociale – Impresa Sociale</p>
          <h1 id="hero-title">Due realtà, <span className="highlight">una stessa missione</span>: la persona al centro.</h1>
          <Squiggle className="hero-squiggle" color="#0089ab" />
          <p className="lead">A Trentola Ducenta, nel complesso della Piccola Casa della Divina Provvidenza – Cottolengo, accogliamo le persone con disabilità e accompagniamo chi studia, lavora o cerca lavoro.</p>
        </div>
        <div className="hero-centres">
          {centres.map(({ icon: Icon, ...centre }, index) => (
            <article className={`hero-centre is-${centre.id}`} key={centre.id} aria-labelledby={`hero-centre-${centre.id}`}>
              <Sparkle className="hero-centre-sparkle float-fast" color="#f7b500" />
              <div className="hero-centre-photo">
                <Image src={centre.image} alt={centre.alt} fill loading="eager" fetchPriority={index === 0 ? "high" : "auto"} sizes="(max-width: 900px) calc(100vw - 48px), 560px" />
                <span className="hero-centre-badge" aria-hidden="true"><Icon size={26} strokeWidth={2} /></span>
              </div>
              <div className="hero-centre-body">
                <p className="hero-centre-overline">{centre.overline}</p>
                <h2 id={`hero-centre-${centre.id}`}>{centre.name}</h2>
                <p>{centre.description}</p>
                <div className="actions">
                  <ArrowLink href={centre.href} className="arrow-link-yellow">Scopri il Centro</ArrowLink>
                  <a className="text-link" href={centre.secondary.href}>{centre.secondary.label}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Wave color="#00708c" className="hero-wave" />
    </section>
  );
}
