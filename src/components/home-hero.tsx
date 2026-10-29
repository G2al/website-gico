import Image from "next/image";
import { originalPage } from "@/lib/navigation";
import { ArrowLink } from "./arrow-link";
import "./home-hero.css";

const centres = [
  {
    id: "perle",
    overline: "Centro Sociale Polifunzionale per Disabili",
    name: "Le Perle Preziose",
    description: "Accoglienza, assistenza, socializzazione e partecipazione delle persone con disabilità, dal 2013.",
    image: "/images/chi-siamo-gico.webp",
    alt: "Ospiti e operatori del Centro Sociale Le Perle Preziose durante le attività estive",
    href: originalPage("/centro-sociale-polifunzionale/"),
    secondary: { label: "Laboratori e attività", href: originalPage("/servizi-centro-sociale/") },
  },
  {
    id: "apicella",
    overline: "Centro Studi, Orientamento e Formazione Professionale",
    name: "Edoardo Apicella",
    description: "Orientamento, formazione professionale, certificazioni e accompagnamento negli studi, dal 2002.",
    image: "/images/hero-formazione.webp",
    alt: "Un’aula del Centro di Formazione Edoardo Apicella",
    href: originalPage("/centro-di-formazione/"),
    secondary: { label: "Richiedi informazioni", href: originalPage("/richiedi-informazioni/") },
  },
];

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero-intro">
          <p className="kicker">GiCo Società Cooperativa Sociale – Impresa Sociale</p>
          <h1 id="hero-title">Due realtà, una stessa missione: la centralità della persona.</h1>
          <p className="lead">A Trentola Ducenta, nel complesso della Piccola Casa della Divina Provvidenza – Cottolengo, accogliamo le persone con disabilità e accompagniamo chi studia, lavora o cerca lavoro.</p>
        </div>
        <div className="hero-centres">
          {centres.map((centre, index) => (
            <article className={`hero-centre is-${centre.id}`} key={centre.id} aria-labelledby={`hero-centre-${centre.id}`}>
              <div className="hero-centre-photo">
                <Image src={centre.image} alt={centre.alt} fill loading="eager" fetchPriority={index === 0 ? "high" : "auto"} sizes={index === 0 ? "(max-width: 900px) calc(100vw - 48px), 680px" : "(max-width: 900px) calc(100vw - 48px), 500px"} />
              </div>
              <div className="hero-centre-body">
                <p className="kicker">{centre.overline}</p>
                <h2 id={`hero-centre-${centre.id}`}>{centre.name}</h2>
                <p>{centre.description}</p>
                <div className="actions">
                  <ArrowLink href={centre.href}>Scopri il Centro</ArrowLink>
                  <a className="text-link" href={centre.secondary.href}>{centre.secondary.label}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
