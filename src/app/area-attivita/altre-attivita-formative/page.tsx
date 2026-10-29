import type { Metadata } from "next";
import { HardHat, Keyboard, Utensils } from "lucide-react";
import { InstitutionalPage } from "@/components/institutional-page";
import { coursePath } from "@/lib/courses";
import { originalPage } from "@/lib/navigation";
import "@/components/training-pages.css";

export const metadata: Metadata = {
  title: "Altre Attività Formative | GiCo – Centro Edoardo Apicella",
  description: "Corsi di dattilografia, attestati per alimentaristi di livello 1, 2 e 3 e formazione su salute e sicurezza nei luoghi di lavoro per lavoratori, imprese e organizzazioni.",
};

const activities = [
  { icon: Keyboard, title: "Dattilografia", text: "Corsi finalizzati al conseguimento di attestati di dattilografia.", link: { label: "Scheda del corso", href: coursePath("dattilografia") } },
  { icon: Utensils, title: "Alimentaristi", text: "Percorsi per il conseguimento degli attestati per alimentaristi di livello 1, 2 e 3.", link: { label: "Richiedi informazioni", href: originalPage("/richiedi-informazioni/") } },
  { icon: HardHat, title: "Formazione per lavoratori e organizzazioni", text: "Progettiamo percorsi di formazione e aggiornamento per lavoratori, imprese e organizzazioni, con particolare attenzione alla salute e sicurezza nei luoghi di lavoro, alla prevenzione e alla gestione delle emergenze.", link: { label: "Richiedi informazioni", href: originalPage("/richiedi-informazioni/") } },
];

export default function OtherTrainingPage() {
  return <InstitutionalPage
    title="Altre Attività Formative"
    overline="Centro Studi, Orientamento e Formazione Professionale “Edoardo Apicella”"
    intro="Attestati e percorsi di aggiornamento per chi lavora o cerca lavoro, per imprese e organizzazioni."
    path="/area-attivita/altre-attivita-formative"
    parent={{ label: "Centro di Formazione", href: "/centro-di-formazione" }}
  >
    <section className="section" aria-label="Attività formative">
      <div className="wrap">
        <ul className="offer-grid">
          {activities.map(({ icon: Icon, ...activity }, index) => (
            <li key={activity.title} data-reveal data-reveal-delay={index * 60}>
              <div className="card is-accent">
                <span className="offer-icon" aria-hidden="true"><Icon size={22} strokeWidth={1.7} /></span>
                <h2 className="offer-title">{activity.title}</h2>
                <p>{activity.text}</p>
                <a className="text-link" href={activity.link.href}>{activity.link.label}</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </InstitutionalPage>;
}
