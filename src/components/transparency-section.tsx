import { BadgeCheck, Download, FileText } from "lucide-react";
import { certificates, socialReport } from "@/lib/institutional-content";
import { originalPage } from "@/lib/navigation";
import { ScrollReveal } from "./scroll-reveal";
import "./transparency-section.css";

const certificateNames = [...new Set(certificates.map(certificate => certificate.title.replace(/ Certificato.*$/, "")))];

export function TransparencySection() {
  return (
    <section className="section section-alt transparency-section" aria-labelledby="transparency-title">
      <ScrollReveal>
        <div className="wrap">
          <div className="section-head" data-reveal>
            <p className="kicker">Trasparenza</p>
            <h2 id="transparency-title">Documenti e certificazioni</h2>
            <p className="lead">Il bilancio sociale, le autorizzazioni e le certificazioni di qualità sono consultabili e scaricabili.</p>
          </div>
          <div className="transparency-grid">
            <article className="card is-accent transparency-card" data-reveal>
              <span className="transparency-icon" aria-hidden="true"><FileText size={24} strokeWidth={1.7} /></span>
              <h3>Bilancio Sociale {socialReport.year}</h3>
              <p>Il documento con cui la cooperativa rendiconta le proprie attività.</p>
              <div className="actions">
                <a className="arrow-link" href={socialReport.href} download aria-label={`Scarica il Bilancio Sociale ${socialReport.year} (PDF)`}><span>Scarica il PDF</span><Download size={18} aria-hidden="true" /></a>
                <a className="text-link" href={originalPage("/bilancio-sociale/")}>Vai alla pagina</a>
              </div>
            </article>
            <article className="card is-accent transparency-card" data-reveal data-reveal-delay="80">
              <span className="transparency-icon" aria-hidden="true"><BadgeCheck size={24} strokeWidth={1.7} /></span>
              <h3>Autorizzazioni e Certificazioni</h3>
              <p>Autorizzazioni, accreditamenti, centri autorizzati e certificazioni del Centro Sociale e del Centro di Formazione.</p>
              <ul className="chip-list" aria-label="Certificazioni di qualità">
                {certificateNames.map(name => <li key={name}>{name}</li>)}
              </ul>
              <div className="actions">
                <a className="text-link" href={originalPage("/autorizzazioni-e-certificazioni/")}>Consulta i documenti</a>
              </div>
            </article>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
