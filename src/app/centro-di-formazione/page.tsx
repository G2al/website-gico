import type { Metadata } from "next";
import { InstitutionalPage, InstitutionalPrinciples, InstitutionalStory } from "@/components/institutional-page";

export const metadata: Metadata = {
  title: "Centro di Formazione Edoardo Apicella | GiCo",
  description: "Il Centro Studi, Orientamento e Formazione Professionale Edoardo Apicella di GiCo: corsi, sviluppo professionale, accompagnamento universitario e certificazioni.",
};

const courses = [
  { title: "Corsi Professionali", description: "Offriamo formazione specifica in vari settori, garantendo una preparazione pratica e teorica completa." },
  { title: "Accompagnamento Universitario", description: "Supportiamo gli studenti nel percorso accademico, facilitando l’accesso a corsi di laurea e master." },
  { title: "Certificazioni Informatiche", description: "Siamo un centro autorizzato per il rilascio di certificazioni informatiche riconosciute, essenziali per il mondo del lavoro tecnologico e digitale." },
];

export default function TrainingCentrePage() {
  return <InstitutionalPage title="Centro di Formazione" path="/centro-di-formazione" sections={[{ id: "il-centro", label: "Il nostro centro" }, { id: "educazione", label: "Educazione e sviluppo" }, { id: "corsi", label: "Corsi e certificazioni" }, { id: "offerta", label: "Offerta formativa" }]}>
    <InstitutionalStory id="il-centro" title="Il Nostro Centro di Formazione" paragraphs={[
      "Oltre al nostro costante impegno nell’ambito sociale, la GiCo opera nel settore della formazione fin dal 2002 con il suo Centro Studi, Orientamento e Formazione Professionale “Edoardo Apicella”, un’istituzione educativa dedicata allo sviluppo professionale e personale.",
      "Il nostro centro offre un’ampia gamma di corsi di formazione professionale, servizi di accompagnamento per percorsi universitari, e certificazioni in ambito informatico, rivolti sia a giovani che a professionisti che desiderano aggiornare le proprie competenze.",
    ]} image={{ src: "/images/pagina-centro-di-formazione-2.webp", alt: "Aula del Centro di Formazione GiCo Edoardo Apicella" }} />
    <InstitutionalStory id="educazione" title="Educazione e Sviluppo Professionale" paragraphs={[
      "Il Centro di Formazione GiCo è un luogo di crescita e apprendimento, dove la passione per la conoscenza si fonde con la pratica professionale. Attraverso un approccio didattico innovativo, forniamo strumenti e conoscenze necessarie per affrontare le sfide del mercato del lavoro di oggi e di domani.",
    ]} image={{ src: "/images/pagina-centro-di-formazione-1.webp", alt: "Aula informatica del Centro di Formazione GiCo" }} reverse dark />
    <InstitutionalPrinciples id="corsi" title="Corsi e Certificazioni" items={courses} />
    <InstitutionalStory id="offerta" title="Un'Offerta Formativa Completa" paragraphs={[
      "Crediamo fermamente nel valore dell’istruzione continua come mezzo di emancipazione individuale e progresso collettivo. Per questo, il nostro centro si dedica a creare percorsi formativi adatti ad ogni esigenza, con docenti qualificati e un metodo di insegnamento dinamico ed efficace",
    ]} image={{ src: "/images/pagina-centro-di-formazione-3.webp", alt: "Studenti insieme, immagine dell’offerta formativa pubblicata da GiCo" }} />
  </InstitutionalPage>;
}
