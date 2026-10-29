import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Building2, Globe } from "lucide-react";
import { InstitutionalPage } from "@/components/institutional-page";
import "./par-gol.css";

export const metadata: Metadata = { title: "PAR GOL | GiCo", description: "Programma Garanzia di Occupabilità dei Lavoratori: informazioni GiCo, catalogo dinamico dell’offerta formativa ed enti convenzionati." };

const resources = [
  { title: "Catalogo dinamico dell’Offerta Formativa GiCo", label: "Accedi al catalogo", note: "Sito GiCo", href: "https://www.gicocoop.it/catalogo-dinamico-dellofferta-formativa/", icon: BookOpen },
  { title: "Catalogo dinamico dell’Offerta Formativa sul sito della Regione Campania", label: "Accedi al catalogo", note: "Filtra per GiCo o id. istanza 442", href: "https://regionecampania-my.sharepoint.com/:x:/g/personal/federica_grisard_regione_campania_it/EfWAs9itOLxEm-wIFn98TyQBnMXBZIDNgPnIjJcAorI-4g?rtime=qPorYnRu20g", icon: Globe },
  { title: "Enti Convenzionati", label: "Vedi le convenzioni", note: "Sito GiCo", href: "https://www.gicocoop.it/enti-convenzionati/", icon: Building2 },
];

export default function ParGolPage() {
  return <InstitutionalPage
    title="PAR GOL"
    overline="Programma “Garanzia di Occupabilità dei Lavoratori – GOL”"
    intro="Piano Nazionale di Ripresa e Resilienza (PNRR), Missione 5 “Inclusione e coesione”, Componente 1 “Politiche per il Lavoro”, Riforma 1.1 “Politiche Attive del Lavoro e Formazione”, finanziato dall’Unione europea – Next Generation EU."
    path="/par-gol"
    parent={null}
    sections={[{ id: "programma", label: "Il programma" }, { id: "cos-e-gol", label: "Cos’è PAR GOL" }, { id: "cataloghi", label: "Cataloghi e convenzioni" }]}
  >
    <section id="programma" className="section" aria-labelledby="gol-program-title">
      <div className="wrap">
        <div className="gol-funding" data-reveal><Image src="/images/loghi-par-gol.webp" alt="Finanziato dall’Unione europea NextGenerationEU; Ministero del Lavoro e delle Politiche Sociali; Regione Campania; GOL Garanzia Occupabilità Lavoratori" width={897} height={150} loading="eager" sizes="(max-width: 960px) calc(100vw - 96px), 897px" /></div>
        <div className="gol-program">
          <h2 id="gol-program-title" data-reveal>Il programma in GiCo</h2>
          <div className="prose" data-reveal data-reveal-delay="60">
            <p>La presente sezione dedicata al «PAR GOL» individua i Settori Economico-Professionali (SEP) di interesse dell’Agenzia formativa GiCo s.c.s., in relazione alle filiere produttive cui afferiscono le Aziende con le quali GiCo s.c.s. ha stipulato specifici accordi di collaborazione per la realizzazione di attività di formazione nell’ambito del programma.</p>
            <p>Di seguito maggiori dettagli sulle Aziende e il Catalogo Dinamico dell’Offerta Formativa di GiCo s.c.s., con ciascun percorso formativo programmato, in corso di svolgimento e/o concluso nell’ambito del programma.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="cos-e-gol" className="section section-alt" aria-labelledby="gol-what-title">
      <div className="wrap gol-program">
        <h2 id="gol-what-title" data-reveal>Cos’è PAR GOL</h2>
        <div className="prose" data-reveal data-reveal-delay="60">
          <p>Il Programma “Garanzia di Occupabilità dei Lavoratori – GOL” è un intervento del Piano Nazionale di Ripresa e Resilienza (PNRR) per rilanciare l’occupazione in Italia e combattere la disoccupazione attraverso il rafforzamento delle competenze professionali.</p>
          <p>Il Programma prevede l’applicazione di una serie di strumenti e misure per il reinserimento lavorativo dei disoccupati, dei percettori di Reddito di Cittadinanza, dei lavoratori in cassa integrazione, dei disabili, delle donne, dei giovani, degli over 55 e di altre categorie.</p>
        </div>
      </div>
    </section>
    <section id="cataloghi" className="section" aria-labelledby="gol-resources-title">
      <div className="wrap">
        <div className="section-head" data-reveal><h2 id="gol-resources-title">Cataloghi e convenzioni</h2></div>
        <ul className="gol-resources">
          {resources.map(({ icon: Icon, ...resource }, index) => (
            <li key={resource.href} data-reveal data-reveal-delay={index * 60}>
              <a className="card is-accent" href={resource.href} target="_blank" rel="noopener noreferrer">
                <span className="gol-resource-icon" aria-hidden="true"><Icon size={22} strokeWidth={1.7} /></span>
                <h3>{resource.title}</h3>
                <p>{resource.note}</p>
                <span className="gol-resource-link">{resource.label}<ArrowUpRight size={17} aria-hidden="true" /><span className="visually-hidden"> (si apre in una nuova scheda)</span></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </InstitutionalPage>;
}
