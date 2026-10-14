import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactBar } from "@/components/contact-bar";
import { ScrollReveal } from "@/components/scroll-reveal";
import "./gico-page.css";

export const metadata: Metadata = {
  title: "Chi siamo | GiCo Cooperativa Sociale",
  description: "Scopri GiCo, la nostra identità e i principi che guidano il Centro Sociale Le Perle Preziose e il Centro di Formazione Edoardo Apicella a Trentola Ducenta.",
};

// Text and images from https://www.gicocoop.it/gico/.
const principles = [
  { title: "Eguaglianza", description: "Assicuriamo un’assistenza appropriata a tutti, senza distinzioni." },
  { title: "Imparzialità", description: "Garantiamo equità e obiettività nel nostro operato." },
  { title: "Efficienza ed Efficacia", description: "Ci impegniamo a offrire il massimo livello di servizio possibile." },
  { title: "Accoglienza", description: "Favoriamo un clima di fiducia e calore familiare." },
  { title: "Continuità", description: "Manteniamo regolarità e costanza nelle nostre prestazioni." },
  { title: "Partecipazione", description: "Includiamo attivamente gli utenti nel processo di miglioramento continuo dei nostri servizi." },
];

export default function GicoPage() {
  return (
    <div className="site-shell gico-page">
      <a className="skip-link" href="#contenuto">Vai al contenuto</a>
      <SiteHeader activePath="/gico" />
      <main id="contenuto">
        <ScrollReveal>
          <header className="gico-page-hero">
            <nav className="gico-breadcrumb" aria-label="Percorso di navigazione">
              <a href="/">Home</a><span aria-hidden="true">/</span><span>Chi siamo</span><span aria-hidden="true">/</span><span aria-current="page">GiCo</span>
            </nav>
            <div className="gico-cover" data-reveal>
              <Image src="/images/gico-pagina-copertina.webp" alt="" fill loading="eager" fetchPriority="high" sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1440px) calc(100vw - 112px), 1328px" />
              <div className="gico-cover-title"><p>Cooperativa Sociale</p><h1>GiCo<span aria-hidden="true">.</span></h1></div>
              <a className="gico-cover-down" href="#chi-siamo" aria-label="Leggi chi siamo"><ArrowDown size={22} aria-hidden="true" /></a>
            </div>
            <nav className="gico-section-nav" aria-label="In questa pagina">
              <a href="#chi-siamo">Chi siamo<ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href="#identita">La nostra identità<ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href="#principi">Perchè sceglierci<ArrowUpRight size={15} aria-hidden="true" /></a>
            </nav>
          </header>

          <section id="chi-siamo" className="gico-introduction gico-page-section" aria-labelledby="gico-about-title">
            <div className="gico-introduction-copy" data-reveal>
              <p className="gico-page-eyebrow">GiCo</p>
              <h2 id="gico-about-title">Chi Siamo</h2>
              <p>La GiCo Società Cooperativa Sociale – Impresa Sociale, situata all’interno del complesso della Piccola Casa della Divina Provvidenza – Cottolengo di Trentola Ducenta, è un ente che si distingue per l’unione di assistenza specializzata e avanzamento educativo. Attraverso il nostro Centro Sociale Polifunzionale per Disabili “Le Perle Preziose”, offriamo accoglienza, assistenza e un ambiente progettato per l’inclusione e la partecipazione attiva.</p>
              <p>Parallelamente, il nostro Centro Studi, Orientamento e Formazione Professionale “Edoardo Apicella” si dedica allo sviluppo delle competenze personali e professionali, preparando individui di ogni età alle sfide future con corsi di formazione avanzata e certificazioni.</p>
            </div>
            <div className="gico-introduction-photo" data-reveal data-reveal-delay="100">
              <Image src="/images/gico-chi-siamo.webp" alt="Mani unite in un gesto di collaborazione e sostegno reciproco" width={500} height={510} sizes="(max-width: 600px) calc(100vw - 56px), (max-width: 900px) 420px, 500px" />
            </div>
          </section>

          <section id="identita" className="gico-identity gico-page-section" aria-labelledby="gico-identity-title">
            <div className="gico-identity-orbits" aria-hidden="true"><span /><span /></div>
            <div className="gico-identity-heading" data-reveal>
              <p className="gico-page-eyebrow">GiCo</p>
              <h2 id="gico-identity-title">La Nostra<br />{" "}Identità</h2>
            </div>
            <p className="gico-identity-copy" data-reveal data-reveal-delay="90">La nostra identità trae ispirazione dall’eredità di profonda compassione e dall’impegno verso l’eccellenza. Fondiamo la nostra missione su due pilastri: l’assistenza premurosa e l’educazione progressiva. Nel nostro Centro Sociale Polifunzionale, ci impegniamo a creare un ambiente che promuove l’inclusione, il rispetto e il benessere dei nostri ospiti. Parallelamente, nel nostro Centro di Formazione, valorizziamo la crescita professionale attraverso un approccio didattico innovativo e pratico.</p>
            <p className="gico-identity-statement" data-reveal>In GiCo, ogni azione è guidata dalla convinzione che ogni persona merita opportunità di assistenza di qualità e accesso all’educazione, come basi per una società più equa e inclusiva.</p>
          </section>

          <section id="principi" className="gico-principles gico-page-section" aria-labelledby="gico-principles-title">
            <div className="gico-principles-heading" data-reveal><p className="gico-page-eyebrow">GiCo</p><h2 id="gico-principles-title">Perchè Sceglierci</h2></div>
            <ol className="gico-principles-list">
              {principles.map((principle, index) => (
                <li key={principle.title} data-reveal data-reveal-delay={index % 3 * 70}>
                  <span className="gico-principle-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{principle.title}</h3><p>{principle.description}</p></div>
                </li>
              ))}
            </ol>
          </section>
        </ScrollReveal>
        <ContactBar />
      </main>
      <SiteFooter />
    </div>
  );
}
