import { originalPage } from "./navigation";

// Original GiCo articles. Static today, ready for a future content source.
export const newsArticles = [
  {
    id: "energia-positiva",
    title: "Qui si schizza, si ride e si fa il pieno di energia positiva 💦💕",
    date: "2026-07-29",
    day: "29",
    dateLabel: "29 luglio 2026",
    image: "/images/news-29-luglio-2026.webp",
    alt: "Un gruppo di ospiti GiCo insieme in piscina durante le attività estive",
    href: originalPage("/qui-si-schizza-si-ride-e-si-fa-il-pieno-di-energia-positiva-%f0%9f%92%a6%f0%9f%92%95/"),
  },
  {
    id: "acqua-sole-allegria",
    title: "Acqua, sole e tanta allegria! Le attività in piscina continuano a regalare momenti indimenticabili ai nostri ospiti. Guardate che spettacolo! 🏊‍♂️✨💦",
    date: "2026-07-22",
    day: "22",
    dateLabel: "22 luglio 2026",
    image: "/images/news-22-luglio-2026.webp",
    alt: "Un momento di allegria condivisa durante le attività in piscina di GiCo",
    href: originalPage("/acqua-sole-e-tanta-allegria-le-attivita-in-piscina-continuano-a-regalare-momenti-indimenticabili-ai-nostri-ospiti-guardate-che-spettacolo-%f0%9f%8f%8a%e2%99%82%ef%b8%8f%e2%9c%a8/"),
  },
  {
    id: "estate-gico",
    title: "🌷🌸🌊⛱️",
    date: "2026-07-15",
    day: "15",
    dateLabel: "15 luglio 2026",
    image: "/images/news-15-luglio-2026.webp",
    alt: "Un'ospite GiCo sorridente con una coroncina di fiori rosa vicino alla piscina",
    href: originalPage("/%f0%9f%8c%b7%f0%9f%8c%b8%f0%9f%8c%8a%e2%9b%b1%ef%b8%8f/"),
  },
] as const;
