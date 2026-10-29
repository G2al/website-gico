import type { Metadata } from "next";
import { Landmark, Wallet } from "lucide-react";
import { InstitutionalPage } from "@/components/institutional-page";
import { CourseGrid } from "@/components/course-grid";
import { coursesIn } from "@/lib/courses";
import { trainingCentre } from "@/lib/institutional-content";
import { originalPage } from "@/lib/navigation";
import "@/components/training-pages.css";

export const metadata: Metadata = {
  title: "Formazione Professionale | GiCo – Centro Edoardo Apicella",
  description: "Corsi di formazione professionale finanziati e autofinanziati del Centro Edoardo Apicella: OSS, OPI, OSA, Segretario-Coordinatore Amministrativo, Operatore Amministrativo Contabile e altre qualifiche regionali.",
};

const professional = coursesIn("professionale");
const highlighted = professional.filter(course => course.highlight);
const others = professional.filter(course => !course.highlight);

export default function ProfessionalTrainingPage() {
  return <InstitutionalPage
    title="Formazione Professionale"
    overline="Centro Studi, Orientamento e Formazione Professionale “Edoardo Apicella”"
    intro="Percorsi professionalizzanti per acquisire una qualifica riconosciuta dalla Regione Campania, con attività di orientamento e tutoraggio."
    path="/area-attivita/corsi-di-formazione-professionale"
    parent={{ label: "Centro di Formazione", href: "/centro-di-formazione" }}
    sections={[{ id: "modalita", label: "Finanziata e autofinanziata" }, { id: "corsi", label: "I corsi" }]}
  >
    <section id="modalita" className="section" aria-labelledby="modalita-title">
      <div className="wrap">
        <div className="section-head" data-reveal><h2 id="modalita-title">Formazione finanziata e autofinanziata</h2></div>
        <ul className="offer-grid is-two">
          <li data-reveal>
            <div className="card is-accent">
              <span className="offer-icon" aria-hidden="true"><Landmark size={22} strokeWidth={1.7} /></span>
              <h3>Formazione finanziata</h3>
              <p>Percorsi realizzati nell’ambito di programmi e avvisi pubblici, come il programma PAR GOL – Garanzia di Occupabilità dei Lavoratori.</p>
              <a className="text-link" href={originalPage("/par-gol/")}>Scopri PAR GOL</a>
            </div>
          </li>
          <li data-reveal data-reveal-delay="60">
            <div className="card is-accent">
              <span className="offer-icon" aria-hidden="true"><Wallet size={22} strokeWidth={1.7} /></span>
              <h3>Formazione autofinanziata</h3>
              <p>Corsi a cui iscriversi in autonomia, con <strong>pagamenti rateizzabili</strong> e <strong>tutor dedicati</strong> che accompagnano ogni partecipante durante il percorso.</p>
              <a className="text-link" href={originalPage("/richiedi-informazioni/")}>Richiedi informazioni</a>
            </div>
          </li>
        </ul>
        <div className="info-box accreditation-box is-spaced" data-reveal>
          <h3>Qualifiche rilasciate dalla Regione Campania</h3>
          <p>{trainingCentre.accreditation.text} Codice organismo: {trainingCentre.accreditation.code}.</p>
        </div>
      </div>
    </section>

    <section id="corsi" className="section section-alt" aria-label="I corsi">
      <div className="wrap">
        <div className="course-group">
          <div className="section-head" data-reveal><h2>Corsi in evidenza</h2></div>
          <CourseGrid courses={highlighted} />
        </div>
        <div className="course-group">
          <div className="section-head" data-reveal><h2>Altri corsi</h2></div>
          <CourseGrid courses={others} />
        </div>
      </div>
    </section>
  </InstitutionalPage>;
}
