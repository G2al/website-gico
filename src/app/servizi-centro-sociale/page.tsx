import type { Metadata } from "next";
import Image from "next/image";
import { InstitutionalPage } from "@/components/institutional-page";
import { ArrowLink } from "@/components/arrow-link";
import { socialCentre } from "@/lib/institutional-content";
import { originalPage } from "@/lib/navigation";
import "./social-services.css";

export const metadata: Metadata = {
  title: "Laboratori e attività – Le Perle Preziose | GiCo",
  description: "I laboratori e le attività del Centro Sociale Polifunzionale per Disabili Le Perle Preziose: creatività, autonomie quotidiane, benessere, socializzazione e uscite sul territorio.",
};

export default function SocialServicesPage() {
  return <InstitutionalPage
    title="Laboratori e attività"
    overline="Centro Sociale Polifunzionale per Disabili “Le Perle Preziose”"
    intro="Le attività quotidiane intrecciano creatività, apprendimento, movimento e occasioni di incontro. Laboratori, esperienze condivise e uscite sul territorio valorizzano le autonomie e rafforzano il legame con la comunità."
    path="/servizi-centro-sociale"
    parent={{ label: "Centro Sociale", href: "/centro-sociale-polifunzionale" }}
    sections={socialCentre.activityAreas.map(area => ({ id: area.id, label: area.title }))}
  >
    <div className="section">
      <div className="wrap activity-list">
        {socialCentre.activityAreas.map((area, index) => (
          <section className={`activity${index % 2 ? " is-reversed" : ""}`} id={area.id} key={area.id} aria-labelledby={`${area.id}-title`}>
            <div className="activity-photo" data-reveal>
              <Image src={area.image} alt={area.alt} width={560} height={420} loading={index === 0 ? "eager" : "lazy"} sizes="(max-width: 900px) calc(100vw - 48px), 520px" />
            </div>
            <div className="activity-copy" data-reveal data-reveal-delay="60">
              <h2 id={`${area.id}-title`}>{area.title}</h2>
              <p>{area.text}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
    <section className="section section-alt" aria-labelledby="activities-gallery-title">
      <div className="wrap section-head is-split" data-reveal>
        <div>
          <h2 id="activities-gallery-title">Le attività, in fotografia</h2>
          <p className="lead">Una selezione di momenti dalla vita quotidiana del Centro.</p>
        </div>
        <ArrowLink href={originalPage("/gallery/")}>Apri la gallery</ArrowLink>
      </div>
    </section>
  </InstitutionalPage>;
}
