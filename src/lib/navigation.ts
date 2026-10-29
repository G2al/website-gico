import { BadgeCheck, BookOpen, Briefcase, FileText, GraduationCap, HandHeart, HeartHandshake, House, Images, Languages, Monitor, type LucideIcon } from "lucide-react";

// Built pages stay local; other destinations use the original site until rebuilt.
const localPages = new Set([
  "/gico/", "/centro-sociale-polifunzionale/", "/centro-di-formazione/", "/autorizzazioni-e-certificazioni/", "/bilancio-sociale/",
  "/area-attivita/formazione-universitaria/", "/area-attivita/corsi-di-formazione-professionale/",
  "/area-attivita/certificazioni-informatiche/", "/area-attivita/certificazioni-linguistiche/", "/area-attivita/altre-attivita-formative/",
  "/servizi-centro-sociale/", "/gallery/", "/richiedi-informazioni/",
  "/par-gol/", "/news/", "/contatti-cooperativa/",
]);
export const originalPage = (path: string) => localPages.has(path) || path.startsWith("/corsi/") ? path.replace(/\/$/, "") : `https://www.gicocoop.it${path}`;

export const trainingLinks = [
  { label: "Formazione Professionale", href: originalPage("/area-attivita/corsi-di-formazione-professionale/") },
  { label: "Formazione Universitaria e Post-universitaria", href: originalPage("/area-attivita/formazione-universitaria/") },
  { label: "Certificazioni Informatiche", href: originalPage("/area-attivita/certificazioni-informatiche/") },
  { label: "Lingue e Scuola di Inglese", href: originalPage("/area-attivita/certificazioni-linguistiche/") },
  { label: "Altre Attività Formative", href: originalPage("/area-attivita/altre-attivita-formative/") },
] as const;

export type NavigationChild = { label: string; href: string; description: string; icon: LucideIcon };
export type NavigationItem =
  | { label: string; href: string; children?: undefined }
  | {
    label: string;
    href?: undefined;
    children: NavigationChild[];
    // Feature card shown inside the desktop mega menu.
    feature: { title: string; description: string; image: string; href: string; cta: string };
  };

const trainingDetails = [
  { description: "Corsi finanziati e autofinanziati, qualifiche regionali", icon: Briefcase },
  { description: "Lauree, master, alta formazione, scuola e PA", icon: GraduationCap },
  { description: "CERTIPASS, PEKIT, EQIA e ISORS", icon: Monitor },
  { description: "Test centre British Institutes e corsi Cambridge", icon: Languages },
  { description: "Dattilografia, alimentaristi, sicurezza sul lavoro", icon: BookOpen },
];

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Centro Sociale",
    feature: {
      title: "Le Perle Preziose",
      description: "Centro Sociale Polifunzionale per Disabili, dal 2013 nel complesso del Cottolengo di Trentola Ducenta.",
      image: "/images/centro-sociale-esterno.webp",
      href: originalPage("/centro-sociale-polifunzionale/"),
      cta: "Scopri il Centro",
    },
    children: [
      { label: "Il Centro", href: originalPage("/centro-sociale-polifunzionale/"), description: "Presentazione, spazi e autorizzazioni", icon: House },
      { label: "Laboratori e attività", href: originalPage("/servizi-centro-sociale/"), description: "Creatività, autonomie, benessere e territorio", icon: HandHeart },
      { label: "Gallery", href: originalPage("/gallery/"), description: "La vita del Centro in fotografia", icon: Images },
    ],
  },
  {
    label: "Centro di Formazione",
    feature: {
      title: "Edoardo Apicella",
      description: "Centro Studi, Orientamento e Formazione Professionale, accreditato dalla Regione Campania.",
      image: "/images/pagina-centro-di-formazione-1.webp",
      href: originalPage("/centro-di-formazione/"),
      cta: "Scopri il Centro",
    },
    children: trainingLinks.map((link, index) => ({ ...link, ...trainingDetails[index] })),
  },
  {
    label: "Chi siamo",
    feature: {
      title: "GiCo, dal 2002",
      description: "Due realtà, una stessa missione: la centralità della persona.",
      image: "/images/gico-chi-siamo.webp",
      href: originalPage("/gico/"),
      cta: "La nostra storia",
    },
    children: [
      { label: "La nostra storia", href: originalPage("/gico/"), description: "Identità, valori e tappe principali", icon: HeartHandshake },
      { label: "Autorizzazioni e Certificazioni", href: originalPage("/autorizzazioni-e-certificazioni/"), description: "Accreditamenti, centri autorizzati e certificati", icon: BadgeCheck },
      { label: "Bilancio Sociale", href: originalPage("/bilancio-sociale/"), description: "I documenti di rendicontazione sociale", icon: FileText },
    ],
  },
  { label: "PAR GOL", href: originalPage("/par-gol/") },
  { label: "News", href: originalPage("/news/") },
  { label: "Contatti", href: originalPage("/contatti-cooperativa/") },
];
