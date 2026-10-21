import { ArrowUpRight, BadgeCheck, Download, FileText } from "lucide-react";
import { certificates, socialReport } from "@/lib/institutional-content";
import { originalPage } from "@/lib/navigation";
import { ScrollReveal } from "./scroll-reveal";
import "./transparency-section.css";

const certificateNames = [...new Set(certificates.map(certificate => certificate.title.replace(/ Certificato.*$/, "")))];

export function TransparencySection() {
  return (
    <section className="transparency-section" aria-labelledby="transparency-title">
      <ScrollReveal>
        <div className="transparency-heading" data-reveal>
          <p className="section-eyebrow">Trasparenza</p>
          <h2 id="transparency-title" className="section-title">Documenti chiari, <span>sempre consultabili.</span></h2>
        </div>
        <div className="transparency-grid">
          <article className="transparency-card is-report" data-reveal>
            <span className="transparency-icon" aria-hidden="true"><FileText size={26} strokeWidth={1.5} /></span>
            <p className="transparency-kicker">Bilancio Sociale</p>
            <h3>Anno <span>{socialReport.year}</span></h3>
            <p>Il documento di rendicontazione delle attività e dell’impatto sociale della cooperativa.</p>
            <div className="transparency-actions">
              <a className="transparency-button" href={socialReport.href} download aria-label={`Scarica il Bilancio Sociale ${socialReport.year} (PDF)`}>Scarica il PDF<Download size={17} aria-hidden="true" /></a>
              <a className="transparency-link" href={originalPage("/bilancio-sociale/")}>Vai alla pagina<ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </article>
          <article className="transparency-card" data-reveal data-reveal-delay="90">
            <span className="transparency-icon" aria-hidden="true"><BadgeCheck size={26} strokeWidth={1.5} /></span>
            <p className="transparency-kicker">Autorizzazioni e Certificazioni</p>
            <h3>Qualità certificata</h3>
            <p>Autorizzazioni, accreditamenti e certificazioni del Centro Sociale e del Centro di Formazione.</p>
            <ul className="transparency-tags" aria-label="Certificazioni">
              {certificateNames.map(name => <li key={name}>{name}</li>)}
            </ul>
            <div className="transparency-actions">
              <a className="transparency-link" href={originalPage("/autorizzazioni-e-certificazioni/")}>Consulta i documenti<ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </article>
        </div>
      </ScrollReveal>
    </section>
  );
}
