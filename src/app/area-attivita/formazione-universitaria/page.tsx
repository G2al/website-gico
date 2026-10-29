import type { Metadata } from "next";
import { Building, ClipboardCheck, School } from "lucide-react";
import { InstitutionalPage, InstitutionalStory } from "@/components/institutional-page";
import { ArrowLink } from "@/components/arrow-link";
import { gicoContact } from "@/lib/gico-contact";
import { originalPage } from "@/lib/navigation";
import "@/components/training-pages.css";

export const metadata: Metadata = {
  title: "Formazione Universitaria e Post-universitaria | GiCo – Centro Edoardo Apicella",
  description: "Orientamento e tutoraggio per corsi di laurea, master, perfezionamenti e alta formazione in collaborazione con università telematiche; formazione per scuola e Pubblica Amministrazione, percorsi abilitanti e TFA.",
};

const school = [
  { icon: School, title: "Docenti e personale scolastico", text: "Formazione e aggiornamento per docenti e personale della scuola." },
  { icon: Building, title: "Pubblica Amministrazione", text: "Formazione per il personale della Pubblica Amministrazione." },
  { icon: ClipboardCheck, title: "Percorsi abilitanti e TFA", text: "Orientamento e assistenza nelle pratiche per i percorsi abilitanti per docenti e per il TFA." },
];

export default function UniversityTrainingPage() {
  return <InstitutionalPage
    title="Formazione Universitaria e Post-universitaria"
    overline="Centro Studi, Orientamento e Formazione Professionale “Edoardo Apicella”"
    intro="In collaborazione con università telematiche, accompagniamo studenti e professionisti nella scelta di corsi di laurea, master, corsi di perfezionamento e percorsi di alta formazione."
    path="/area-attivita/formazione-universitaria"
    parent={{ label: "Centro di Formazione", href: "/centro-di-formazione" }}
    sections={[{ id: "accompagnamento", label: "Il nostro accompagnamento" }, { id: "scuola-pa", label: "Scuola e Pubblica Amministrazione" }]}
  >
    <InstitutionalStory id="accompagnamento" title="Dall’orientamento al mondo del lavoro" paragraphs={[
      "Il nostro supporto parte dall’orientamento iniziale e prosegue durante gli studi, con tutoraggio, affiancamento nell’organizzazione del metodo di studio e supporto metodologico per elaborati e tesi.",
      "Al termine del percorso, aiutiamo le persone a orientarsi verso il mondo del lavoro o, per chi è già occupato, a individuare opportunità di aggiornamento e crescita professionale nel proprio ambito.",
    ]} image={{ src: "/images/pagina-centro-di-formazione-3.webp", alt: "Studenti durante un momento di studio" }}>
      <div className="actions">
        <ArrowLink href={originalPage("/richiedi-informazioni/")}>Richiedi informazioni</ArrowLink>
        <a className="text-link" href={`mailto:${gicoContact.trainingEmail}`}>{gicoContact.trainingEmail}</a>
      </div>
    </InstitutionalStory>

    <section id="scuola-pa" className="section section-alt" aria-labelledby="scuola-pa-title">
      <div className="wrap">
        <div className="section-head" data-reveal><h2 id="scuola-pa-title">Scuola e Pubblica Amministrazione</h2></div>
        <ul className="offer-grid">
          {school.map(({ icon: Icon, ...item }, index) => (
            <li key={item.title} data-reveal data-reveal-delay={index * 60}>
              <div className="card is-accent">
                <span className="offer-icon" aria-hidden="true"><Icon size={22} strokeWidth={1.7} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </InstitutionalPage>;
}
