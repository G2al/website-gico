// Original wording: https://www.gicocoop.it/centro-sociale-polifunzionale/.
export const socialValues = [
  { title: "Eguaglianza", description: "Assicuriamo un’assistenza appropriata a tutti, senza distinzioni." },
  { title: "Imparzialità", description: "Garantiamo equità e obiettività nel nostro operato." },
  { title: "Efficienza ed Efficacia", description: "Ci impegniamo a offrire il massimo livello di servizio possibile." },
  { title: "Accoglienza", description: "Favoriamo un clima di fiducia e calore familiare." },
  { title: "Continuità", description: "Manteniamo regolarità e costanza nelle nostre prestazioni." },
  { title: "Partecipazione", description: "Includiamo attivamente gli utenti nel processo di miglioramento continuo dei nostri servizi." },
] as const;

// Original PDFs copied byte-for-byte to public/documents; source URLs retained.
export const certificates = [
  { title: "ISO 9001:2015 Certificato Numero 10846/01", description: "Progettazione ed erogazione di servizi di assistenza per centro sociale polifunzionale.", href: "/documents/iso-9001-centro-sociale.pdf", source: "https://www.gicocoop.it/wp-content/uploads/2025/06/iso-9001-centro-polif.pdf" },
  { title: "ISO 9001:2015 Certificato Numero 9509/2", description: "Progettazione ed erogazione di corsi di formazione professionale.", href: "/documents/iso-9001-formazione.pdf", source: "https://www.gicocoop.it/wp-content/uploads/2025/06/iso-9001-formaz.pdf" },
  { title: "ISO 45001:2018", description: "Ente di Formazione Professionale", href: "/documents/iso-45001-formazione.pdf", source: "https://www.gicocoop.it/wp-content/uploads/2024/05/GICO-S.C.S.-45001-IAS.pdf" },
  { title: "ISO/IEC 27001:2022", description: "Ente di Formazione Professionale", href: "/documents/iso-27001-formazione.pdf", source: "https://www.gicocoop.it/wp-content/uploads/2024/05/GICO-S.C.S.-27001-IAS.pdf" },
] as const;

export const socialReport = { year: 2024, href: "/documents/bilancio-sociale-2024.pdf", source: "https://www.gicocoop.it/wp-content/uploads/2025/07/bilancio-sociale_2024_GiCo_ok.pdf" } as const;

// Texts supplied by GiCo (October 2026).
export const centreNames = {
  social: "Centro Sociale Polifunzionale per Disabili “Le Perle Preziose”",
  training: "Centro Studi, Orientamento e Formazione Professionale “Edoardo Apicella”",
} as const;

export const timeline = [
  { year: "2002", title: "Le origini: orientamento per i giovani", text: "GiCo nasce a Trentola Ducenta, all’interno del complesso della Piccola Casa della Divina Provvidenza – Cottolengo, con il Centro Studi, Orientamento e Formazione Professionale “Edoardo Apicella”. L’obiettivo è aiutare soprattutto i giovani a scegliere il proprio percorso formativo e professionale. Il nome GiCo richiama San Giuseppe Benedetto Cottolengo, il cui insegnamento ispira ancora oggi ogni nostra azione." },
  { year: "2005", title: "L’accreditamento regionale", text: "La Regione Campania accredita il Centro “Edoardo Apicella” per la formazione professionale. All’orientamento si affianca la formazione vera e propria: nascono i primi percorsi professionalizzanti, finanziati e autofinanziati." },
  { year: "2007", title: "Il primo passo nell’assistenza", text: "La cooperativa apre il suo secondo ambito di impegno: l’assistenza sociale e socio-sanitaria. Gli ospiti vengono accolti in struttura o seguiti a domicilio, nelle loro case, grazie anche al contributo dei giovani del servizio civile. È qui che la vocazione sociale di GiCo prende forma concreta." },
  { year: "2013", title: "Nascono “Le Perle Preziose”", text: "L’esperienza maturata nell’assistenza si traduce in una struttura dedicata: il Centro Sociale Polifunzionale per Disabili “Le Perle Preziose”, autorizzato dall’Ufficio di Piano (prot. n. 506 del 6 giugno 2013). Un luogo pensato per l’accoglienza, i laboratori, la socializzazione e l’inclusione." },
  { year: "2018", title: "Cogestore dei progetti di Budget di Salute", text: "GiCo diventa cogestore dei PTRI/BdS, i Progetti Terapeutico-Riabilitativi Individualizzati sostenuti da Budget di Salute. Un riconoscimento che rafforza il ruolo del Centro nella rete dei servizi territoriali e nella costruzione di percorsi personalizzati per le persone con disabilità." },
  { year: "Oggi", title: "Due realtà, una stessa missione", text: "Il Centro “Edoardo Apicella” accompagna studenti, lavoratori e persone in cerca di occupazione con formazione professionale, collaborazioni con università telematiche per lauree, master e alta formazione, e con enti nazionali per le certificazioni informatiche (CERTIPASS, PEKIT – Fondazione Sviluppo Europa, EQIA – già IDPASS, ISORS) e linguistiche (British Institutes, preparazione alle certificazioni Cambridge). Il Centro “Le Perle Preziose” continua a essere uno spazio di accoglienza, crescita e partecipazione alla vita della comunità. Due percorsi diversi, uniti dalla centralità della persona." },
] as const;

