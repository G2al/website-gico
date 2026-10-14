import Image from "next/image";
import { ArrowLink } from "./arrow-link";
import { originalPage } from "@/lib/navigation";
import { CountUp } from "./count-up";
import "./about-section.css";

// Dates verified on GiCo's Centro di Formazione and Centro Sociale pages.
const milestones = [
  { value: "2002", label: "Nel mondo della formazione" },
  { value: "2013", label: "Nasce Le Perle Preziose" },
  { value: "2", label: "Anime: sociale e formativa" },
];

export function AboutSection() {
  return (
    <section id="chi-siamo" className="about-section" aria-labelledby="about-title">
      <div className="about-panel">
        <div className="about-introduction">
          <div className="about-heading">
            <p className="about-eyebrow">Chi siamo</p>
            <h2 id="about-title">Due anime,<br />un unico impegno.</h2>
          </div>
          <div className="about-copy">
            <p>
              <span className="about-lead">Siamo GiCo, una cooperativa sociale che mette al centro le persone.</span>{" "}
              A Trentola Ducenta, nel complesso del Cottolengo, uniamo accoglienza,
              inclusione e crescita: con il Centro Sociale <strong>“Le Perle Preziose”</strong> accompagniamo
              le persone con disabilità; con il Centro di Formazione <strong>“Edoardo Apicella”</strong> sviluppiamo
              competenze personali e professionali.
            </p>
            <ArrowLink href={originalPage("/gico/")} className="about-link">Scopri la nostra storia</ArrowLink>
          </div>
        </div>
        <div className="about-visuals">
          <div className="about-photograph">
            {/* Source: GiCo's “Estate GiCo: ogni giorno un motivo per sorridere” article. */}
            <Image
              src="/images/chi-siamo-gico.webp"
              alt="Un momento condiviso durante le attività estive del Centro Sociale GiCo Le Perle Preziose"
              fill
              sizes="(max-width: 600px) calc(100vw - 64px), (max-width: 900px) calc(100vw - 160px), (max-width: 1440px) 65vw, 920px"
              className="about-image"
            />
          </div>
          <dl className="about-milestones">
            {milestones.map((milestone) => (
              <div className="about-milestone" key={milestone.value}>
                <dt>{milestone.label}</dt>
                <dd><CountUp value={Number(milestone.value)} /></dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="about-mobile-action"><ArrowLink href={originalPage("/gico/")} className="about-link">Scopri la nostra storia</ArrowLink></div>
      </div>
    </section>
  );
}
