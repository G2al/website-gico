import type { Metadata } from "next";
import { InstitutionalPage, DocumentCards } from "@/components/institutional-page";
import { certificates } from "@/lib/institutional-content";

export const metadata: Metadata = {
  title: "Autorizzazioni e Certificazioni | GiCo",
  description: "Autorizzazioni e accreditamenti GiCo per il Centro Sociale Le Perle Preziose e il Centro di Formazione. Consulta e scarica i certificati pubblicati.",
};

const accreditations = [
  "ECP (E-learning Center Point) dal 09/06/2014 per l’Università Telematica Pegaso",
  "EiPoint dal 05/03/2021 per l’Universitas Mercatorum – Università degli Studi delle Camere di Commercio",
  "E-learning Point dal 20/09/2022 per l’Università Telematica San Raffaele – UniRoma5",
  "Ei-center Business dal 10/03/2015 per il rilascio di corsi CERTIPASS e certificazioni EIPASS",
  "PEKIT Center – Fond. Sviluppo Europa dal 27/03/2021 per il rilascio delle certificazioni informatiche PEKIT",
];

export default function AuthorizationsPage() {
  return <InstitutionalPage title="Autorizzazioni e Certificazioni" path="/autorizzazioni-e-certificazioni" sections={[{ id: "autorizzazioni", label: "Autorizzazioni" }, { id: "accreditamenti", label: "Accreditamenti" }, { id: "certificazioni", label: "Certificazioni" }]}>
    <div className="institutional-authorizations institutional-width">
      <section id="autorizzazioni" className="institutional-authorization" aria-labelledby="social-authorization-title" data-reveal>
        <p className="institutional-eyebrow">GiCo</p><h2 id="social-authorization-title">Centro Sociale Polifunzionale per Disabili “Le Perle Preziose”</h2>
        <p>(Autorizzazione Ufficio di Piano, prot. n. 506-06/06/2013 Cogestore PTRI/BdSD e liberazione n. 587 del 04/05/2018)</p>
      </section>
      <section id="accreditamenti" className="institutional-authorization" aria-labelledby="training-authorization-title" data-reveal data-reveal-delay="90">
        <p className="institutional-eyebrow">GiCo</p><h2 id="training-authorization-title">Centro Studi Autorizzazione Formazione Professionale</h2>
        <p>Esito finale domanda di accreditamento ai sensi del D.G.R. 226/06, pubblicata sul B.U.R.C. n.16 del 3 Aprile 2006, art. 16.</p>
        <p className="institutional-organism">Codice Organismo: <strong>292/01/05</strong></p>
        <ul className="institutional-accreditations">{accreditations.map(accreditation => <li key={accreditation}>{accreditation}</li>)}</ul>
      </section>
    </div>
    <section id="certificazioni" className="institutional-certificate-section institutional-width" aria-labelledby="certifications-title">
      <div className="institutional-section-heading" data-reveal><p className="institutional-eyebrow">GiCo</p><h2 id="certifications-title">Certificazioni</h2></div>
      <DocumentCards documents={certificates} />
    </section>
  </InstitutionalPage>;
}
