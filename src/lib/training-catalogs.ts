export type TrainingCourse = { title: string; description: string; image: string; href: string };
export type TrainingCatalog = {
  title: string;
  path: string;
  introduction: readonly string[];
  courses: readonly TrainingCourse[];
};

// Original titles, descriptions, order and images from GiCo's area-attivita archives.
// Course details remain on the original site until those pages are rebuilt.
const course = (title: string, description: string, image: string, slug: string): TrainingCourse => ({
  title, description, image: `/images/catalogo-${image}.webp`, href: `https://www.gicocoop.it/attivita/${slug}/`,
});

export const universityCatalog: TrainingCatalog = {
  title: "Formazione Universitaria",
  path: "/area-attivita/formazione-universitaria",
  introduction: [
    "Il nostro centro di formazione è collegato a prestigiose istituzioni come le università online Pegaso, Mercatorum e San Raffaele.",
    "Rivolgendovi al nostro centro, potrete esplorare gratuitamente un’ampia offerta formativa che spazia dai corsi di laurea online, ai master, fino ai corsi di alta formazione. Avrete la possibilità di scegliere il percorso di studio che meglio si adatta alle vostre esigenze, con il supporto di orientatori didattici esperti.",
    "Il nostro centro vi guiderà attraverso ogni fase della vostra carriera universitaria: dall’orientamento iniziale, al supporto continuativo durante gli studi, fino al raggiungimento del vostro traguardo accademico. Con noi, il vostro percorso educativo è in mani sicure e competenti, garantendovi una formazione di qualità superiore in linea con le esigenze del mondo moderno.",
  ],
  courses: [
    course("Pegaso", "Con Pegaso potrai studiare dove e quando vuoi e sostenere i tuoi esami direttamente online.", "pegaso", "pegaso"),
    course("Mercatorum", "Ateneo Telematico del Sistema delle Camere di Commercio con target principale di “persone già occupate”.", "mercatorum", "mercatorum"),
    course("Università San Raffaele", "L’offerta didattica è erogata in modalità E-Learning, attraverso l’utilizzo di internet e delle nuove tecnologie digitali.", "universita-san-raffaele", "universita-san-raffaele"),
    course("Perfezionamenti", "Sono percorsi formativi rivolti ai diplomati magistrali che non sono in possesso di una laurea.", "perfezionamenti", "perfezionamenti"),
    course("Master Universitari", "I Master sono titoli con finalità di approfondimenti tematici offerti dai vari Atenei.", "master", "master-universitari"),
    course("Percorsi abilitanti insegnanti 60-30-36 CFU", "Sono esami universitari richiesti come requisito di accesso per partecipare ai Concorsi nella Scuola.", "docenti", "percorsi-abilitanti-insegnanti-60-30-36-cfu"),
  ],
};

export const professionalCatalog: TrainingCatalog = {
  title: "Formazione Professionale",
  path: "/area-attivita/corsi-di-formazione-professionale",
  introduction: ["Elenchiamo le qualifiche professionali rilasciate dalla Regione Campania, con autorizzazione “Esito finale domanda di accreditamento ai sensi del D.G.R. 226/06, pubblicata sul B.U.R.C. n.16 del 3 Aprile 2006, art. 16. Codice Organismo: 292/01/05”"],
  courses: [
    course("O.S.S. – Operatore Socio Sanitario", "L’OSS svolge attività di cura e di assistenza alle persone in condizione di disagio o di non autosufficienza.", "oss", "o-s-s-operatore-socio-sanitario"),
    course("O.S.S.S. – Operatore Socio Sanitario Specializzato o complementare", "Questo operatore può agire come supporto esclusivo all’assistenza infermieristica ed ostetrica.", "osss", "o-s-s-s-operatore-socio-sanitario-specializzato-o-complementare"),
    course("Opi – Operatore dell’Infanzia", "L’Operatore dell’infanzia è impegnato nell’attività di accudimento e animazione rivolta a bambini e famiglie.", "opi", "opi"),
    course("Operatore Socio – Assistenziale (O.S.A.)", "Il corso offre l’opportunità di sviluppare le competenze per diventare un professionista altamente qualificato.", "o.s.a", "operatore-socio-assistenziale-o-s-a"),
    course("Segretario-Coordinatore Amministrativo", "La figura professionale richiede conoscenza della normativa vigente e le procedure contabili.", "coordinatore-amministrativo", "segretario-coordinatore-amministrativo"),
    course("Operatore Amministrativo Contabile", "Questo corso è stato ideato per migliorare significativamente il punteggio nelle graduatorie ATA.", "operatore-amministrativo", "operatore-amministrativo-contabile"),
    course("Operatore all’assistenza educativa ai disabili", "Questo corso mira a formare l’Operatore all’Assistenza Educativa ai Disabili, una figura professionale riconosciuta.", "corso-dis", "operatore-allassistenza-educativa-ai-disabili"),
    course("Addetto alla cura e pulizia di spazi ed ambienti", "Questa figura trova opportunità di lavoro in molteplici contesti, sia nel settore pubblico che privato.", "pulizia", "addetto-alla-cura-e-pulizia-di-spazi-ed-ambienti"),
  ],
};

export const computerCatalog: TrainingCatalog = {
  title: "Certificazioni Informatiche",
  path: "/area-attivita/certificazioni-informatiche",
  introduction: [
    "CERTIPASS: siamo Ei-center Business dal 10/03/2015 per il rilascio di corsi CERTIPASS e certificazioni EIPASS.",
    "PEKIT: siamo PEKIT Center – Fond. Sviluppo Europa dal 27/03/2021 per il rilascio delle certificazioni informatiche PEKIT.",
  ],
  courses: [
    course("EIPASS Standard", "La certificazione EIPASS Standard è accreditata da Accredia secondo il Digital Competence Framework for Citizens – DigComp 2.2.", "eipass-standard", "eipass-standard"),
    course("EIPASS 7 moduli user", "La certificazione internazionale EIPASS 7 Moduli User è in linea con gli standard europei, includendo l’e-Competence Framework for ICT Users (e-CF) e il DigComp Framework", "7modulia", "eipass-7-moduli-user"),
    course("EIPASS Progressive", "La certificazione EIPASS Progressive è progettata per verificare e attestare competenze avanzate", "progressive", "eipass-progressive"),
    course("Lim", "Questo corso permette di conoscere la Lavagna Interattiva Multimediale sia a livello di software che di hardware.", "lim", "lim"),
    course("Tablet", "Corso sull’uso didattico dei tablet permette al docente di avere piena padronanza dello strumento", "tablet", "tablet"),
    course("Coding", "Questo corso designa le competenze che riguardano la programmazione informatica e il pensiero computazionale.", "coding", "coding"),
    course("Pekit", "Il progetto è basato su un approccio graduale delle competenze, attraverso un percorso in 4 fasi.", "pekit", "pekit"),
    course("Dattilografia", "La dattilografia è un metodo di scrittura meccanica grazie al quale si può scrivere un testo in breve tempo e con pochi errori.", "dattilografia", "dattilografia"),
  ],
};

export const languageCatalog: TrainingCatalog = {
  title: "Certificazioni Linguistiche",
  path: "/area-attivita/certificazioni-linguistiche",
  introduction: [],
  courses: [
    course("Certificazioni Inglese", "Le certificazioni di lingua inglese sono rilasciate da enti di certificazione accreditati MIUR.", "inglese", "certificazioni-inglese"),
    course("Certificazioni Tedesco", "Le certificazioni di lingua tedesca sono rilasciate da enti di certificazione accreditati MIUR.", "tedesco", "certificazioni-tedesco"),
  ],
};
