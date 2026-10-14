"use client";

import { ArrowRight, Mail, Minus, Plus } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { gicoContact } from "@/lib/gico-contact";
import { originalPage } from "@/lib/navigation";
import "./contact-bar.css";

export function ContactBar() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    for (const fieldName of ["name", "message"]) {
      const field = event.currentTarget.elements.namedItem(fieldName) as HTMLInputElement | HTMLTextAreaElement;
      if (!field.value.trim()) {
        field.setCustomValidity("Compila questo campo con un testo.");
        field.reportValidity();
        return;
      }
    }
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Richiesta di informazioni su GiCo");
    const body = encodeURIComponent(`Nome: ${String(data.get("name")).trim()}\nEmail: ${String(data.get("email")).trim()}\n\n${String(data.get("message")).trim()}`);
    setDraft(`mailto:${gicoContact.email}?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contattaci" className="contact-bar" aria-labelledby="contact-bar-title" onKeyDown={event => {
      if (event.key === "Escape" && open) { setOpen(false); toggleRef.current?.focus(); }
    }}>
      <div className="contact-bar-inner">
        <div className="contact-bar-heading">
          <span className="contact-bar-symbol" aria-hidden="true"><ArrowRight size={26} strokeWidth={1.5} /></span>
          <h2 id="contact-bar-title">Vuoi avere maggiori informazioni su GiCo?</h2>
          <button type="button" className="contact-bar-toggle" ref={toggleRef} aria-expanded={open} aria-controls="contact-form-panel" onClick={() => setOpen(previous => !previous)}><span>Contattaci</span><span className="contact-toggle-icon" aria-hidden="true">{open ? <Minus size={18} /> : <Plus size={18} />}</span></button>
        </div>
        <div id="contact-form-panel" className={`contact-form-panel${open ? " is-open" : ""}`} aria-hidden={!open} inert={!open}>
          <div className="contact-form-clip">
            <form className="contact-form" onSubmit={handleSubmit} onChange={event => {
              setDraft(null);
              if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) event.target.setCustomValidity("");
            }}>
              <div className="contact-form-fields">
                <label>Nome<input name="name" autoComplete="name" required maxLength={120} placeholder="Il tuo nome" /></label>
                <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="La tua email" /></label>
                <label className="contact-message-field">Messaggio<textarea name="message" rows={3} required maxLength={1200} placeholder="Come possiamo aiutarti?" /></label>
              </div>
              <div className="contact-form-bottom">
                <label className="contact-privacy"><input name="privacy" type="checkbox" required /><span>Ho letto la <a href={originalPage("/privacy-policy/")} target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</span></label>
                <button className="contact-prepare" type="submit">Prepara email<Mail size={17} aria-hidden="true" /></button>
              </div>
              <p className="contact-form-note">Il modulo prepara un’email da inviare con la tua applicazione di posta. Nessun messaggio viene inviato automaticamente.</p>
              {draft && <div className="contact-email-ready" role="status"><p>L’email è pronta: aprila nella tua applicazione di posta e inviala.</p><a href={draft}>Apri email<ArrowRight size={18} aria-hidden="true" /></a></div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
