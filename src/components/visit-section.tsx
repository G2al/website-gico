import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { gicoContact } from "@/lib/gico-contact";
import { originalPage } from "@/lib/navigation";
import { ArrowLink } from "./arrow-link";
import { ScrollReveal } from "./scroll-reveal";
import "./visit-section.css";

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`GiCo ${gicoContact.street} ${gicoContact.city}`)}`;

export function VisitSection() {
  return (
    <section className="visit-section" aria-labelledby="visit-title">
      <ScrollReveal>
        <div className="visit-panel">
          <div className="visit-copy" data-reveal>
            <p className="section-eyebrow">Dove siamo</p>
            <h2 id="visit-title" className="section-title">Vieni a <span>trovarci.</span></h2>
            <p className="section-lead">Il Centro Sociale e il Centro di Formazione si trovano nel complesso del Cottolengo di Trentola Ducenta.</p>
            <ul className="visit-contacts">
              <li><span className="visit-contact-icon" aria-hidden="true"><MapPin size={19} /></span><span><small>Sede legale e operativa</small>{gicoContact.street}, {gicoContact.city}</span></li>
              <li><span className="visit-contact-icon" aria-hidden="true"><Phone size={19} /></span><span><small>Telefono</small><a href={gicoContact.phoneHref}>{gicoContact.phone}</a></span></li>
              <li><span className="visit-contact-icon" aria-hidden="true"><MessageCircle size={19} /></span><span><small>WhatsApp</small><a href={gicoContact.whatsappHref} target="_blank" rel="noopener noreferrer">{gicoContact.whatsapp}<span className="visually-hidden"> (si apre in una nuova scheda)</span></a></span></li>
              <li><span className="visit-contact-icon" aria-hidden="true"><Mail size={19} /></span><span><small>Email</small><a href={`mailto:${gicoContact.email}`}>{gicoContact.email}</a></span></li>
            </ul>
            <div className="visit-actions">
              <ArrowLink href={directionsUrl}>Indicazioni stradali</ArrowLink>
              <ArrowLink href={originalPage("/contatti-cooperativa/")} secondary>Tutti i contatti</ArrowLink>
            </div>
          </div>
          <div className="visit-photo" data-reveal data-reveal-delay="90">
            <Image src="/images/gallery-centro-sociale-17.webp" alt="La palma, il prato e gli spazi esterni del Centro Sociale" fill sizes="(max-width: 900px) calc(100vw - 64px), 600px" />
            <span className="visit-photo-chip"><MapPin size={15} aria-hidden="true" />Trentola Ducenta (CE)</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
