import Image from "next/image";
import { originalPage } from "@/lib/navigation";
import { socialGallery } from "@/lib/social-content";
import { ArrowLink } from "./arrow-link";
import "./gallery-strip.css";

const rows = [socialGallery.slice(0, 9), socialGallery.slice(9)];

export function GalleryStrip() {
  return (
    <section className="section gallery-strip" aria-labelledby="gallery-strip-title">
      <div className="wrap section-head is-split">
        <div>
          <p className="kicker">Gallery · Le Perle Preziose</p>
          <h2 id="gallery-strip-title">La vita del Centro, in fotografia</h2>
        </div>
        <ArrowLink href={originalPage("/gallery/")} secondary>Apri la gallery</ArrowLink>
      </div>
      <div className="gallery-strip-rows">
        {rows.map((row, rowIndex) => (
          <div className={`gallery-strip-window${rowIndex === 1 ? " is-reverse" : ""}`} key={rowIndex}>
            <div className="gallery-strip-track">
              {[false, true].map(duplicate => (
                <ul className="gallery-strip-group" key={String(duplicate)} aria-hidden={duplicate || undefined}>
                  {row.map(photo => (
                    <li key={photo.src} className="gallery-strip-item" style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
                      <Image src={photo.src} alt={duplicate ? "" : photo.alt} fill sizes="(max-width: 600px) 240px, 360px" />
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
