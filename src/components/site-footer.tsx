import Image from "next/image";
import Link from "next/link";
import { gicoContact } from "@/lib/gico-contact";
import { originalPage, trainingLinks } from "@/lib/navigation";
import { BackToTop } from "./back-to-top";
import "./site-footer.css";

const socialLinks = [
  { label: "Il Centro", href: originalPage("/centro-sociale-polifunzionale/") },
  { label: "Laboratori e attività", href: originalPage("/servizi-centro-sociale/") },
  { label: "Gallery", href: originalPage("/gallery/") },
];
const institutionalLinks = [
  { label: "La nostra storia", href: originalPage("/gico/") },
  { label: "Autorizzazioni e Certificazioni", href: originalPage("/autorizzazioni-e-certificazioni/") },
  { label: "Bilancio Sociale", href: originalPage("/bilancio-sociale/") },
  { label: "PAR GOL", href: originalPage("/par-gol/") },
  { label: "News", href: originalPage("/news/") },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-about">
          <Link href="/" className="footer-brand" aria-label="GiCo — Home"><Image src="/images/logo-gico-coop.png" alt="GiCo Cooperativa Sociale" width={140} height={71} /></Link>
          <p>{gicoContact.about}</p>
          <ul className="footer-socials" aria-label="Profili social GiCo">
            {gicoContact.socialProfiles.map(profile => (
              <li key={profile.href}><a href={profile.href} target="_blank" rel="noopener noreferrer" aria-label={`${profile.platform} GiCo ${profile.area} (si apre in una nuova scheda)`}><Image src={`/images/${profile.platform === "Instagram" ? "instagram" : "facebook"}-gico.webp`} alt="" width={20} height={20} /><span aria-hidden="true">{profile.area}</span></a></li>
            ))}
          </ul>
        </div>
        <nav aria-labelledby="footer-social-title">
          <h2 id="footer-social-title">Le Perle Preziose</h2>
          <ul>{socialLinks.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
          <h2 id="footer-gico-title" className="footer-subtitle">GiCo</h2>
          <ul aria-labelledby="footer-gico-title">{institutionalLinks.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
        </nav>
        <nav aria-labelledby="footer-training-title">
          <h2 id="footer-training-title">Edoardo Apicella</h2>
          <ul>
            <li><a href={originalPage("/centro-di-formazione/")}>Il Centro di Formazione</a></li>
            {trainingLinks.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
            <li><a href={originalPage("/richiedi-informazioni/")}>Richiedi informazioni</a></li>
          </ul>
        </nav>
        <div className="footer-contact">
          <h2>Contatti</h2>
          <address>
            <p><strong>Sede legale e operativa</strong><br />{gicoContact.street}<br />{gicoContact.postalCode} {gicoContact.city}</p>
            <dl>
              <div><dt>Telefono/Fax</dt><dd><a href={gicoContact.phoneHref}>{gicoContact.phone}</a></dd></div>
              <div><dt>WhatsApp</dt><dd><a href={gicoContact.whatsappHref} target="_blank" rel="noopener noreferrer">{gicoContact.whatsapp}</a></dd></div>
              <div><dt>Email</dt><dd><a href={`mailto:${gicoContact.email}`}>{gicoContact.email}</a></dd></div>
              <div><dt>Formazione</dt><dd><a href={`mailto:${gicoContact.trainingEmail}`}>{gicoContact.trainingEmail}</a></dd></div>
              <div><dt>PEC</dt><dd><a href={`mailto:${gicoContact.pec}`}>{gicoContact.pec}</a></dd></div>
            </dl>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="wrap footer-bottom-inner">
          <p>{gicoContact.name}</p>
          <nav aria-label="Collegamenti legali"><a href={originalPage("/privacy-policy/")}>Privacy Policy</a><a href={originalPage("/contatti-cooperativa/")}>Contatti</a></nav>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
