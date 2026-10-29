import Image from "next/image";
import { originalPage } from "@/lib/navigation";
import { gicoContact } from "@/lib/gico-contact";
import { ArrowLink } from "./arrow-link";
import { ScrollReveal } from "./scroll-reveal";
import { Timeline } from "./timeline";
import "./about-section.css";

export function AboutSection() {
  return (
    <section id="chi-siamo" className="section section-alt about-section" aria-labelledby="about-title">
      <ScrollReveal>
        <div className="wrap">
          <div className="about-intro">
            <div data-reveal>
              <p className="kicker">Chi siamo</p>
              <h2 id="about-title">GiCo Società Cooperativa Sociale – Impresa Sociale</h2>
              <p className="lead">{gicoContact.about}</p>
              <div className="actions">
                <ArrowLink href={originalPage("/gico/")}>La nostra storia</ArrowLink>
                <a className="text-link" href={originalPage("/autorizzazioni-e-certificazioni/")}>Autorizzazioni e certificazioni</a>
              </div>
            </div>
            <div className="about-photo" data-reveal data-reveal-delay="80">
              <Image src="/images/gico-chi-siamo.webp" alt="Mani unite in un gesto di collaborazione e sostegno reciproco" fill sizes="(max-width: 900px) calc(100vw - 48px), 480px" />
            </div>
          </div>
          <h3 className="about-timeline-title">Le tappe principali</h3>
          <Timeline compact />
        </div>
      </ScrollReveal>
    </section>
  );
}