export const socialCentre = {
  presentation: [
    "Nato nel 2013, il Centro Sociale Polifunzionale per Disabili “Le Perle Preziose” è la realtà attraverso cui GiCo promuove accoglienza, assistenza, socializzazione e partecipazione delle persone con disabilità.",
    "Situato all’interno del complesso della Piccola Casa della Divina Provvidenza – Cottolengo di Trentola Ducenta, il Centro mette al centro la persona, le sue capacità e le sue possibilità di espressione e relazione.",
    "Le attività quotidiane intrecciano creatività, apprendimento, movimento e occasioni di incontro. Laboratori, esperienze condivise e uscite sul territorio contribuiscono a valorizzare le autonomie e a rafforzare il legame con la comunità.",
    "Dal 2018, GiCo opera inoltre come cogestore nell’ambito dei Progetti Terapeutico-Riabilitativi Individualizzati sostenuti da Budget di Salute.",
  ],
  spaces: [
    "Il Centro dispone di ambienti dedicati alle attività di gruppo e ai laboratori, aree per il relax e la socializzazione e un angolo bar. Gli spazi sono organizzati con attenzione all’accessibilità, al comfort e alle diverse esigenze delle persone accolte.",
    "La struttura comprende inoltre gli uffici per l’accoglienza, la direzione, le relazioni con il pubblico e i servizi amministrativi.",
  ],
  // The act n. 587 of 4 May 2018 is omitted until GiCo confirms its name and issuing body.
  authorizations: [
    "Autorizzazione dell’Ufficio di Piano, prot. n. 506 del 6 giugno 2013.",
    "Cogestore dei PTRI/BdS (Progetti Terapeutico-Riabilitativi Individualizzati sostenuti da Budget di Salute) dal 2018.",
  ],
  activityAreas: [
    {
      id: "creativita",
      title: "Creatività, manualità e competenze digitali",
      summary: "Pittura, maglia, uncinetto, riciclo creativo e laboratorio informatico.",
      text: "Pittura, disegno, lavori a maglia, ferri, uncinetto e riciclo creativo offrono occasioni per sperimentare materiali e tecniche, esercitare la manualità ed esprimere la propria creatività. Il laboratorio informatico affianca queste esperienze con attività dedicate all’apprendimento e alla pratica delle competenze digitali.",
      image: "/images/servizi-centro-sociale-1.webp",
      alt: "Pennelli e colori per le attività di pittura",
    },
    {
      id: "autonomie",
      title: "Educazione e autonomie quotidiane",
      summary: "Educazione stradale, ambientale e gestione dei rifiuti.",
      text: "Le attività di educazione stradale, educazione ambientale e gestione dei rifiuti aiutano a conoscere le regole della convivenza, sviluppare comportamenti consapevoli e partecipare con maggiore autonomia alla vita quotidiana e comunitaria.",
      image: "/images/servizi-centro-sociale-2.webp",
      alt: "Una creazione con materiali naturali al Centro Sociale",
    },
    {
      id: "benessere",
      title: "Benessere, movimento ed espressione",
      summary: "Ginnastica dolce, teatro, musicoterapia e training cognitivi.",
      text: "Ginnastica dolce, teatro, musicoterapia e training cognitivi compongono un’offerta di attività dedicata al movimento, all’espressione personale, alla relazione e alla stimolazione delle capacità cognitive, nel rispetto delle possibilità e dei tempi di ciascuno.",
      image: "/images/servizi-centro-sociale-3.webp",
      alt: "Un’attività con un gioco a incastri colorato",
    },
    {
      id: "socializzazione",
      title: "Socializzazione e vita di comunità",
      summary: "Letture, giochi, canto, giardinaggio, feste e ricorrenze.",
      text: "Letture condivise, conversazioni, consultazione di giornali online, giochi di società, canto e ballo creano occasioni di incontro e partecipazione. Il giardinaggio e la cura delle piante favoriscono il coinvolgimento in attività concrete, mentre feste e ricorrenze diventano momenti da preparare e vivere insieme.",
      image: "/images/servizi-centro-sociale-4.webp",
      alt: "Un cartellone condiviso: Tutti diversi, tutti uguali e speciali",
    },
    {
      id: "territorio",
      title: "Uscite e partecipazione al territorio",
      summary: "Passeggiate, attività all’aperto e uscite nella comunità.",
      text: "Passeggiate, attività all’aperto e uscite sul territorio portano le esperienze del Centro oltre i suoi spazi. Sono occasioni per stare insieme, conoscere i luoghi della comunità e coltivare relazioni, rendendo la partecipazione una parte concreta della quotidianità.",
      image: "/images/gallery-centro-sociale-11.webp",
      alt: "Sorrisi e compagnia durante le attività all’aperto",
    },
  ],
} as const;

