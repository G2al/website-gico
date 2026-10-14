import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { InstitutionalPage } from "@/components/institutional-page";
import { ContactPageForm } from "@/components/contact-page-form";
import { ContactMap } from "@/components/contact-map";
import { gicoContact } from "@/lib/gico-contact";
import "./contact-page.css";

export const metadata: Metadata = { title: "Contatti | GiCo", description: "Contatta GiCo a Trentola Ducenta: indirizzo, telefono, WhatsApp, email, PEC e informazioni per raggiungere la sede di Via Ambra 41/bis." };

export default function ContactPage() {
  return <InstitutionalPage title="Contatti" path="/contatti-cooperativa" parent={null} showContactBar={false} sections={[{ id: "scrivici", label: "Scrivici" }, { id: "recapiti", label: "I nostri recapiti" }, { id: "dove-siamo", label: "Dove siamo" }]}>
    <div className="contact-page institutional-width">
      <nav className="contact-quick-actions" aria-label="Contatti rapidi" data-reveal><a href={gicoContact.phoneHref}><Phone size={18} aria-hidden="true" />Chiamaci<ArrowUpRight size={15} aria-hidden="true" /></a><a href={gicoContact.whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" />WhatsApp<ArrowUpRight size={15} aria-hidden="true" /></a><a href={`mailto:${gicoContact.email}`}><Mail size={18} aria-hidden="true" />Email<ArrowUpRight size={15} aria-hidden="true" /></a></nav>
      <div className="contact-page-grid">
        <section id="scrivici" className="contact-page-form-section" aria-labelledby="contact-page-form-title" data-reveal><p className="institutional-eyebrow">Parliamone</p><h2 id="contact-page-form-title">Come possiamo aiutarti?</h2><ContactPageForm /></section>
        <section id="recapiti" className="contact-page-details" aria-label="I nostri recapiti" data-reveal data-reveal-delay="80">
          <div className="contact-page-address"><span className="contact-page-detail-icon"><MapPin size={23} strokeWidth={1.5} aria-hidden="true" /></span><h2>Sede Legale e Operativa</h2><address>{gicoContact.street}<br />{gicoContact.postalCode} – {gicoContact.city}</address></div>
          <div><h2>Telefono/Fax</h2><a href={gicoContact.phoneHref}>+39 081 812 94 50</a><a href={gicoContact.whatsappHref} target="_blank" rel="noopener noreferrer">+39 392 955 8866<ArrowUpRight size={14} aria-hidden="true" /></a></div>
          <div><h2>Email</h2><ul>{gicoContact.departmentEmails.map(email => <li key={email.address}><a href={`mailto:${email.address}`}>{email.address}<ArrowUpRight size={14} aria-hidden="true" /></a><span>{email.label}</span></li>)}</ul></div>
          <div><h2>PEC</h2><ul>{gicoContact.pecAddresses.map(address => <li key={address}><a href={`mailto:${address}`}>{address}<ArrowUpRight size={14} aria-hidden="true" /></a></li>)}</ul></div>
        </section>
      </div>
      <section id="dove-siamo" className="contact-page-map-section" aria-labelledby="contact-map-title"><header data-reveal><div><p className="institutional-eyebrow">Trentola Ducenta</p><h2 id="contact-map-title">Vieni a trovarci.</h2></div><a href="https://www.google.com/maps/search/?api=1&query=GiCo%20Via%20Ambra%2041%20bis%20Trentola%20Ducenta" target="_blank" rel="noopener noreferrer">Indicazioni stradali<ArrowUpRight size={18} aria-hidden="true" /></a></header><ContactMap /></section>
    </div>
  </InstitutionalPage>;
}
