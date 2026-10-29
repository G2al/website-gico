import Image from "next/image";
import { originalPage } from "@/lib/navigation";
import { socialCentre } from "@/lib/institutional-content";
import { ArrowLink } from "./arrow-link";
import { ScrollReveal } from "./scroll-reveal";
import { VideoBlock } from "./video-block";
import "./perle-section.css";

const facts = [
  { label: "Dal", value: "2013" },
  { label: "Sede", value: "Complesso del Cottolengo, Trentola Ducenta" },
  { label: "Autorizzazione", value: "Ufficio di Piano, prot. n. 506 del 6 giugno 2013" },
  { label: "Budget di Salute", value: "Cogestore dei PTRI/BdS dal 2018" },
];

export function PerleSection() {
  return (
    <section id="le-perle-preziose" className="section section-alt perle-section" aria-labelledby="perle-title">
      <ScrollReveal>
        <div className="wrap">
          <div className="section-head" data-reveal>
            <p className="kicker">Centro Sociale Polifunzionale per Disabili</p>
            <h2 id="perle-title">Le Perle Preziose</h2>
            <p className="lead">{socialCentre.presentation[0]}</p>
          </div>
          <div className="perle-intro">
            <div className="perle-copy" data-reveal>
              <div className="prose">
                <p>{socialCentre.presentation[1]}</p>
                <p>{socialCentre.presentation[2]}</p>
              </div>
              <dl className="perle-facts">
                {facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
              </dl>
            </div>
            <div data-reveal data-reveal-delay="80">
              <VideoBlock video={{ src: null, poster: "/images/gallery-centro-sociale-14.webp", title: "Le attività del Centro Sociale Le Perle Preziose" }} />
            </div>
          </div>

          <h3 className="perle-areas-title" data-reveal>Laboratori e attività</h3>
          <ul className="perle-areas">
            {socialCentre.activityAreas.map((area, index) => (
              <li key={area.id} data-reveal data-reveal-delay={index * 60}>
                <a className="perle-area" href={`${originalPage("/servizi-centro-sociale/")}#${area.id}`}>
                  <span className="perle-area-photo"><Image src={area.image} alt="" fill sizes="(max-width: 600px) 112px, (max-width: 1100px) 33vw, 230px" /></span>
                  <span className="perle-area-body"><strong>{area.title}</strong><span>{area.summary}</span></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="actions perle-actions">
            <ArrowLink href={originalPage("/centro-sociale-polifunzionale/")}>Scopri il Centro</ArrowLink>
            <ArrowLink href={originalPage("/servizi-centro-sociale/")} secondary>Laboratori e attività</ArrowLink>
            <a className="text-link" href={originalPage("/gallery/")}>Gallery fotografica</a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
