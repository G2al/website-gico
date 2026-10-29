import type { Metadata } from "next";
import { BadgeCheck, Users } from "lucide-react";
import { InstitutionalPage } from "@/components/institutional-page";
import { CourseGrid } from "@/components/course-grid";
import { coursesIn } from "@/lib/courses";
import { originalPage } from "@/lib/navigation";
import "@/components/training-pages.css";

export const metadata: Metadata = {
  title: "Lingue e Scuola di Inglese | GiCo – Centro Edoardo Apicella",
  description: "Test centre autorizzato British Institutes e scuola di inglese per bambini e adulti con preparazione alle certificazioni Cambridge, presso il Centro Edoardo Apicella.",
};

export default function LanguagesPage() {
  return <InstitutionalPage
    title="Lingue e Scuola di Inglese"
    overline="Centro Studi, Orientamento e Formazione Professionale “Edoardo Apicella”"
    intro="Corsi, certificazioni e percorsi di apprendimento della lingua inglese per bambini, ragazzi e adulti."
    path="/area-attivita/certificazioni-linguistiche"
    parent={{ label: "Centro di Formazione", href: "/centro-di-formazione" }}
    sections={[{ id: "offerta", label: "Test centre e scuola di inglese" }, { id: "certificazioni", label: "Certificazioni" }]}
  >
    <section id="offerta" className="section" aria-labelledby="offerta-title">
      <div className="wrap">
        <div className="section-head" data-reveal><h2 id="offerta-title">Test centre e scuola di inglese</h2></div>
        <ul className="offer-grid is-two">
          <li data-reveal>
            <div className="card is-accent">
              <span className="offer-icon" aria-hidden="true"><BadgeCheck size={22} strokeWidth={1.7} /></span>
              <h3>Test centre autorizzato British Institutes</h3>
              <p>Corsi e certificazioni di lingua inglese presso il nostro Centro, test centre autorizzato British Institutes.</p>
            </div>
          </li>
          <li data-reveal data-reveal-delay="60">
            <div className="card is-accent">
              <span className="offer-icon" aria-hidden="true"><Users size={22} strokeWidth={1.7} /></span>
              <h3>Scuola di inglese per bambini e adulti</h3>
              <p>Percorsi di apprendimento della lingua e preparazione agli esami per il conseguimento delle certificazioni Cambridge.</p>
              <a className="text-link" href={originalPage("/richiedi-informazioni/")}>Richiedi informazioni</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section id="certificazioni" className="section section-alt" aria-labelledby="certificazioni-title">
      <div className="wrap">
        <div className="section-head" data-reveal><h2 id="certificazioni-title">Certificazioni</h2></div>
        <CourseGrid courses={coursesIn("lingue")} />
      </div>
    </section>
  </InstitutionalPage>;
}
