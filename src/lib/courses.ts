// Course texts from the original GiCo course pages (gicocoop.it/attivita/…), reorganised into sections.
export type CourseCategory = "professionale" | "informatica" | "lingue" | "altre";
export type CourseSection = { title: string; paragraphs?: readonly string[]; items?: readonly string[] };
export type Course = {
  slug: string;
  title: string;
  category: CourseCategory;
  image: string;
  summary: string;
  highlight?: boolean;
  facts?: readonly { label: string; value: string }[];
  intro: readonly string[];
  sections: readonly CourseSection[];
};

const image = (name: string) => `/images/catalogo-${name}.webp`;
const gpsScore = [
  "Il titolo è valido per il punteggio delle GPS di I e II fascia di scuola infanzia e primaria, secondaria I e II grado, ITP, sostegno e personale educativo.",
  "Secondo quanto riportato nelle Tabelle valutazione titoli (O.M. n. 112 del 6/05/2022): «Certificazioni informatiche, per ogni titolo presentato e sino a un massimo di quattro titoli per complessivi 2 punti, sono riconosciute 0,5 punti».",
];

export const courses: readonly Course[] = [
  {
    slug: "oss",
    title: "O.S.S. – Operatore Socio Sanitario",
    category: "professionale",
    image: image("oss"),
    summary: "Attività di cura e assistenza alle persone in condizione di disagio o di non autosufficienza.",
    highlight: true,
    facts: [{ label: "Durata", value: "1000 ore" }, { label: "Requisiti", value: "Obbligo scolastico assolto e 17 anni compiuti" }],
    intro: [
      "L’Operatore Socio-Sanitario (OSS) è in grado di svolgere attività di cura e di assistenza alle persone in condizione di disagio o di non autosufficienza sul piano fisico e/o psichico, al fine di soddisfarne i bisogni primari e favorirne il benessere e l’autonomia, nonché l’integrazione sociale.",
      "A seguito dell’attestato di qualifica conseguito al termine di specifica formazione professionale regionale, l’OSS svolge attività indirizzate a soddisfare i bisogni primari della persona, nell’ambito delle proprie aree di competenza, in un contesto sia sociale che sanitario. Opera in collaborazione con gli altri operatori professionali preposti all’assistenza sanitaria e a quella sociale, secondo il criterio del lavoro multi-professionale.",
    ],
    sections: [
      { title: "Qualifica", paragraphs: ["Alla fine del percorso l’allievo otterrà la qualifica professionale di Operatore Socio Sanitario, valida sia in Italia che in Europa, ai sensi della Legge 45/78 e delle ulteriori normative regionali di riferimento."] },
      { title: "Requisiti d’accesso", paragraphs: ["Per accedere è richiesto il regolare assolvimento dell’obbligo scolastico e il compimento del 17° anno di età."] },
      { title: "Durata", paragraphs: ["Il corso ha una durata di 1000 ore, di cui 550 di lezione frontale (450 di teoria e 100 di laboratorio) e 450 di tirocinio presso enti convenzionati in Regione Campania."] },
      { title: "Dove può trovare lavoro", paragraphs: ["L’Operatore Socio Sanitario svolge il proprio lavoro nei servizi sanitari e sociali gestiti da enti pubblici, da cooperative sociali e da privati: in ospedale e negli altri servizi sanitari, nei servizi sociali (comunità alloggio, residenze per anziani, centri diurni) o a casa della persona."] },
    ],
  },
  {
    slug: "osss",
    title: "O.S.S.S. – Operatore Socio Sanitario Specializzato o complementare",
    category: "professionale",
    image: image("osss"),
    summary: "Supporto all’assistenza infermieristica e ostetrica, sotto la supervisione del personale sanitario.",
    facts: [{ label: "Durata", value: "300 ore" }],
    intro: [
      "A differenza dell’operatore socio sanitario tradizionale, l’OSSS lavora in stretta collaborazione con infermieri e ostetriche seguendo le direttive del direttore dell’assistenza infermieristica. Può fornire assistenza domiciliare, operare nel settore pubblico (tramite agenzie interinali e cooperative) e nel privato, e lavorare all’interno di strutture residenziali.",
    ],
    sections: [
      { title: "Competenze e attività", paragraphs: ["Con una formazione avanzata in assistenza sanitaria, l’OSSS collabora con diverse professionalità in modo coordinato, migliora il rapporto di aiuto con il paziente e supporta infermieri e ostetriche, sempre sotto supervisione, nelle seguenti attività:"], items: [
        "Somministrazione di terapie (naturale, intramuscolare, sottocutanea).",
        "Gestione di bagni terapeutici, impacchi e frizioni.",
        "Misurazione di parametri vitali (frequenza cardiaca, respiratoria, temperatura).",
        "Raccolta di campioni per analisi diagnostiche.",
        "Medicazioni semplici, bendaggi, clisteri.",
        "Mobilizzazione di pazienti non autosufficienti.",
        "Pratiche di rianimazione polmonare e cardiaca esterna.",
        "Pulizia e sterilizzazione di attrezzature sanitarie.",
      ] },
      { title: "Durata e qualifica", paragraphs: ["Il corso dura 300 ore: 150 ore di teoria (50 in formazione a distanza e 100 in aula) e 150 ore di tirocinio in strutture del settore socio-sanitario convenzionate. Si conclude con un esame di valutazione, dopo il quale viene rilasciata la qualifica di operatore socio sanitario con formazione complementare."] },
    ],
  },
  {
    slug: "opi",
    title: "O.P.I. – Operatore dell’Infanzia",
    category: "professionale",
    image: image("opi"),
    summary: "Accudimento e animazione rivolti a bambini e famiglie, a supporto della figura dell’educatore.",
    highlight: true,
    facts: [{ label: "Durata", value: "600 ore" }, { label: "Requisiti", value: "Diploma di scuola secondaria di secondo grado" }],
    intro: [
      "L’Operatore dell’infanzia è impegnato nell’attività di accudimento e animazione rivolta a bambini e famiglie, in strutture residenziali e semiresidenziali (comunità per minori, soggiorni vacanza, reparti ospedalieri), in servizi e interventi socio-educativi per l’infanzia e la famiglia e nei servizi socio-educativi per la prima infanzia.",
      "Svolge attività di sostegno alla genitorialità e collabora, soprattutto in supporto alla figura dell’educatore, alla progettazione e realizzazione di iniziative culturali, ricreative ed espressive finalizzate alla socializzazione e allo sviluppo delle capacità creative e relazionali del bambino.",
    ],
    sections: [
      { title: "Requisiti d’accesso", paragraphs: ["Possesso del diploma di istruzione secondaria di secondo grado."] },
      { title: "Durata", paragraphs: ["Il corso ha una durata di 600 ore, tra lezioni frontali e pratica."] },
      { title: "Dove può trovare lavoro", items: ["Asili nido, scuole materne ed elementari", "Centri doposcuola e ludoteche", "Centri per l’affido e l’adozione", "Comunità alloggio e case famiglia", "Centri vacanze e centri socio-educativi diurni", "Mini club in villaggi turistici e navi da crociera", "Associazioni e cooperative di servizi per l’infanzia", "Oratori religiosi", "Reparti ospedalieri per bambini e adolescenti", "Associazioni di clownterapia"] },
    ],
  },
  {
    slug: "osa",
    title: "O.S.A. – Operatore Socio-Assistenziale",
    category: "professionale",
    image: image("o.s.a"),
    summary: "Assistenza diretta e cura dell’ambiente di vita della persona, a domicilio o in struttura.",
    highlight: true,
    facts: [{ label: "Durata", value: "300 ore, circa 4 mesi e mezzo" }, { label: "Requisiti", value: "Licenza di scuola media" }, { label: "Livello", value: "EQF 3" }],
    intro: [
      "Il corso per Operatore Socio-Assistenziale permette di sviluppare le competenze necessarie per diventare un professionista qualificato. È riconosciuto nel Repertorio Regionale delle Qualifiche Professionali della Regione Campania, livello EQF 3.",
    ],
    sections: [
      { title: "Ruolo e competenze", items: [
        "Assistenza diretta e cura dell’ambiente di vita dell’utente, sia a domicilio che in strutture residenziali.",
        "Collaborazione con servizi e risorse sociali per promuovere l’autonomia e il rispetto dell’autodeterminazione degli utenti.",
        "Gestione di situazioni di bisogno specifiche, evitando disagi per le persone e riducendo l’uso improprio di strutture sanitarie.",
      ] },
      { title: "Modalità e durata", items: ["300 ore totali, distribuite su circa 4 mesi e mezzo.", "216 ore di teoria e laboratorio in didattica a distanza, in modalità sincrona.", "84 ore di teoria in formazione a distanza, in autonomia."], paragraphs: ["Al termine del corso, superando l’esame finale (online o in presenza, secondo le disposizioni della Regione Campania), viene rilasciata la qualifica professionale di Operatore Socio-Assistenziale, riconosciuta in Italia e in Europa ai sensi del D.lgs. 13/2013."] },
      { title: "Validità e riconoscimenti", items: [
        "Graduatorie ATA: l’attestato di qualifica vale 1 punto nelle graduatorie scolastiche ATA per Collaboratore Scolastico, su tutto il territorio nazionale.",
        "Concorsi pubblici: punteggio aggiuntivo secondo i criteri specificati nei bandi di concorso.",
      ] },
      { title: "Opportunità professionali", paragraphs: ["Dopo la qualifica, l’Operatore Socio-Assistenziale può lavorare come dipendente o libero professionista in strutture socio-assistenziali (case di riposo, centri diurni, comunità per minori, istituti per disabili, cliniche) o a domicilio."] },
    ],
  },
  {
    slug: "segretario-coordinatore-amministrativo",
    title: "Segretario-Coordinatore Amministrativo",
    category: "professionale",
    image: image("coordinatore-amministrativo"),
    summary: "Procedure amministrative e contabili, segreteria e coordinamento dei servizi.",
    highlight: true,
    facts: [{ label: "Durata", value: "500 ore" }, { label: "Requisiti", value: "Diploma di scuola secondaria di secondo grado" }],
    intro: [
      "Il Coordinatore amministrativo svolge attività che richiedono conoscenza della normativa vigente e delle procedure amministrativo-contabili, anche con l’utilizzo di sistemi informatizzati. Ha autonomia operativa nella definizione e nell’esecuzione degli atti amministrativi, contabili, di ragioneria e di economato, nell’ambito delle direttive ricevute.",
      "Svolge azioni di supporto amministrativo, gestione informatizzata dei servizi di segreteria, gestione di archivi e database, servizi di biblioteca, e si occupa del rilascio di certificazioni, estratti e copie di documenti. Può coordinare più addetti e proporre miglioramenti organizzativi, anche in relazione all’uso di procedure informatiche.",
    ],
    sections: [
      { title: "Requisiti d’accesso", paragraphs: ["Diploma di istruzione secondaria di secondo grado."] },
      { title: "Durata", paragraphs: ["Il corso ha una durata di 500 ore."] },
      { title: "Dove può trovare lavoro", paragraphs: ["Per la sua trasversalità, la figura può inserirsi in aziende private e pubbliche di ogni settore e dimensione: scuole, uffici comunali, aziende sanitarie."] },
      { title: "Punteggi nei concorsi pubblici", paragraphs: ["La qualifica garantisce il punteggio aggiuntivo previsto per l’aggiornamento delle graduatorie triennali del Personale ATA, nonché il punteggio aggiuntivo in altri concorsi pubblici e nelle forze armate laddove previsto dal bando, in relazione al possesso di una qualifica professionale rilasciata ai sensi della Legge 845/78 e successive modifiche."] },
    ],
  },
  {
    slug: "operatore-amministrativo-contabile",
    title: "Operatore Amministrativo Contabile",
    category: "professionale",
    image: image("operatore-amministrativo"),
    summary: "Competenze in amministrazione, contabilità e gestione, valide per le graduatorie ATA.",
    highlight: true,
    facts: [{ label: "Durata", value: "300 ore" }, { label: "Modalità", value: "Online" }],
    intro: [
      "Il corso si rivolge a chi desidera sviluppare competenze in amministrazione, contabilità e gestione generale ed è pensato anche per migliorare il punteggio nelle graduatorie ATA. È riconosciuto dal MIUR e accreditato dalla Regione Campania.",
    ],
    sections: [
      { title: "Inizio e frequenza", paragraphs: ["Il corso inizia ogni mese, o non appena si raggiunge il numero minimo di partecipanti per formare una classe. È completamente online, quindi accessibile da ogni parte d’Italia."] },
      { title: "Struttura del corso", items: ["Formazione a distanza (FAD): 84 ore di apprendimento autonomo con materiale didattico interattivo.", "Didattica a distanza (DAD), parte 1: 126 ore di lezioni in tempo reale.", "Laboratorio in DAD, parte 2: 90 ore di lezioni pratiche in tempo reale."] },
      { title: "Esame finale", paragraphs: ["La Regione Campania ha stabilito che l’esame finale si svolga in presenza, salvo diverse indicazioni della stessa Regione. La data viene fissata al termine del corso. Per essere ammessi all’esame non si deve superare il 20% di assenze."] },
      { title: "Certificazione e punteggio", paragraphs: ["L’attestato vale 1,5 punti nelle graduatorie ATA per il profilo amministrativo ed è valido su tutto il territorio italiano."] },
    ],
  },
  {
    slug: "operatore-assistenza-educativa-disabili",
    title: "Operatore all’Assistenza Educativa ai Disabili",
    category: "professionale",
    image: image("corso-dis"),
    summary: "Supporto alle attività socio-educative per persone con disabilità, in diversi contesti.",
    facts: [{ label: "Durata", value: "600 ore, in 5 mesi" }, { label: "Requisiti", value: "Licenza media" }, { label: "Livello", value: "EQF 3" }],
    intro: [
      "Il corso forma l’Operatore all’Assistenza Educativa ai Disabili, figura riconosciuta nel Repertorio Regionale delle Qualifiche Professionali della Regione Campania, livello EQF 3 nei Servizi Socio Sanitari. L’operatore supporta le attività socio-educative per persone con disabilità: laboratori didattico-creativi, attività motorie, cura dei bisogni fondamentali e dell’igiene.",
    ],
    sections: [
      { title: "Ambiti di lavoro", items: ["Comunità per minori e disabili", "Soggiorni-vacanza e reparti ospedalieri", "Istituti scolastici e cooperative sociali", "Case famiglia e gruppi appartamento", "Agenzie di animazione e ludoteche"] },
      { title: "Programma", items: ["Assistenza nella realizzazione di laboratori e all’espressione di linguaggi alternativi.", "Vigilanza e supporto all’educatore nelle attività.", "Accompagnamento e gestione delle necessità fondamentali della persona.", "Gestione di situazioni di emergenza."] },
      { title: "Durata e certificazione", paragraphs: ["600 ore totali distribuite in 5 mesi: 360 ore di teoria (online, in DAD e FAD) e 240 ore di project work online. Al superamento dell’esame finale viene rilasciata la qualifica professionale, riconosciuta in Italia e in Europa."] },
    ],
  },
  {
    slug: "addetto-cura-pulizia-spazi-ambienti",
    title: "Addetto alla cura e pulizia di spazi ed ambienti",
    category: "professionale",
    image: image("pulizia"),
    summary: "Pulizia, disinfestazione e sanificazione di ambienti interni ed esterni, nel rispetto delle norme di sicurezza.",
    intro: [
      "L’Addetto alla cura e pulizia di spazi ed ambienti si occupa delle operazioni di pulizia, disinfestazione e sanificazione di ambienti interni ed esterni, utilizzando attrezzature e prodotti specifici nel rispetto delle norme di igiene e sicurezza. Conosce materiali e superfici, usa macchinari per la pulizia, gestisce i rifiuti e la comunicazione con clienti e colleghi.",
    ],
    sections: [
      { title: "Settori di impiego", paragraphs: ["Contesti pubblici e privati, inclusi studi professionali e cooperative di lavoro che si occupano della manutenzione di spazi interni ed esterni."] },
      { title: "Destinatari", items: ["Lavoratori con ammortizzatori sociali o altri sostegni al reddito", "Giovani, donne e persone over 55", "Persone con disabilità", "Lavoratrici e lavoratori con redditi molto bassi", "Persone disoccupate da più di sei mesi"] },
      { title: "Unità di competenza", items: ["Configurazione del servizio di cura e pulizia di spazi e ambienti.", "Approntamento dell’equipaggiamento per la pulizia."] },
      { title: "Modalità", paragraphs: ["È possibile partecipare a distanza, seguendo il percorso formativo online."] },
    ],
  },
  {
    slug: "eipass-standard",
    title: "EIPASS Standard",
    category: "informatica",
    image: image("eipass-standard"),
    summary: "Certificazione accreditata da Accredia secondo il DigComp 2.2, dal livello base al livello altamente specializzato.",
    intro: [
      "La certificazione EIPASS Standard è accreditata da Accredia secondo il Digital Competence Framework for Citizens – DigComp 2.2. È riconosciuta come standard di alfabetizzazione digitale, come definito nel CCNL del Comparto Istruzione e dalla Nota Congiunta n. 5 del 18 gennaio 2024. I candidati certificati sono inseriti in una banca dati pubblica di Accredia.",
    ],
    sections: [
      { title: "Esame progressivo", paragraphs: ["Il percorso prevede 7 moduli con domande di difficoltà crescente, dal livello base al livello altamente specializzato. Superando il 75% delle domande di un livello si accede al successivo; è possibile completare un modulo anche al livello base."] },
      { title: "Aree di competenza e certificato", paragraphs: ["La certificazione copre le 5 aree di competenza del DigComp 2.2 e comprende il certificato generale, con la media dei risultati, e lo Statement of Results, con il livello raggiunto in ciascuna area. Sul certificato sono presenti il logo di Accredia e il riferimento al DigComp 2.2."] },
      { title: "Cosa include", items: ["Attestato di certificazione EIPASS Standard", "Dispense informative", "Esercitazioni illimitate", "Assistenza via chat di EIPASS", "Messaggistica diretta con il formatore"], paragraphs: ["Il corso può essere seguito in modalità remota o in presenza."] },
    ],
  },
  {
    slug: "eipass-7-moduli-user",
    title: "EIPASS 7 Moduli User",
    category: "informatica",
    image: image("7modulia"),
    summary: "Certificazione internazionale di livello intermedio, in linea con e-CF e DigComp.",
    intro: [
      "La certificazione internazionale EIPASS 7 Moduli User è in linea con gli standard europei e-Competence Framework for ICT Users (e-CF) e DigComp. Riconosciuta dal Ministero dell’Istruzione, attesta competenze intermedie nell’utilizzo degli strumenti ICT ed è utile per l’acquisizione di punti nei contesti scolastico, universitario e concorsuale.",
    ],
    sections: [
      { title: "Cosa imparerai", items: [
        "Gestire l’hardware del computer, le reti e le connessioni internet.",
        "Organizzare file e cartelle; installare e disinstallare programmi.",
        "Usare email, servizi cloud e strumenti di collaborazione.",
        "Navigare sul web in sicurezza e gestire impostazioni, cronologia e preferiti.",
        "Proteggere account e dispositivi; usare backup e ripristino.",
        "Lavorare con software di produttività come Microsoft Office o LibreOffice.",
        "Cercare informazioni in modo efficiente con i motori di ricerca.",
      ] },
      { title: "Modalità", items: ["Online, da casa: esame online, attestato di frequenza (200 ore), videolezioni con sottotitoli, dispense ed esercitazioni illimitate.", "In sede, presso l’Ei-Center: esame in presenza, dispense ed esercitazioni illimitate, messaggistica diretta con il formatore."] },
    ],
  },
  {
    slug: "eipass-progressive",
    title: "EIPASS Progressive",
    category: "informatica",
    image: image("progressive"),
    summary: "Competenze avanzate in Word, Excel e PowerPoint e competenze intermedie in Access.",
    intro: [
      "La certificazione EIPASS Progressive attesta competenze avanzate nell’utilizzo di Microsoft Office 2019 (Word, Excel, PowerPoint) e competenze intermedie in Access. Segue e-CF e DigComp, con particolare riferimento all’area della creazione di contenuti, ed è riconosciuta dal Ministero dell’Istruzione per l’attribuzione di punteggi nei contesti scolastico, universitario e concorsuale.",
    ],
    sections: [
      { title: "Cosa imparerai", items: [
        "Word: formattazione avanzata, stili, riferimenti incrociati, stampa unione e funzioni automatiche.",
        "Excel: formattazione condizionale, grafici, tabelle pivot, funzioni avanzate, macro e protezione dei dati.",
        "PowerPoint: modelli e temi, contenuti multimediali, animazioni e strategie di presentazione.",
        "Access: progettazione di database, tabelle e query, maschere e report.",
      ] },
      { title: "Modalità", items: ["Online, da casa: esame online, attestato di frequenza (100 ore), videolezioni con sottotitoli, dispense ed esercitazioni illimitate.", "In sede, presso l’Ei-Center: esame in presenza, dispense ed esercitazioni illimitate, messaggistica diretta con il formatore."] },
    ],
  },
  {
    slug: "lim",
    title: "LIM – Utilizzo della LIM nella didattica",
    category: "informatica",
    image: image("lim"),
    summary: "Uso didattico della Lavagna Interattiva Multimediale, hardware e software.",
    intro: [
      "Il corso fornisce le competenze per utilizzare efficacemente la Lavagna Interattiva Multimediale (LIM) in ambito educativo, sia negli aspetti hardware sia in quelli software.",
    ],
    sections: [
      { title: "Programma", items: ["Componenti hardware e software del sistema LIM.", "Didattica innovativa con Open Board.", "Tecniche per integrare la LIM nelle attività quotidiane di insegnamento.", "La LIM per la didattica inclusiva, anche per studenti con bisogni educativi speciali."] },
      { title: "Destinatari", items: ["Insegnanti di ogni ordine e grado", "Formatori ed educatori", "Operatori della comunicazione"] },
      { title: "Test e certificazione", paragraphs: ["Il corso si conclude con un test online di 30 domande a risposta multipla (soglia di superamento 60%), ripetibile senza costi aggiuntivi. Al superamento viene rilasciato un certificato riconosciuto dal MIUR secondo la direttiva 170/2016, valido per l’aggiornamento delle graduatorie docenti."] },
    ],
  },
  {
    slug: "tablet",
    title: "Tablet – Uso didattico",
    category: "informatica",
    image: image("tablet"),
    summary: "Piena padronanza del tablet a fini didattici, con app e metodologie per la classe digitale.",
    intro: [
      "Il corso permette al docente di avere piena padronanza del tablet, conoscendone gli strumenti più utili a fini didattici e le app create appositamente per fare didattica. Integra l’uso dello strumento con aspetti metodologici e proposte concrete per la classe digitale.",
    ],
    sections: [{ title: "Punteggio", paragraphs: gpsScore }],
  },
  {
    slug: "coding",
    title: "Coding",
    category: "informatica",
    image: image("coding"),
    summary: "Programmazione informatica e pensiero computazionale per docenti e futuri docenti.",
    intro: [
      "Il corso fornisce a docenti e futuri docenti le basi della programmazione informatica e del pensiero computazionale, per facilitare negli alunni della scuola dell’infanzia e primaria l’apprendimento di processi logici volti alla risoluzione di problemi attraverso giochi interattivi. È riconosciuto dal MIUR.",
    ],
    sections: [{ title: "Punteggio", paragraphs: gpsScore }],
  },
  {
    slug: "pekit",
    title: "PEKIT Expert",
    category: "informatica",
    image: image("pekit"),
    summary: "Percorso graduale in 4 fasi, adatto a tutte le fasce d’età.",
    intro: [
      "La certificazione PEKIT Expert si basa su un approccio graduale delle competenze, articolato in 4 fasi corrispondenti ad altrettanti stadi di conoscenza. Per questo si rivolge a tutte le fasce di utenza, dai ragazzi della scuola primaria agli adulti e agli anziani.",
    ],
    sections: [
      { title: "Gli esami", paragraphs: ["Si consegue superando quattro esami, ciascuno di 36 quesiti da risolvere in massimo 45 minuti:"], items: ["Cominciare le operazioni", "Vivere in connessione", "Esperienza multimediale", "Diventare esperti"] },
      { title: "Punteggio", paragraphs: [...gpsScore, "Alla certificazione PEKIT è riconosciuto il punteggio massimo di 0,60 punti per i profili di assistenti amministrativi, assistenti tecnici, cuochi e infermieri, e di 0,30 punti per collaboratori scolastici, addetti alle aziende agrarie e guardarobieri."] },
    ],
  },
  {
    slug: "certificazioni-inglese",
    title: "Certificazioni di lingua inglese",
    category: "lingue",
    image: image("inglese"),
    summary: "Certificazioni dal livello A1 al C2, con esame online.",
    intro: [
      "Le certificazioni di lingua inglese sono rilasciate da enti di certificazione accreditati MIUR e coprono i sei livelli del Quadro comune europeo: A1, A2, B1, B2, C1 e C2. L’esame si svolge interamente online; l’attestato è spendibile per il punteggio in concorsi pubblici e graduatorie e come credito formativo scolastico e universitario.",
    ],
    sections: [
      { title: "I livelli", items: [
        "A1 – Livello base: comprende e usa espressioni di uso quotidiano e frasi basilari per soddisfare bisogni concreti.",
        "A2 – Livello elementare: comunica in attività semplici e di routine, descrive in termini semplici aspetti della propria vita.",
        "B1 – Livello di soglia: comprende i punti chiave di argomenti familiari e produce testi semplici su temi noti.",
        "B2 – Livello intermedio: comprende testi complessi e interagisce con scioltezza con i parlanti nativi.",
        "C1 – Livello di efficienza autonoma: si esprime con scioltezza e usa la lingua in modo flessibile per scopi sociali, professionali e accademici.",
        "C2 – Livello di padronanza: comprende con facilità quasi tutto ciò che ascolta e legge e si esprime con grande precisione.",
      ] },
      { title: "Riconoscimento", paragraphs: ["Il MIUR riconosce e valuta ai fini del punteggio solo i livelli B2, C1 e C2."] },
    ],
  },
  {
    slug: "dattilografia",
    title: "Dattilografia",
    category: "altre",
    image: image("dattilografia"),
    summary: "Scrittura veloce con dieci dita, senza guardare la tastiera.",
    intro: [
      "La dattilografia è un metodo di scrittura che permette di digitare un testo in breve tempo e con pochi errori. Il corso insegna a scrivere usando tutte e dieci le dita, senza guardare la tastiera, ed è rivolto a chiunque utilizzi il PC per lavoro o voglia migliorare la velocità di scrittura.",
    ],
    sections: [
      { title: "Valore del titolo", paragraphs: ["Il corso di dattilografia è valutato 1 punto nell’aggiornamento delle graduatorie ATA 2021 per il profilo di assistente amministrativo (è richiesto almeno il diploma di maturità), come da Decreto Ministeriale 640 del 30/08/2017, ed è richiesto in vari concorsi pubblici."] },
    ],
  },
];

export const coursePath = (slug: string) => `/corsi/${slug}`;
export const coursesIn = (category: CourseCategory) => courses.filter(course => course.category === category);
export const findCourse = (slug: string) => courses.find(course => course.slug === slug);
