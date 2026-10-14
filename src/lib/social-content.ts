// Testi e fotografie: https://www.gicocoop.it/servizi-centro-sociale/
export const socialServices = [
  { id: "creativita", title: "Creatività e Manualità", image: "/images/servizi-centro-sociale-1.webp", alt: "Pennelli e colori per le attività di pittura", activities: [
    { title: "Laboratorio Informatico", description: "Apprendimento e pratica delle competenze digitali." },
    { title: "Pittura e Disegno", description: "Espressione artistica attraverso tecniche diverse." },
    { title: "Maglia, Ferri ed Uncinetto", description: "Sviluppo della manualità fine e realizzazione di progetti tessili." },
    { title: "Riciclo Creativo", description: "Utilizzo di materiali riciclati per nuove creazioni." },
  ] },
  { id: "educazione", title: "Educazione e Crescita Personale", image: "/images/servizi-centro-sociale-2.webp", alt: "Una creazione con materiali naturali al Centro Sociale", activities: [
    { title: "Educazione Stradale", description: "Apprendimento delle regole per una maggiore sicurezza." },
    { title: "Educazione Ambientale", description: "Sensibilizzazione sul rispetto e la cura dell’ambiente." },
    { title: "Gestione dei Rifiuti", description: "Formazione sulla differenziazione e sul riciclo dei rifiuti." },
  ] },
  { id: "benessere", title: "Benessere e Movimento", image: "/images/servizi-centro-sociale-3.webp", alt: "Un’attività con un gioco a incastri colorato", activities: [
    { title: "Ginnastica Dolce", description: "Attività fisica adatta a tutti per mantenere la forma." },
    { title: "Teatro", description: "Spazio per l’espressione e la creatività attraverso la recitazione." },
    { title: "Musicoterapia", description: "Utilizzo della musica per il benessere psicofisico." },
    { title: "Training Cognitivi", description: "Esercizi per mantenere la mente attiva e reattiva." },
  ] },
  { id: "socializzazione", title: "Socializzazione e Divertimento", image: "/images/servizi-centro-sociale-4.webp", alt: "Un cartellone condiviso: Tutti diversi, tutti uguali e speciali", activities: [
    { title: "Lettura e Conversazione", description: "Condivisione di letture e discussioni su giornali online." },
    { title: "Giardinaggio", description: "Coltivare la terra e prendersi cura delle piante." },
    { title: "Festività e Ricorrenze", description: "Celebrare insieme momenti speciali." },
    { title: "Passeggiate e Attività all’Aperto", description: "Connessione con la natura e attività motorie leggere." },
    { title: "Canto e Ballo", description: "Espressione attraverso la musica e il movimento." },
    { title: "Giochi di Società", description: "Momenti ludici per stimolare la mente e favorire l’interazione." },
  ] },
] as const;

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
