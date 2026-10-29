import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/institutional-page";
import { CourseGrid } from "@/components/course-grid";
import { coursesIn } from "@/lib/courses";
import "@/components/training-pages.css";

export const metadata: Metadata = {
  title: "Certificazioni Informatiche | GiCo – Centro Edoardo Apicella",
  description: "Certificazioni informatiche presso il Centro Edoardo Apicella: Ei-Center CERTIPASS, PEKIT Center, EQIA Point e convenzione ISORS. EIPASS, PEKIT, LIM, Tablet e Coding.",
};

const entities = [
  { name: "CERTIPASS", text: "GiCo è Ei-Center dal 2015, per i corsi CERTIPASS e le certificazioni EIPASS." },
  { name: "PEKIT – Fondazione Sviluppo Europa", text: "GiCo è PEKIT Center dal 27 marzo 2021." },
  { name: "EQIA (già IDPASS), gestore INTERTEK", text: "GiCo è EQIA Point dal 2026." },
  { name: "ISORS", text: "Convenzione con ISORS." },
];

export default function ComputerCertificationsPage() {
  return <InstitutionalPage
    title="Certificazioni Informatiche"
    overline="Centro Studi, Orientamento e Formazione Professionale “Edoardo Apicella”"
    intro="Certificazioni delle competenze digitali riconosciute in ambito scolastico, universitario, concorsuale e lavorativo."
    path="/area-attivita/certificazioni-informatiche"
    parent={{ label: "Centro di Formazione", href: "/centro-di-formazione" }}
    sections={[{ id: "enti", label: "Enti e rapporti attivi" }, { id: "certificazioni", label: "Le certificazioni" }]}
  >
    <section id="enti" className="section" aria-labelledby="enti-title">
      <div className="wrap split-section">
        <div data-reveal>
          <h2 id="enti-title">Enti e rapporti attivi</h2>
          <p className="lead">I rapporti con gli enti certificatori che consentono di sostenere gli esami presso il Centro.</p>
        </div>
        <ul className="recognitions" data-reveal data-reveal-delay="60">{entities.map(item => <li key={item.name}><strong>{item.name}</strong><span>{item.text}</span></li>)}</ul>
      </div>
    </section>
    <section id="certificazioni" className="section section-alt" aria-labelledby="certificazioni-title">
      <div className="wrap">
        <div className="section-head" data-reveal><h2 id="certificazioni-title">Le certificazioni</h2></div>
        <CourseGrid courses={coursesIn("informatica")} />
      </div>
    </section>
  </InstitutionalPage>;
}
