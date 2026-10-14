// Built pages stay local; other destinations use the original site until rebuilt.
const localPages = new Set([
  "/gico/", "/centro-sociale-polifunzionale/", "/centro-di-formazione/", "/autorizzazioni-e-certificazioni/", "/bilancio-sociale/",
  "/area-attivita/formazione-universitaria/", "/area-attivita/corsi-di-formazione-professionale/",
  "/area-attivita/certificazioni-informatiche/", "/area-attivita/certificazioni-linguistiche/",
  "/servizi-centro-sociale/", "/gallery/",
  "/par-gol/", "/news/", "/contatti-cooperativa/",
]);
export const originalPage = (path: string) => localPages.has(path) ? path.replace(/\/$/, "") : `https://www.gicocoop.it${path}`;

export const trainingLinks = [
  { label: "Formazione Universitaria", href: originalPage("/area-attivita/formazione-universitaria/") },
  { label: "Formazione Professionale", href: originalPage("/area-attivita/corsi-di-formazione-professionale/") },
  { label: "Certificazioni Informatiche", href: originalPage("/area-attivita/certificazioni-informatiche/") },
  { label: "Certificazioni Linguistiche", href: originalPage("/area-attivita/certificazioni-linguistiche/") },
] as const;

export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Chi siamo",
    children: [
      { label: "GiCo", href: originalPage("/gico/") },
      { label: "Centro Sociale Polifunzionale", href: originalPage("/centro-sociale-polifunzionale/") },
      { label: "Centro di Formazione", href: originalPage("/centro-di-formazione/") },
      { label: "Autorizzazioni e Certificazioni", href: originalPage("/autorizzazioni-e-certificazioni/") },
      { label: "Bilancio Sociale", href: originalPage("/bilancio-sociale/") },
    ],
  },
  {
    label: "Centro di Formazione",
    children: trainingLinks,
  },
  {
    label: "Centro Sociale",
    children: [
      { label: "Servizi", href: originalPage("/servizi-centro-sociale/") },
      { label: "Gallery", href: originalPage("/gallery/") },
    ],
  },
  { label: "PAR GOL", href: originalPage("/par-gol/") },
  { label: "News", href: originalPage("/news/") },
  { label: "Contatti", href: originalPage("/contatti-cooperativa/") },
];
