import type { Metadata } from "next";
import { InstitutionalPage, InstitutionalPrinciples, InstitutionalStory } from "@/components/institutional-page";
import { Timeline } from "@/components/timeline";
import { gicoContact } from "@/lib/gico-contact";
import { originalPage } from "@/lib/navigation";
import "./gico-page.css";

export const metadata: Metadata = {
  title: "Chi siamo | GiCo Cooperativa Sociale",
  description: "La storia di GiCo dal 2002: il Centro Studi, Orientamento e Formazione Professionale Edoardo Apicella e il Centro Sociale Polifunzionale per Disabili Le Perle Preziose a Trentola Ducenta.",
};

// Text from https://www.gicocoop.it/gico/ and GiCo's timeline (October 2026).
const principles = [
  { title: "Eguaglianza", description: "Assicuriamo un’assistenza appropriata a tutti, senza distinzioni." },
  { title: "Imparzialità", description: "Garantiamo equità e obiettività nel nostro operato." },
  { title: "Efficienza ed Efficacia", description: "Ci impegniamo a offrire il massimo livello di servizio possibile." },
  { title: "Accoglienza", description: "Favoriamo un clima di fiducia e calore familiare." },
  { title: "Continuità", description: "Manteniamo regolarità e costanza nelle nostre prestazioni." },
  { title: "Partecipazione", description: "Includiamo attivamente gli utenti nel processo di miglioramento continuo dei nostri servizi." },
];

export default function GicoPage() {
  return <InstitutionalPage
    title="Chi siamo"
    overline="GiCo Società Cooperativa Sociale – Impresa Sociale"
    intro={gicoContact.about}
    path="/gico"
    parent={null}
    sections={[{ id: "chi-siamo", label: "Chi siamo" }, { id: "storia", label: "La nostra storia" }, { id: "identita", label: "La nostra identità" }, { id: "principi", label: "Perché sceglierci" }]}
  >
    <InstitutionalStory id="chi-siamo" title="Due realtà, una stessa missione" paragraphs={[
      "La GiCo Società Cooperativa Sociale – Impresa Sociale, situata all’interno del complesso della Piccola Casa della Divina Provvidenza – Cottolengo di Trentola Ducenta, unisce assistenza specializzata e crescita educativa.",
      "Attraverso il Centro Sociale Polifunzionale per Disabili “Le Perle Preziose” offre accoglienza, assistenza e un ambiente pensato per l’inclusione e la partecipazione attiva. Con il Centro Studi, Orientamento e Formazione Professionale “Edoardo Apicella” accompagna lo sviluppo delle competenze personali e professionali di persone di ogni età.",
    ]} image={{ src: "/images/gico-chi-siamo.webp", alt: "Mani unite in un gesto di collaborazione e sostegno reciproco" }}>
      <div className="actions">
        <a className="text-link" href={originalPage("/centro-sociale-polifunzionale/")}>Le Perle Preziose</a>
        <a className="text-link" href={originalPage("/centro-di-formazione/")}>Centro Edoardo Apicella</a>
      </div>
    </InstitutionalStory>

    <section id="storia" className="section section-alt" aria-labelledby="storia-title">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <h2 id="storia-title">La nostra storia</h2>
          <p className="lead">Dal 2002 a oggi, le tappe che hanno dato forma alle due anime della cooperativa.</p>
        </div>
        <Timeline />
      </div>
    </section>

    <section id="identita" className="section" aria-labelledby="identita-title">
      <div className="wrap identity">
        <div data-reveal>
          <h2 id="identita-title">La nostra identità</h2>
          <div className="prose"><p>La nostra identità trae ispirazione dall’eredità di profonda compassione e dall’impegno verso l’eccellenza. Fondiamo la nostra missione su due pilastri: l’assistenza premurosa e l’educazione. Nel Centro Sociale Polifunzionale ci impegniamo a creare un ambiente che promuove l’inclusione, il rispetto e il benessere dei nostri ospiti; nel Centro di Formazione valorizziamo la crescita professionale attraverso un approccio didattico concreto e pratico.</p></div>
        </div>
        <blockquote className="identity-statement" data-reveal data-reveal-delay="60">
          <p>In GiCo, ogni azione è guidata dalla convinzione che ogni persona merita opportunità di assistenza di qualità e accesso all’educazione, come basi per una società più equa e inclusiva.</p>
        </blockquote>
      </div>
    </section>

    <InstitutionalPrinciples id="principi" title="Perché sceglierci" items={principles} alt />
  </InstitutionalPage>;
}
