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
