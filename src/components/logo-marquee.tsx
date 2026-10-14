import Image from "next/image";
import "./logo-marquee.css";

const logos = [
  {
    "src": "/images/-cKf2-XrtkJD9Atg9ol5L7-MElCz7Gcy-CQ2-3wkP5eO82inRI1ABCyqjaVP8mokMfdbdTz_E1wOeHxGhl05wrTTpxAKnqZSt0iJ-wZJilDnpth9aCr7XmZAzw7Bu6D7aizVelLBbQC3fqsXsgtVonbJp1jB7fqdrh34WgCQEAi_YsA3kGl_n69Dw_QaBqet.jpeg",
    "alt": "Italia Domani — Piano Nazionale di Ripresa e Resilienza"
  },
  {
    "src": "/images/1Hsy7h2u5tk0fL_-iw3aixbrALPUQHj6h7oXJw25Y_brt2ZAQOO7ykjfU3Gwz0lckXD641hjIFWaEgCHSsubGOvXW9PjI2k2ogBUXWkRLrKjivjsPmEEOnbBGtK4LeWCk0r1bEE7bMuaMth_sAuJah4Ln8qmBGC9IGiuNALtzc4IxiToEdq2IOA2n0b9HrFA.jpeg",
    "alt": "EIPASS — European Informatics Passport"
  },
  {
    "src": "/images/8eYugE9vpsQckh-GgxQL-YkkNrnZW4M-nuybblIp3WayWEFrAT13QycW0Oo48zkP3l-mCp8hzWXNEDHolYxTVgF7w8sX1rbTCWSYhT-nvs2fl4ngtvErUVZlgJ9EqFom2TrKY7oNNYunfNyTUWi16CjaRfqWsWqnxMsD3RZ9so3YWMt4qSCE9ACJTnK-edr2.jpeg",
    "alt": "PEKIT"
  },
  {
    "src": "/images/S0qjcVpbf4JsjfMXJNxPZGzqDkQIp4wn1UeC_uTeUuXpAMYhDv3tkZxFUh2O6LsaA2qDiwYosKVvNBblWxa4knkO4iyh5hccjuXhMIJBwPtMCzSCW8zkcUTNav3o7jv1gpo8QlpR5d9Cu2lBlrY9Z9tUrhYsPuQIP-FUTbVjJ6TNycr4_gITCtY9TcyTUz5A.jpeg",
    "alt": "Unione europea — NextGenerationEU"
  },
  {
    "src": "/images/Ug_nFvPLYkzYuzr6A_juLdYq3vRqw0AYY5awjeaEgVFRVHmwc_802XSaLRGAsWgzxnFQ_aY1BjTJZAoGWQiqWGSu93X5SvXOgRTvVByh0Qktf5v2RMOe0tiWoVupDC-uhhX2FiNpaHRtmymjQ0X4nY4MFnc9mOP9H3W9o8d3syduDXiX_Ge5XUS3byyc7UyC.jpeg",
    "alt": "GOL — Garanzia Occupabilità Lavoratori"
  },
  {
    "src": "/images/ZEpmhyD7R2jF1lyitUUPgATwxUugQfhFBOc3gxMlCrFwIcr18bFrVPINDyaRhY9KSlq3zDgAd1TFn4QMiPoiRyp4toRxUeOnWb0je_G4JUgeyzaYOPDshBxufpKbt74ao2Zv07xfwqV5XUBi1TK0dg-XjQSa0ehDBy4tLCGoZM4EfLGf-6J-bERwZaIVcLf0.jpeg",
    "alt": "Regione Campania"
  }
];

export function LogoMarquee() {
  return (
    <section className="logo-marquee" aria-labelledby="logo-marquee-title">
      <div className="logo-marquee-heading">
        <h2 id="logo-marquee-title">Formazione, certificazioni e programmi</h2>
      </div>
      <div className="logo-marquee-window">
        <div className="logo-marquee-track">
          {[false, true].map((duplicate) => (
            <ul className="logo-marquee-group" key={String(duplicate)} aria-hidden={duplicate || undefined}>
              {logos.map((logo) => (
                <li className="logo-marquee-item" key={logo.src}>
                  <Image src={logo.src} alt={duplicate ? "" : logo.alt} fill sizes="(max-width: 600px) 140px, 170px" loading="eager" className="logo-marquee-image" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
