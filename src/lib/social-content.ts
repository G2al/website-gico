// Le 17 immagini, nello stesso ordine della griglia originale /gallery/.
const galleryDescriptions = [
  "Un tiro a canestro negli spazi esterni del Centro Sociale",
  "Il giardino e la struttura, decorati con bandierine colorate",
  "Un momento condiviso all’aperto con un’operatrice",
  "Un sorriso durante le attività del Centro Sociale",
  "Un momento di vicinanza tra un’operatrice e un’ospite",
  "Un gioco con birilli colorati nel cortile",
  "Un gesto di affetto durante una giornata al Centro Sociale",
  "I banchi e le sedie di un’aula del centro",
  "Un cartellone con le fotografie delle esperienze condivise",
  "Una passeggiata con un cane nel cortile del centro",
  "Sorrisi e compagnia durante le attività all’aperto",
  "Due partecipanti insieme a un cane nel giardino",
  "Un incontro con un cane negli spazi esterni",
  "Una fotografia di gruppo insieme a un’operatrice",
  "Un’attività al computer nel Centro Sociale",
  "Un sorriso durante un momento di incontro",
  "La palma, il prato e gli spazi esterni del Centro Sociale",
];

export const socialGallery = galleryDescriptions.map((alt, index) => ({
  src: `/images/gallery-centro-sociale-${String(index + 1).padStart(2, "0")}.webp`,
  alt,
  width: 1000,
  height: index === 6 ? 623 : index === 12 ? 790 : 666,
  source: `https://www.gicocoop.it/wp-content/uploads/2024/04/${index + 1}.jpg`,
}));
