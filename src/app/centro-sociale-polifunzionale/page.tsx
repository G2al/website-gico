import type { Metadata } from "next";
import Image from "next/image";
import { InstitutionalPage, InstitutionalPrinciples, InstitutionalStory } from "@/components/institutional-page";
import { ArrowLink } from "@/components/arrow-link";
import { VideoBlock } from "@/components/video-block";
import { socialCentre, socialValues } from "@/lib/institutional-content";
import { originalPage } from "@/lib/navigation";
import "./social-centre.css";

export const metadata: Metadata = {
  title: "Le Perle Preziose – Centro Sociale Polifunzionale per Disabili | GiCo",
  description: "Il Centro Sociale Polifunzionale per Disabili Le Perle Preziose: accoglienza, assistenza, socializzazione e partecipazione delle persone con disabilità a Trentola Ducenta, dal 2013.",
};

export default function SocialCentrePage() {
  return <InstitutionalPage
    title="Le Perle Preziose"
    overline="Centro Sociale Polifunzionale per Disabili"
    intro={socialCentre.presentation[0]}
    path="/centro-sociale-polifunzionale"
    parent={null}
    sections={[{ id: "il-centro", label: "Il Centro" }, { id: "spazi", label: "Gli spazi" }, { id: "attivita", label: "Laboratori e attività" }, { id: "valori", label: "I nostri valori" }, { id: "autorizzazioni", label: "Autorizzazioni" }]}
  >
    <InstitutionalStory id="il-centro" title="La persona al centro" paragraphs={socialCentre.presentation.slice(1)} image={{ src: "/images/pagina-il-centro-sociale.webp", alt: "Giardino e ingresso del Centro Sociale Polifunzionale Le Perle Preziose" }} />
    <InstitutionalStory id="spazi" title="Gli spazi" paragraphs={socialCentre.spaces} image={{ src: "/images/centro-sociale-spazi.webp", alt: "Gli spazi interni del Centro Sociale Le Perle Preziose" }} reverse alt />

    <section id="attivita" className="section" aria-labelledby="attivita-title">
      <div className="wrap">
        <div className="section-head is-split" data-reveal>
          <div>
            <h2 id="attivita-title">Laboratori e attività</h2>
            <p className="lead">Creatività, apprendimento, movimento e occasioni di incontro, nel rispetto delle possibilità e dei tempi di ciascuno.</p>
          </div>
          <ArrowLink href={originalPage("/servizi-centro-sociale/")} secondary>Tutte le attività</ArrowLink>
        </div>
        <div className="centre-activities">
          <ul className="centre-areas">
            {socialCentre.activityAreas.map((area, index) => (
              <li key={area.id} data-reveal data-reveal-delay={index * 50}>
                <a className="centre-area" href={`${originalPage("/servizi-centro-sociale/")}#${area.id}`}>
                  <span className="centre-area-photo"><Image src={area.image} alt="" fill sizes="96px" /></span>
                  <span><strong>{area.title}</strong><span>{area.summary}</span></span>
                </a>
              </li>
            ))}
          </ul>
          <div data-reveal data-reveal-delay="80">
            <VideoBlock video={{ src: null, poster: "/images/gallery-centro-sociale-05.webp", title: "Una giornata al Centro Sociale Le Perle Preziose" }} />
            <p className="centre-gallery-link"><a className="text-link" href={originalPage("/gallery/")}>Apri la gallery fotografica</a></p>
          </div>
        </div>
      </div>
    </section>

    <InstitutionalPrinciples id="valori" title="I nostri valori" items={socialValues} alt />

    <section id="autorizzazioni" className="section" aria-labelledby="autorizzazioni-title">
      <div className="wrap centre-authorizations" data-reveal>
        <div>
          <h2 id="autorizzazioni-title">Autorizzazioni e riferimenti istituzionali</h2>
          <p className="lead">Il Centro opera nella rete dei servizi territoriali.</p>
        </div>
        <div className="info-box">
          <h3>Centro Sociale Polifunzionale per Disabili “Le Perle Preziose”</h3>
          <ul>{socialCentre.authorizations.map(item => <li key={item}>{item}</li>)}</ul>
          <p className="centre-authorizations-more"><a className="text-link" href={originalPage("/autorizzazioni-e-certificazioni/")}>Tutte le autorizzazioni e certificazioni</a></p>
        </div>
      </div>
    </section>
  </InstitutionalPage>;
}
