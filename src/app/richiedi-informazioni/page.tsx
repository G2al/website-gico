import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { InstitutionalPage } from "@/components/institutional-page";
import { RequestForm, RequestFormFromQuery } from "@/components/request-form";
import { gicoContact } from "@/lib/gico-contact";
import "./request-page.css";

export const metadata: Metadata = {
  title: "Richiedi informazioni | GiCo",
  description: "Richiedi informazioni su corsi, certificazioni, formazione universitaria o sul Centro Sociale Le Perle Preziose di GiCo.",
};

export default function RequestInformationPage() {
  return <InstitutionalPage
    title="Richiedi informazioni"
    intro="Indica il corso o il servizio che ti interessa e lasciaci i tuoi recapiti: la richiesta arriverà all’ufficio competente."
    path="/richiedi-informazioni"
    parent={null}
    showContactBar={false}
  >
    <div className="section">
      <div className="wrap request-layout">
        <section className="request-card" aria-labelledby="request-form-title">
          <h2 id="request-form-title">Il tuo messaggio</h2>
          <Suspense fallback={<RequestForm />}><RequestFormFromQuery /></Suspense>
        </section>
        <aside className="request-aside" aria-labelledby="request-direct-title">
          <h2 id="request-direct-title">Preferisci contattarci direttamente?</h2>
          <ul>
            <li><Phone size={20} aria-hidden="true" /><span><small>Telefono</small><a href={gicoContact.phoneHref}>{gicoContact.phone}</a></span></li>
            <li><MessageCircle size={20} aria-hidden="true" /><span><small>WhatsApp</small><a href={gicoContact.whatsappHref} target="_blank" rel="noopener noreferrer">{gicoContact.whatsapp}<span className="visually-hidden"> (si apre in una nuova scheda)</span></a></span></li>
            <li><Mail size={20} aria-hidden="true" /><span><small>Corsi, certificazioni e formazione universitaria</small><a href={`mailto:${gicoContact.trainingEmail}`}>{gicoContact.trainingEmail}</a></span></li>
            <li><Mail size={20} aria-hidden="true" /><span><small>Informazioni generali</small><a href={`mailto:${gicoContact.email}`}>{gicoContact.email}</a></span></li>
          </ul>
        </aside>
      </div>
    </div>
  </InstitutionalPage>;
}
