import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { InstitutionalPage } from "@/components/institutional-page";
import { RequestForm } from "@/components/request-form";
import { ContactMap } from "@/components/contact-map";
import { gicoContact } from "@/lib/gico-contact";
import "./contact-page.css";

export const metadata: Metadata = { title: "Contatti | GiCo", description: "Contatta GiCo a Trentola Ducenta: indirizzo, telefono, WhatsApp, email, PEC e informazioni per raggiungere la sede di Via Ambra 41/bis." };

const directionsUrl = "https://www.google.com/maps/search/?api=1&query=GiCo%20Via%20Ambra%2041%20bis%20Trentola%20Ducenta";

export default function ContactPage() {
  return <InstitutionalPage
    title="Contatti"
    intro="Siamo nel complesso della Piccola Casa della Divina Provvidenza – Cottolengo di Trentola Ducenta. Puoi chiamarci, scriverci o compilare il modulo."
    path="/contatti-cooperativa"
    parent={null}
    showContactBar={false}
    sections={[{ id: "recapiti", label: "Recapiti" }, { id: "scrivici", label: "Scrivici" }, { id: "dove-siamo", label: "Dove siamo" }]}
  >
    <section id="recapiti" className="section" aria-labelledby="recapiti-title">
      <div className="wrap">
        <div className="section-head" data-reveal><h2 id="recapiti-title">Recapiti</h2></div>
        <div className="contact-details" data-reveal>
          <div className="card is-accent">
            <MapPin size={22} aria-hidden="true" />
            <h3>Sede legale e operativa</h3>
            <address>{gicoContact.street}<br />{gicoContact.postalCode} {gicoContact.city}</address>
            <a className="text-link" href={directionsUrl} target="_blank" rel="noopener noreferrer">Indicazioni stradali<span className="visually-hidden"> (si apre in una nuova scheda)</span></a>
          </div>
          <div className="card is-accent">
            <Phone size={22} aria-hidden="true" />
            <h3>Telefono e WhatsApp</h3>
            <ul>
              <li><span>Telefono/Fax</span><a href={gicoContact.phoneHref}>{gicoContact.phone}</a></li>
              <li><span><MessageCircle size={15} aria-hidden="true" /> WhatsApp</span><a href={gicoContact.whatsappHref} target="_blank" rel="noopener noreferrer">{gicoContact.whatsapp}<span className="visually-hidden"> (si apre in una nuova scheda)</span></a></li>
            </ul>
          </div>
          <div className="card is-accent">
            <Mail size={22} aria-hidden="true" />
            <h3>Email</h3>
            <ul>{gicoContact.departmentEmails.map(email => <li key={email.address}><span>{email.label}</span><a href={`mailto:${email.address}`}>{email.address}</a></li>)}</ul>
          </div>
          <div className="card is-accent">
            <Mail size={22} aria-hidden="true" />
            <h3>PEC</h3>
            <ul>{gicoContact.pecAddresses.map(address => <li key={address}><a href={`mailto:${address}`}>{address}</a></li>)}</ul>
          </div>
        </div>
      </div>
    </section>

    <section id="scrivici" className="section section-alt" aria-labelledby="scrivici-title">
      <div className="wrap contact-form-layout">
        <div data-reveal>
          <h2 id="scrivici-title">Scrivici</h2>
          <p className="lead">Scegli l’argomento: la richiesta verrà indirizzata all’ufficio competente.</p>
        </div>
        <div className="contact-form-card" data-reveal data-reveal-delay="60"><RequestForm /></div>
      </div>
    </section>

    <section id="dove-siamo" className="section" aria-labelledby="dove-siamo-title">
      <div className="wrap">
        <div className="section-head is-split" data-reveal>
          <div><h2 id="dove-siamo-title">Dove siamo</h2><p className="lead">{gicoContact.street}, {gicoContact.postalCode} {gicoContact.city}</p></div>
          <a className="arrow-link arrow-link-secondary" href={directionsUrl} target="_blank" rel="noopener noreferrer"><span>Indicazioni stradali</span><span className="visually-hidden"> (si apre in una nuova scheda)</span></a>
        </div>
        <ContactMap />
      </div>
    </section>
  </InstitutionalPage>;
}
