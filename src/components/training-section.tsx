import { ArrowRight } from "lucide-react";
import { navigation, originalPage } from "@/lib/navigation";
import { coursePath, courses } from "@/lib/courses";
import { trainingCentre } from "@/lib/institutional-content";
import { ArrowLink } from "./arrow-link";
import { ScrollReveal } from "./scroll-reveal";
import "./training-section.css";

const trainingMenu = navigation.find(item => item.label === "Centro di Formazione");
const areas = trainingMenu?.children ?? [];
const highlighted = courses.filter(course => course.highlight);

export function TrainingSection() {
  return (
    <section id="centro-di-formazione" className="section training-section" aria-labelledby="training-title">
      <ScrollReveal>
        <div className="wrap">
          <div className="section-head" data-reveal>
            <p className="kicker">Centro Studi, Orientamento e Formazione Professionale</p>
            <h2 id="training-title">Edoardo Apicella</h2>
            <p className="lead">{trainingCentre.presentation[0]}</p>
          </div>
          <ul className="training-areas">
            {areas.map(({ icon: Icon, ...area }, index) => (
              <li key={area.href} data-reveal data-reveal-delay={index * 60}>
                <a className="card is-accent training-area" href={area.href}>
                  <span className="training-area-icon" aria-hidden="true"><Icon size={22} strokeWidth={1.7} /></span>
                  <h3>{area.label}</h3>
                  <p>{area.description}</p>
                </a>
              </li>
            ))}
          </ul>
          <div className="training-highlight" data-reveal>
            <div className="training-highlight-copy">
              <h3>Corsi professionali in evidenza</h3>
              <p>Percorsi di formazione finanziata e autofinanziata, con qualifiche riconosciute dalla Regione Campania. Per i corsi autofinanziati sono previsti <strong>pagamenti rateizzabili</strong> e <strong>tutor dedicati</strong>.</p>
              <div className="actions">
                <ArrowLink href={originalPage("/richiedi-informazioni/")}>Richiedi informazioni</ArrowLink>
                <a className="text-link" href={originalPage("/area-attivita/corsi-di-formazione-professionale/")}>Tutti i corsi</a>
              </div>
            </div>
            <ul className="training-courses">
              {highlighted.map(course => (
                <li key={course.slug}><a href={coursePath(course.slug)}><span>{course.title}</span><ArrowRight size={18} aria-hidden="true" /></a></li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
