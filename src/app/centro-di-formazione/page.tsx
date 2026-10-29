import type { Metadata } from "next";
import { Landmark } from "lucide-react";
import { InstitutionalPage, InstitutionalStory } from "@/components/institutional-page";
import { navigation, originalPage } from "@/lib/navigation";
import { trainingCentre, trainingRecognitions } from "@/lib/institutional-content";
import "@/components/training-pages.css";

export const metadata: Metadata = {
  title: "Edoardo Apicella – Centro Studi, Orientamento e Formazione Professionale | GiCo",
  description: "Il Centro Studi, Orientamento e Formazione Professionale Edoardo Apicella di GiCo: formazione professionale finanziata e autofinanziata, formazione universitaria, certificazioni informatiche e linguistiche.",
};

const areas = navigation.find(item => item.label === "Centro di Formazione")?.children ?? [];

export default function TrainingCentrePage() {
  return <InstitutionalPage
    title="Edoardo Apicella"
    overline="Centro Studi, Orientamento e Formazione Professionale"
    intro={trainingCentre.presentation[0]}
    path="/centro-di-formazione"
    parent={null}
    sections={[{ id: "il-centro", label: "Il Centro" }, { id: "offerta", label: "L’offerta formativa" }, { id: "accreditamento", label: "Accreditamento e centri autorizzati" }]}
  >
    <InstitutionalStory id="il-centro" title="Orientamento, formazione e aggiornamento" paragraphs={trainingCentre.presentation.slice(1)} image={{ src: "/images/pagina-centro-di-formazione-2.webp", alt: "Un’aula del Centro di Formazione Edoardo Apicella" }} />

    <section id="offerta" className="section section-alt" aria-labelledby="offerta-title">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <h2 id="offerta-title">L’offerta formativa</h2>
          <p className="lead">Percorsi per studenti, lavoratori e persone in cerca di occupazione.</p>
        </div>
        <ul className="offer-grid">
          {areas.map(({ icon: Icon, ...area }, index) => (
            <li key={area.href} data-reveal data-reveal-delay={index % 3 * 60}>
              <a className="card is-accent" href={area.href}>
                <span className="offer-icon" aria-hidden="true"><Icon size={22} strokeWidth={1.7} /></span>
                <h3>{area.label}</h3>
                <p>{area.description}</p>
              </a>
            </li>
          ))}
          <li data-reveal data-reveal-delay="120">
            <a className="card is-accent" href={originalPage("/par-gol/")}>
              <span className="offer-icon" aria-hidden="true"><Landmark size={22} strokeWidth={1.7} /></span>
              <h3>PAR GOL</h3>
              <p>Programma Garanzia di Occupabilità dei Lavoratori: catalogo dell’offerta formativa ed enti convenzionati.</p>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section id="accreditamento" className="section" aria-labelledby="accreditamento-title">
      <div className="wrap split-section">
        <div data-reveal>
          <h2 id="accreditamento-title">Accreditamento e centri autorizzati</h2>
          <p className="lead">Il Centro è accreditato dalla Regione Campania per la formazione professionale.</p>
        </div>
        <div data-reveal data-reveal-delay="60">
          <div className="info-box accreditation-box">
            <h3>{trainingCentre.accreditation.title}</h3>
            <p>{trainingCentre.accreditation.text}</p>
            <p className="code">Codice organismo: {trainingCentre.accreditation.code}</p>
          </div>
          <div className="recognitions-group">
            <h3>Centri autorizzati</h3>
            <ul className="recognitions">{trainingRecognitions.centres.map(item => <li key={item.name}><strong>{item.name}</strong><span>{item.text}</span></li>)}</ul>
          </div>
          <div className="recognitions-group">
            <h3>Convenzioni</h3>
            <ul className="recognitions">{trainingRecognitions.agreements.map(item => <li key={item.name}><strong>{item.name}</strong><span>{item.text}</span></li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  </InstitutionalPage>;
}
