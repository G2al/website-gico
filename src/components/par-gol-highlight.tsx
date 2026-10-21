import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { originalPage } from "@/lib/navigation";
import { ArrowLink } from "./arrow-link";
import { ScrollReveal } from "./scroll-reveal";
import "./par-gol-highlight.css";

// Recipients listed on GiCo's PAR GOL page.
const recipients = ["Persone disoccupate", "Giovani", "Donne", "Over 55", "Persone con disabilità", "Lavoratori in cassa integrazione"];

export function ParGolHighlight() {
  return (
    <section className="gol-highlight" aria-labelledby="gol-highlight-title">
      <ScrollReveal>
        <div className="gol-highlight-panel" data-reveal>
          <div className="gol-highlight-copy">
            <p className="section-eyebrow">PNRR · Programma GOL</p>
            <h2 id="gol-highlight-title" className="section-title">PAR GOL, <span>competenze per tornare al lavoro.</span></h2>
            <p className="section-lead">Il Programma “Garanzia di Occupabilità dei Lavoratori” rilancia l’occupazione attraverso il rafforzamento delle competenze professionali. GiCo partecipa con il proprio catalogo dinamico dell’offerta formativa.</p>
            <div className="gol-highlight-actions">
              <ArrowLink href={originalPage("/par-gol/")}>Scopri PAR GOL</ArrowLink>
              <a className="gol-highlight-external" href="https://www.gicocoop.it/catalogo-dinamico-dellofferta-formativa/" target="_blank" rel="noopener noreferrer">Catalogo dell’offerta formativa<ArrowUpRight size={17} aria-hidden="true" /><span className="visually-hidden"> (si apre in una nuova scheda)</span></a>
            </div>
          </div>
          <div className="gol-highlight-aside">
            <h3>A chi si rivolge</h3>
            <ul className="gol-highlight-tags">
              {recipients.map((recipient, index) => <li key={recipient} style={{ animationDelay: `${index * -1.1}s` }}>{recipient}</li>)}
              <li>e altre categorie</li>
            </ul>
            <div className="gol-highlight-logos">
              <Image src="/images/loghi-par-gol.webp" alt="Finanziato dall’Unione europea NextGenerationEU; Ministero del Lavoro e delle Politiche Sociali; Regione Campania; GOL Garanzia Occupabilità Lavoratori" width={897} height={150} sizes="(max-width: 900px) calc(100vw - 88px), 460px" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
