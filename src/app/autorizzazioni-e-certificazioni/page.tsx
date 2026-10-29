import type { Metadata } from "next";
import { InstitutionalPage, DocumentCards } from "@/components/institutional-page";
import { certificates, centreNames, socialCentre, trainingCentre, trainingRecognitions } from "@/lib/institutional-content";
import "@/components/training-pages.css";
import "./authorizations.css";

export const metadata: Metadata = {
  title: "Autorizzazioni e Certificazioni | GiCo",
  description: "Autorizzazioni del Centro Sociale Le Perle Preziose, accreditamento regionale, centri autorizzati e convenzioni del Centro di Formazione Edoardo Apicella, certificazioni ISO di GiCo.",
};

export default function AuthorizationsPage() {
  return <InstitutionalPage
    title="Autorizzazioni e Certificazioni"
    intro="Le autorizzazioni, gli accreditamenti e le certificazioni di qualità delle due realtà di GiCo."
    path="/autorizzazioni-e-certificazioni"
    sections={[{ id: "centro-sociale", label: "Centro Sociale" }, { id: "centro-formazione", label: "Centro di Formazione" }, { id: "certificazioni", label: "Certificazioni di qualità" }]}
  >
    <section id="centro-sociale" className="section" aria-labelledby="centro-sociale-title">
      <div className="wrap split-section">
        <div data-reveal>
          <p className="kicker">Autorizzazioni</p>
          <h2 id="centro-sociale-title">{centreNames.social}</h2>
        </div>
        <div className="info-box" data-reveal data-reveal-delay="60">
          <ul>{socialCentre.authorizations.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </section>

    <section id="centro-formazione" className="section section-alt" aria-labelledby="centro-formazione-title">
      <div className="wrap split-section">
        <div data-reveal>
          <p className="kicker">Accreditamenti, centri autorizzati e convenzioni</p>
          <h2 id="centro-formazione-title">{centreNames.training}</h2>
        </div>
        <div data-reveal data-reveal-delay="60">
          <div className="recognitions-group">
            <h3>Accreditamento</h3>
            <div className="info-box">
              <p><strong>{trainingCentre.accreditation.title}.</strong> {trainingCentre.accreditation.text}</p>
              <p className="code">Codice organismo: {trainingCentre.accreditation.code}</p>
            </div>
          </div>
          <div className="recognitions-group">
            <h3>Centri autorizzati</h3>
            <ul className="recognitions">{trainingRecognitions.centres.map(item => <li key={item.name}><strong>{item.name}</strong><span>{item.text}</span></li>)}</ul>
          </div>
          <div className="recognitions-group">
            <h3>Convenzioni</h3>
            <ul className="recognitions">{trainingRecognitions.agreements.map(item => <li key={item.name}><strong>{item.name}</strong><span>{item.text}</span></li>)}</ul>
          </div>
          <div className="recognitions-group">
            <h3>Formazione universitaria</h3>
            <p className="authorizations-note">Collaborazioni con università telematiche per corsi di laurea, master, perfezionamenti e percorsi di alta formazione.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="certificazioni" className="section" aria-labelledby="certifications-title">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <h2 id="certifications-title">Certificazioni di qualità</h2>
          <p className="lead">I certificati sono disponibili in formato PDF.</p>
        </div>
        <DocumentCards documents={certificates} />
      </div>
    </section>
  </InstitutionalPage>;
}
