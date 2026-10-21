import { BadgeCheck, Briefcase, FileText, GraduationCap, HandHeart, HeartHandshake, House, Images, Languages, Monitor, type LucideIcon } from "lucide-react";

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

export type NavigationChild = { label: string; href: string; description: string; icon: LucideIcon };
export type NavigationItem =
  | { label: string; href: string; children?: undefined }
  | {
    label: string;
    href?: undefined;
    children: NavigationChild[];
    // Feature card shown inside the desktop mega menu.
    feature: { title: string; description: string; image: string; alt: string; href: string; cta: string };
  };

const trainingDescriptions = [
  { description: "Orientamento e supporto nel percorso accademico", icon: GraduationCap },
  { description: "Percorsi e qualifiche per il mondo del lavoro", icon: Briefcase },
  { description: "Certificazioni digitali EIPASS e PEKIT", icon: Monitor },
  { description: "Certificazioni di inglese e tedesco", icon: Languages },
];

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Chi siamo",
    feature: {
      title: "Una cooperativa che mette al centro le persone",
      description: "Accoglienza, inclusione e formazione nel complesso del Cottolengo di Trentola Ducenta.",
      image: "/images/gico-chi-siamo.webp",
      alt: "",
      href: originalPage("/gico/"),
      cta: "Scopri GiCo",
    },
    children: [
      { label: "GiCo", href: originalPage("/gico/"), description: "La nostra storia, la missione e i valori", icon: HeartHandshake },
      { label: "Centro Sociale Polifunzionale", href: originalPage("/centro-sociale-polifunzionale/"), description: "Le Perle Preziose, accoglienza e assistenza", icon: House },
      { label: "Centro di Formazione", href: originalPage("/centro-di-formazione/"), description: "Il centro studi Edoardo Apicella", icon: GraduationCap },
      { label: "Autorizzazioni e Certificazioni", href: originalPage("/autorizzazioni-e-certificazioni/"), description: "Autorizzazioni, accreditamenti e certificati", icon: BadgeCheck },
      { label: "Bilancio Sociale", href: originalPage("/bilancio-sociale/"), description: "I documenti di rendicontazione sociale", icon: FileText },
    ],
  },
  {
    label: "Centro di Formazione",
    feature: {
      title: "Centro di Formazione Edoardo Apicella",
      description: "Percorsi di studio, formazione e certificazione per accompagnare la tua crescita.",
      image: "/images/pagina-centro-di-formazione-1.webp",
      alt: "",
      href: originalPage("/centro-di-formazione/"),
      cta: "Scopri il centro",
    },
    children: trainingLinks.map((link, index) => ({ ...link, ...trainingDescriptions[index] })),
  },
  {
    label: "Centro Sociale",
    feature: {
      title: "Le Perle Preziose",
      description: "Un luogo dove accoglienza, cura e vita condivisa si incontrano.",
      image: "/images/centro-sociale-esterno.webp",
      alt: "",
      href: originalPage("/centro-sociale-polifunzionale/"),
      cta: "Scopri il centro",
    },
    children: [
      { label: "Servizi", href: originalPage("/servizi-centro-sociale/"), description: "Attività, laboratori e assistenza", icon: HandHeart },
      { label: "Gallery", href: originalPage("/gallery/"), description: "Momenti di vita al centro", icon: Images },
    ],
  },
  { label: "PAR GOL", href: originalPage("/par-gol/") },
  { label: "News", href: originalPage("/news/") },
  { label: "Contatti", href: originalPage("/contatti-cooperativa/") },
];
