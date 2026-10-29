import Image from "next/image";
import { GraduationCap, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { gicoContact } from "@/lib/gico-contact";
import { originalPage } from "@/lib/navigation";
import { ArrowLink } from "./arrow-link";
import { ScrollReveal } from "./scroll-reveal";
import "./visit-section.css";

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`GiCo ${gicoContact.street} ${gicoContact.city}`)}`;

export function VisitSection() {
  return (
    <section className="section visit-section" aria-labelledby="visit-title">
      <ScrollReveal>
        <div className="wrap visit-grid">
          <div className="visit-copy" data-reveal>
            <p className="kicker">Contatti</p>
            <h2 id="visit-title">Sede e recapiti</h2>
            <p className="lead">Il Centro Sociale e il Centro di Formazione si trovano nel complesso della Piccola Casa della Divina Provvidenza – Cottolengo di Trentola Ducenta.</p>
            <ul className="visit-contacts">
              <li><MapPin size={20} aria-hidden="true" /><span><small>Sede legale e operativa</small>{gicoContact.street}, {gicoContact.postalCode} {gicoContact.city}</span></li>
              <li><Phone size={20} aria-hidden="true" /><span><small>Telefono</small><a href={gicoContact.phoneHref}>{gicoContact.phone}</a></span></li>
              <li><MessageCircle size={20} aria-hidden="true" /><span><small>WhatsApp</small><a href={gicoContact.whatsappHref} target="_blank" rel="noopener noreferrer">{gicoContact.whatsapp}<span className="visually-hidden"> (si apre in una nuova scheda)</span></a></span></li>
              <li><Mail size={20} aria-hidden="true" /><span><small>Informazioni generali</small><a href={`mailto:${gicoContact.email}`}>{gicoContact.email}</a></span></li>
              <li><GraduationCap size={20} aria-hidden="true" /><span><small>Corsi, certificazioni e formazione universitaria</small><a href={`mailto:${gicoContact.trainingEmail}`}>{gicoContact.trainingEmail}</a></span></li>
            </ul>
            <div className="actions">
              <ArrowLink href={originalPage("/contatti-cooperativa/")}>Tutti i contatti</ArrowLink>
              <a className="text-link" href={directionsUrl} target="_blank" rel="noopener noreferrer">Indicazioni stradali<span className="visually-hidden"> (si apre in una nuova scheda)</span></a>
            </div>
          </div>
          <div className="visit-photo" data-reveal data-reveal-delay="80">
            <Image src="/images/gallery-centro-sociale-17.webp" alt="La palma, il prato e gli spazi esterni del Centro Sociale" fill sizes="(max-width: 900px) calc(100vw - 48px), 560px" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
