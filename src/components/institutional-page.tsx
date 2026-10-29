import Image from "next/image";
import Link from "next/link";
import { Download, FileText } from "lucide-react";
import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { ContactBar } from "./contact-bar";
import { ScrollReveal } from "./scroll-reveal";
import "./institutional-page.css";

type SectionLink = { id: string; label: string };

export function InstitutionalPage({ title, path, sections = [], children, intro, overline, parent = { label: "Chi siamo", href: "/gico" }, showContactBar = true }: {
  title: string;
  path: string;
  sections?: readonly SectionLink[];
  children: ReactNode;
  intro?: string;
  overline?: string;
  parent?: { label: string; href: string } | null;
  showContactBar?: boolean;
}) {
  return (
    <div className="site-shell institutional-page">
      <a className="skip-link" href="#contenuto">Vai al contenuto</a>
      <SiteHeader activePath={path} />
      <main id="contenuto">
        <header className="page-header">
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Percorso di navigazione">
              <ol>
                <li><Link href="/">Home</Link></li>
                {parent && <li><a href={parent.href}>{parent.label}</a></li>}
                <li><span aria-current="page">{title}</span></li>
              </ol>
            </nav>
            {overline && <p className="kicker">{overline}</p>}
            <h1>{title}</h1>
            {intro && <p className="lead">{intro}</p>}
            {sections.length > 1 && (
              <nav className="page-index" aria-label="In questa pagina">
                <ul>{sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.label}</a></li>)}</ul>
              </nav>
            )}
          </div>
        </header>
        <ScrollReveal>{children}</ScrollReveal>
        {showContactBar && <ContactBar />}
      </main>
      <SiteFooter />
    </div>
  );
}

export function InstitutionalStory({ id, title, overline, paragraphs, image, reverse = false, alt = false, children }: {
  id: string;
  title: string;
  overline?: string;
  paragraphs: readonly string[];
  image?: { src: string; alt: string };
  reverse?: boolean;
  alt?: boolean;
  children?: ReactNode;
}) {
  return (
    <section id={id} className={`section${alt ? " section-alt" : ""}`} aria-labelledby={`${id}-title`}>
      <div className={`wrap story${image ? "" : " is-text"}${reverse ? " is-reversed" : ""}`}>
        <div className="story-copy" data-reveal>
          {overline && <p className="kicker">{overline}</p>}
          <h2 id={`${id}-title`}>{title}</h2>
          <div className="prose">{paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          {children}
        </div>
        {image && <div className="story-photo" data-reveal data-reveal-delay="80"><Image src={image.src} alt={image.alt} width={560} height={420} sizes="(max-width: 900px) calc(100vw - 48px), 560px" /></div>}
      </div>
    </section>
  );
}

export function InstitutionalPrinciples({ id, title, items, alt = false }: { id: string; title: string; items: readonly { title: string; description: string }[]; alt?: boolean }) {
  return (
    <section id={id} className={`section${alt ? " section-alt" : ""}`} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <div className="section-head" data-reveal><h2 id={`${id}-title`}>{title}</h2></div>
        <ul className="principles">{items.map((item, index) => <li key={item.title} data-reveal data-reveal-delay={index % 3 * 60}><h3>{item.title}</h3><p>{item.description}</p></li>)}</ul>
      </div>
    </section>
  );
}

export function DocumentCards({ documents }: { documents: readonly { title: string; description: string; href: string; source: string }[] }) {
  return <ul className="documents">{documents.map((document, index) => <li key={document.href} className="card is-accent" data-reveal data-reveal-delay={index % 2 * 60}>
    <span className="document-icon" aria-hidden="true"><FileText size={22} strokeWidth={1.7} /></span>
    <h3>{document.title}</h3><p>{document.description}</p>
    <a className="arrow-link arrow-link-secondary" href={document.href} download aria-label={`Scarica il certificato: ${document.title} (PDF)`}><span>Scarica il certificato</span><Download size={18} aria-hidden="true" /></a>
  </li>)}</ul>;
}
