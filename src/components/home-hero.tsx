import Image from "next/image";
import { MousePointer2 } from "lucide-react";
import "./hero-selection.css";
import { ArrowLink } from "./arrow-link";
import { originalPage } from "@/lib/navigation";

const photographs = [
  { src: "/images/hero-gico.webp", alt: "Mani unite, simbolo di collaborazione e inclusione", position: "center" },
  { src: "/images/hero-formazione.webp", alt: "Aula del Centro di Formazione GiCo", position: "center 58%" },
  { src: "/images/hero-centro-sociale.webp", alt: "Giardino del Centro Sociale Polifunzionale Le Perle Preziose", position: "center" },
];

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-eyebrow">Insieme, diamo valore alle persone</p>
        <h1 id="hero-title">Ogni persona merita<br /><span className="gico-selection"><span className="gico-selection-fill" aria-hidden="true" /><span className="gico-selection-text">un futuro</span><span className="gico-selection-end" aria-hidden="true" /><MousePointer2 className="gico-selection-cursor" size={25} strokeWidth={1.6} aria-hidden="true" /></span> da costruire.</h1>
        <p className="hero-description">Accogliamo le persone, valorizziamo le capacità.<br className="desktop-break" /> Con GiCo, inclusione sociale e formazione diventano nuove opportunità.</p>
        <div className="hero-actions">
          <ArrowLink href={originalPage("/gico/")}>Scopri GiCo</ArrowLink>
          <ArrowLink href={originalPage("/centro-di-formazione/")} secondary>La nostra formazione</ArrowLink>
        </div>
      </div>
      <div className="hero-photo-frame">
        <div className="hero-photo-grid">
          {photographs.map((photo, index) => (
            <div className="hero-photo" key={photo.src}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 600px) 90vw, (max-width: 1199px) 30vw, 390px" loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} style={{ objectPosition: photo.position }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