export const trainingCentre = {
  presentation: [
    "Attraverso il Centro Studi, Orientamento e Formazione Professionale “Edoardo Apicella”, GiCo accompagna le persone nella scelta e nella costruzione del proprio percorso formativo e professionale.",
    "Il Centro opera nell’ambito della formazione professionale finanziata e autofinanziata e affianca studenti, lavoratori e persone in cerca di occupazione con attività di orientamento, tutoraggio e aggiornamento delle competenze.",
    "L’offerta comprende percorsi professionalizzanti, formazione universitaria e postuniversitaria in collaborazione con università telematiche, certificazioni informatiche e linguistiche, formazione per il mondo della scuola e della Pubblica Amministrazione, nonché percorsi dedicati alla sicurezza e alle competenze richieste nei contesti lavorativi.",
  ],
  accreditation: {
    title: "Accreditamento per la formazione professionale – Regione Campania",
    text: "Esito finale domanda di accreditamento ai sensi del D.G.R. 226/06, pubblicata sul B.U.R.C. n. 16 del 3 aprile 2006, art. 16.",
    code: "292/01/05",
  },
} as const;

// Distinguishes accreditations, authorised centres and agreements, as requested by GiCo.
export const trainingRecognitions = {
  centres: [
    { name: "CERTIPASS", text: "Ei-Center dal 10/03/2015 per il rilascio dei corsi CERTIPASS e delle certificazioni EIPASS." },
    { name: "PEKIT – Fondazione Sviluppo Europa", text: "PEKIT Center dal 27/03/2021 per il rilascio delle certificazioni informatiche PEKIT." },
    { name: "EQIA (già IDPASS), gestore INTERTEK", text: "EQIA Point dal 2026." },
    { name: "British Institutes", text: "Test centre autorizzato per corsi e certificazioni di lingua inglese." },
  ],
  agreements: [
    { name: "ISORS", text: "Convenzione per le certificazioni informatiche." },
  ],
} as const;
