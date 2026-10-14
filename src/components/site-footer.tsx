import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gicoContact } from "@/lib/gico-contact";
import { originalPage, trainingLinks } from "@/lib/navigation";
import { BackToTop } from "./back-to-top";
import { ScrollReveal } from "./scroll-reveal";
import "./site-footer.css";

const activities = [
  ...trainingLinks,
  { label: "Servizi Centro Sociale", href: originalPage("/servizi-centro-sociale/") },
  { label: "Par Gol", href: originalPage("/par-gol/") },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href="/" className="footer-brand" aria-label="GiCo — Home"><Image src="/images/logo-gico-coop.png" alt="GiCo Cooperativa Sociale" width={140} height={82} /></a>
        <ScrollReveal>
          <div className="footer-grid">
            <div className="footer-about" data-reveal>
              <h2>Chi siamo</h2>
              <p>{gicoContact.about}</p>
              <ul className="footer-socials" aria-label="Profili social GiCo">
                {gicoContact.socialProfiles.map(profile => (
                  <li key={profile.href}><a href={profile.href} target="_blank" rel="noopener noreferrer" aria-label={`${profile.platform} GiCo ${profile.area}`} title={`${profile.platform} · ${profile.area}`}><Image src={`/images/${profile.platform === "Instagram" ? "instagram" : "facebook"}-gico.webp`} alt="" width={24} height={24} /></a></li>
                ))}
              </ul>
            </div>
            <nav className="footer-activities" aria-labelledby="footer-activities-title" data-reveal data-reveal-delay="90">
              <h2 id="footer-activities-title">Attività</h2>
              <ul>{activities.map(activity => <li key={activity.href}><a href={activity.href}><span>{activity.label}</span><ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" /></a></li>)}</ul>
            </nav>
            <div className="footer-contact" data-reveal data-reveal-delay="180">
              <h2>Contatti</h2>
              <address><p><strong>Sede Legale e Operativa</strong><br />{gicoContact.street}<br />{gicoContact.city}</p>
                <dl>
                  <div><dt>Telefono/Fax:</dt><dd><a href={gicoContact.phoneHref}>{gicoContact.phone}</a></dd></div>
                  <div><dt>Whatsapp:</dt><dd><a href={gicoContact.whatsappHref} target="_blank" rel="noopener noreferrer">{gicoContact.whatsapp}</a></dd></div>
                  <div className="footer-email-row"><dt>Email:</dt><dd><a href={`mailto:${gicoContact.email}`}>{gicoContact.email}</a><span> – </span><a href={`mailto:${gicoContact.trainingEmail}`}>{gicoContact.trainingEmail}</a></dd></div>
                  <div><dt>PEC:</dt><dd><a href={`mailto:${gicoContact.pec}`}>{gicoContact.pec}</a></dd></div>
                </dl>
              </address>
            </div>
          </div>
        </ScrollReveal>
        <div className="footer-bottom"><p>{gicoContact.name}</p><BackToTop /><nav aria-label="Collegamenti legali e notizie"><a href={originalPage("/news/")}>News</a><a href={originalPage("/privacy-policy/")}>Privacy Policy</a></nav></div>
      </div>
    </footer>
  );
}
