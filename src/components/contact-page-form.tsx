"use client";

import { ArrowRight, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { gicoContact } from "@/lib/gico-contact";
import { originalPage } from "@/lib/navigation";

export function ContactPageForm() {
  const [draft, setDraft] = useState<string | null>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    for (const name of ["name", "message"]) {
      const field = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
      if (!field.value.trim()) { field.setCustomValidity("Compila questo campo con un testo."); field.reportValidity(); return; }
    }
    const data = new FormData(form);
    const subject = encodeURIComponent("Richiesta di informazioni su GiCo");
    const body = encodeURIComponent(`Nome: ${String(data.get("name")).trim()}\nEmail: ${String(data.get("email")).trim()}\n\n${String(data.get("message")).trim()}`);
    setDraft(`mailto:${gicoContact.email}?subject=${subject}&body=${body}`);
  };

  return <form className="contact-page-form" onSubmit={handleSubmit} onChange={event => { setDraft(null); if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) event.target.setCustomValidity(""); }}>
    <div className="contact-page-form-fields"><label>Nome <span aria-hidden="true">*</span><input name="name" autoComplete="name" placeholder="Il tuo nome" required maxLength={120} /></label><label>Email <span aria-hidden="true">*</span><input type="email" name="email" autoComplete="email" placeholder="La tua email" required maxLength={254} /></label><label className="contact-page-message">Il tuo messaggio <span aria-hidden="true">*</span><textarea name="message" rows={6} required maxLength={2000} placeholder="Come possiamo aiutarti?" /></label></div>
    <label className="contact-page-privacy"><input name="privacy" type="checkbox" required /><span>Dichiaro di aver preso visione dell’<a href={originalPage("/privacy-policy/")} target="_blank" rel="noopener noreferrer">Informativa Privacy</a> e rilascio il mio consenso al trattamento dei dati personali.</span></label>
    <p className="contact-page-form-note">I campi con * sono obbligatori. Il modulo prepara un’email da inviare con la tua applicazione di posta: nessun messaggio viene inviato automaticamente.</p>
    <button className="contact-page-submit" type="submit">Prepara email<span><Mail size={18} aria-hidden="true" /></span></button>
    {draft && <div className="contact-page-draft" role="status"><p>Il messaggio è pronto. Aprilo nella tua applicazione di posta e completa l’invio.</p><a href={draft}>Apri email<ArrowRight size={18} aria-hidden="true" /></a></div>}
  </form>;
}
