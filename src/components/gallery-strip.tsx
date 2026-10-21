import Image from "next/image";
import { originalPage } from "@/lib/navigation";
import { socialGallery } from "@/lib/social-content";
import { ArrowLink } from "./arrow-link";
import { ScrollReveal } from "./scroll-reveal";
import "./gallery-strip.css";

const rows = [socialGallery.slice(0, 9), socialGallery.slice(9)];

export function GalleryStrip() {
  return (
    <section className="gallery-strip" aria-labelledby="gallery-strip-title">
      <ScrollReveal>
        <div className="gallery-strip-heading" data-reveal>
          <div>
            <p className="section-eyebrow">Gallery · Le Perle Preziose</p>
            <h2 id="gallery-strip-title" className="section-title">Momenti di vita, <span>insieme.</span></h2>
          </div>
          <div className="gallery-strip-intro">
            <p className="section-lead">Sorrisi, attività e incontri: uno sguardo sulla vita del Centro Sociale Polifunzionale.</p>
            <ArrowLink href={originalPage("/gallery/")}>Esplora la gallery</ArrowLink>
          </div>
        </div>
      </ScrollReveal>
      <div className="gallery-strip-rows">
        {rows.map((row, rowIndex) => (
          <div className={`gallery-strip-window${rowIndex === 1 ? " is-reverse" : ""}`} key={rowIndex}>
            <div className="gallery-strip-track">
              {[false, true].map(duplicate => (
                <ul className="gallery-strip-group" key={String(duplicate)} aria-hidden={duplicate || undefined}>
                  {row.map(photo => (
                    <li key={photo.src} className="gallery-strip-item" style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
                      <Image src={photo.src} alt={duplicate ? "" : photo.alt} fill sizes="(max-width: 600px) 240px, 380px" />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
