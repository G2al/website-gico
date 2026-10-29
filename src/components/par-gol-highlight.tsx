import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { originalPage } from "@/lib/navigation";
import { ArrowLink } from "./arrow-link";
import "./par-gol-highlight.css";

export function ParGolHighlight() {
  return (
    <section className="gol-highlight" aria-labelledby="gol-highlight-title">
      <div className="wrap gol-highlight-inner">
        <div className="gol-highlight-copy">
          <p className="kicker">PNRR · Programma GOL</p>
          <h2 id="gol-highlight-title">PAR GOL – Garanzia di Occupabilità dei Lavoratori</h2>
          <p>Il programma rilancia l’occupazione rafforzando le competenze professionali. GiCo partecipa con il proprio catalogo dinamico dell’offerta formativa.</p>
          <div className="actions">
            <ArrowLink href={originalPage("/par-gol/")}>Scopri PAR GOL</ArrowLink>
            <a className="text-link" href="https://www.gicocoop.it/catalogo-dinamico-dellofferta-formativa/" target="_blank" rel="noopener noreferrer">Catalogo dell’offerta formativa<ArrowUpRight size={17} aria-hidden="true" /><span className="visually-hidden"> (si apre in una nuova scheda)</span></a>
          </div>
        </div>
        <div className="gol-highlight-logos">
          <Image src="/images/loghi-par-gol.webp" alt="Finanziato dall’Unione europea NextGenerationEU; Ministero del Lavoro e delle Politiche Sociali; Regione Campania; GOL Garanzia Occupabilità Lavoratori" width={897} height={150} sizes="(max-width: 900px) calc(100vw - 48px), 480px" />
        </div>
      </div>
    </section>
  );
}
