import { Phone } from "lucide-react";
import { gicoContact } from "@/lib/gico-contact";
import { originalPage } from "@/lib/navigation";
import { ArrowLink } from "./arrow-link";
import "./contact-bar.css";

export function ContactBar() {
  return (
    <section className="section-dark contact-bar" aria-labelledby="contact-bar-title">
      <div className="wrap contact-bar-inner">
        <div>
          <h2 id="contact-bar-title">Hai bisogno di informazioni?</h2>
          <p>Scrivici indicando il servizio o il corso che ti interessa: ti ricontatteremo.</p>
        </div>
        <div className="actions">
          <ArrowLink href={originalPage("/richiedi-informazioni/")}>Richiedi informazioni</ArrowLink>
          <a className="arrow-link arrow-link-secondary" href={gicoContact.phoneHref}><Phone size={18} aria-hidden="true" /><span>{gicoContact.phone}</span></a>
        </div>
      </div>
    </section>
  );
}
