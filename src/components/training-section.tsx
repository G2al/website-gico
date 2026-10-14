import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { trainingLinks } from "@/lib/navigation";
import { ScrollReveal } from "./scroll-reveal";
import { MobileCarousel } from "./mobile-carousel";
import "./training-section.css";

const trainingAreas = [
  {
    ...trainingLinks[0],
    image: "/images/formazione-universitaria.webp",
    description: "Orientamento e supporto per accompagnarti nel tuo percorso accademico.",
  },
  {
    ...trainingLinks[1],
    image: "/images/formazione-professionale.webp",
    description: "Percorsi per acquisire competenze e qualifiche per il mondo del lavoro.",
  },
  {
    ...trainingLinks[2],
    image: "/images/certificazioni-informatiche.webp",
    description: "Valorizza le tue competenze digitali con le certificazioni EIPASS e PEKIT.",
  },
  {
    ...trainingLinks[3],
    image: "/images/certificazioni-linguistiche.webp",
    description: "Certificazioni di inglese e tedesco per dare valore alle tue competenze.",
  },
];

function TrainingCard({ area, titleId }: { area: typeof trainingAreas[number]; titleId: string }) {
  return (
    <a href={area.href} className="training-card" aria-labelledby={titleId}>
      <div className="training-card-photo"><Image src={area.image} alt="" fill sizes="(max-width: 600px) calc(100vw - 56px), (max-width: 1100px) 45vw, 320px" /></div>
      <div className="training-card-body">
        <div className="training-card-heading"><h3 id={titleId}>{area.label}</h3><span className="training-card-arrow" aria-hidden="true"><ArrowUpRight size={20} strokeWidth={1.6} /></span></div>
        <p>{area.description}</p>
      </div>
    </a>
  );
}

export function TrainingSection() {
  return (
    <section id="centro-di-formazione" className="training-section" aria-labelledby="training-title">
      <ScrollReveal>
        <div className="training-heading" data-reveal>
          <p className="training-eyebrow">Centro Edoardo Apicella</p>
          <h2 id="training-title">Centro di Formazione</h2>
          <p className="training-description">La conoscenza incontra la pratica, le competenze diventano opportunità.<br className="desktop-break" /> Percorsi di studio e formazione per accompagnare la tua crescita.</p>
        </div>
        <ul className="training-grid">
          {trainingAreas.map((area, index) => (
            <li key={area.href} className="training-grid-item" data-reveal data-reveal-delay={index * 90}>
              <TrainingCard area={area} titleId={`training-card-title-${index}`} />
            </li>
          ))}
        </ul>
        <div className="training-mobile-carousel"><MobileCarousel label="Centro di Formazione" slides={trainingAreas.map((area, index) => <TrainingCard key={area.href} area={area} titleId={`training-mobile-title-${index}`} />)} /></div>
      </ScrollReveal>
    </section>
  );
}
