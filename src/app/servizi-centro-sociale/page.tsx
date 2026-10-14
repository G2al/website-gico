import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { InstitutionalPage } from "@/components/institutional-page";
import { socialServices } from "@/lib/social-content";
import "./social-services.css";

export const metadata: Metadata = {
  title: "Servizi Centro Sociale | GiCo",
  description: "Le attività del Centro Sociale Le Perle Preziose: creatività e manualità, educazione, benessere, movimento e socializzazione.",
};

export default function SocialServicesPage() {
  return <InstitutionalPage title="Servizi Centro Sociale" path="/servizi-centro-sociale" parent={{ label: "Centro Sociale", href: "/centro-sociale-polifunzionale" }} sections={socialServices.map(service => ({ id: service.id, label: service.title }))}>
    <div className="social-services institutional-width">
      {socialServices.map((service, index) => <section className="social-service" id={service.id} key={service.id} aria-labelledby={`${service.id}-title`}>
        <div className="social-service-photo" data-reveal>
          <Image src={service.image} alt={service.alt} width={500} height={510} loading={index === 0 ? "eager" : "lazy"} sizes="(max-width: 600px) calc(100vw - 54px), (max-width: 900px) 50vw, 500px" />
          <span className="social-service-photo-number" aria-hidden="true">0{index + 1}</span>
        </div>
        <div className="social-service-copy" data-reveal data-reveal-delay="80">
          <p className="institutional-eyebrow">Le Perle Preziose</p>
          <h2 id={`${service.id}-title`}>{service.title}</h2>
          <ul>{service.activities.map(activity => <li key={activity.title}><h3>{activity.title}</h3><p>{activity.description}</p></li>)}</ul>
        </div>
      </section>)}
      <a className="social-services-gallery" href="/gallery" data-reveal><span><span className="social-services-gallery-label">Gallery</span><span>Le attività, in immagini.</span></span><span className="social-services-gallery-arrow"><ArrowUpRight size={26} aria-hidden="true" /></span></a>
    </div>
  </InstitutionalPage>;
}
