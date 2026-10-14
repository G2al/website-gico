import type { Metadata } from "next";
import { InstitutionalPage, InstitutionalPrinciples, InstitutionalStory } from "@/components/institutional-page";
import { socialValues } from "@/lib/institutional-content";

export const metadata: Metadata = {
  title: "Centro Sociale Polifunzionale | GiCo",
  description: "Il Centro Sociale Polifunzionale per Disabili Le Perle Preziose: accoglienza, inclusione e assistenza a Trentola Ducenta. Scopri valori, struttura e servizi.",
};

export default function SocialCentrePage() {
  return <InstitutionalPage title="Centro Sociale Polifunzionale" path="/centro-sociale-polifunzionale" sections={[{ id: "il-centro", label: "Il nostro centro" }, { id: "valori", label: "I nostri valori" }, { id: "struttura", label: "Struttura e servizi" }]}>
    <InstitutionalStory id="il-centro" title="Il Nostro Centro Sociale Polifunzionale per Disabili “Le Perle Preziose”" paragraphs={[
      "Situato all’interno del complesso della Piccola Casa della Divina Provvidenza – Cottolengo di Trentola Ducenta, il nostro Centro Sociale Polifunzionale per Disabili “Le Perle Preziose” nasce nel 2013 e si distingue fin da subito per la sua autonomia e specializzazione nel fornire accoglienza e assistenza. Con una struttura moderna e spazi studiati per favorire l’inclusione e l’attività comunitaria, offriamo un ambiente accogliente e attrezzato per soddisfare le diverse esigenze dei nostri ospiti.",
    ]} image={{ src: "/images/pagina-il-centro-sociale.webp", alt: "Giardino e ingresso del Centro Sociale Polifunzionale Le Perle Preziose" }} />
    <InstitutionalPrinciples id="valori" title="I Nostri Valori" items={socialValues} />
    <InstitutionalStory id="struttura" title="Struttura e Servizi" paragraphs={[
      "Il nostro centro dispone di ampie aree per attività di gruppo, spazi per il relax e l’intrattenimento e un angolo bar. Gli ambienti sono progettati per garantire accessibilità e comfort, con particolare attenzione alle necessità dei disabili. Inoltre, il nostro centro si avvale di un ufficio accettazione, la direzione, un ufficio relazioni con il pubblico, servizi amministrativi e laboratori specializzati.",
    ]} image={{ src: "/images/pagina-centro-2.webp", alt: "Un lavoro condiviso al Centro Sociale per la Giornata mondiale sulla consapevolezza dell’autismo" }} reverse dark />
  </InstitutionalPage>;
}
