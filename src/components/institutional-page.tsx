import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, FileText } from "lucide-react";
import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { ContactBar } from "./contact-bar";
import { ScrollReveal } from "./scroll-reveal";
import "./institutional-page.css";

type SectionLink = { id: string; label: string };

export function InstitutionalPage({ title, path, sections, children, parent = { label: "Chi siamo", href: "/gico" }, showContactBar = true }: {
  title: string;
  path: string;
  sections: readonly SectionLink[];
  children: ReactNode;
  parent?: { label: string; href: string } | null;
  showContactBar?: boolean;
}) {
  return (
    <div className="site-shell institutional-page">
      <a className="skip-link" href="#contenuto">Vai al contenuto</a>
      <SiteHeader activePath={path} />
      <main id="contenuto">
        <ScrollReveal>
          <header className="institutional-header institutional-width">
            <nav className="institutional-breadcrumb" aria-label="Percorso di navigazione"><a href="/">Home</a><span aria-hidden="true">/</span>{parent && <><a href={parent.href}>{parent.label}</a><span aria-hidden="true">/</span></>}<span aria-current="page">{title}</span></nav>
            <div className="institutional-title" data-reveal>
              <p className="institutional-eyebrow">GiCo</p>
              <h1>{title}</h1>
              <a className="institutional-down" href={`#${sections[0].id}`} aria-label="Scopri i contenuti della pagina"><ArrowDown size={20} aria-hidden="true" /></a>
            </div>
            <nav className="institutional-index" aria-label="In questa pagina">{sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.label}<ArrowUpRight size={15} aria-hidden="true" /></a>)}</nav>
          </header>
          {children}
        </ScrollReveal>
        {showContactBar && <ContactBar />}
      </main>
      <SiteFooter />
    </div>
  );
}

export function InstitutionalStory({ id, title, paragraphs, image, reverse = false, dark = false }: {
  id: string;
  title: string;
  paragraphs: readonly string[];
  image: { src: string; alt: string };
  reverse?: boolean;
  dark?: boolean;
}) {
  return (
    <section id={id} className={`institutional-story institutional-width${reverse ? " is-reversed" : ""}${dark ? " is-dark" : ""}`} aria-labelledby={`${id}-title`}>
      <div className="institutional-story-copy" data-reveal>
        <p className="institutional-eyebrow">GiCo</p><h2 id={`${id}-title`}>{title}</h2>
        {paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="institutional-story-photo" data-reveal data-reveal-delay="90"><Image src={image.src} alt={image.alt} width={500} height={510} sizes="(max-width: 600px) calc(100vw - 72px), (max-width: 900px) 420px, 500px" /></div>
    </section>
  );
}

export function InstitutionalPrinciples({ id, title, items }: { id: string; title: string; items: readonly { title: string; description: string }[] }) {
  return (
    <section id={id} className="institutional-principles institutional-width" aria-labelledby={`${id}-title`}>
      <div className="institutional-section-heading" data-reveal><p className="institutional-eyebrow">GiCo</p><h2 id={`${id}-title`}>{title}</h2></div>
      <ol className="institutional-principles-list">{items.map((item, index) => <li key={item.title} data-reveal data-reveal-delay={index % 3 * 70}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></li>)}</ol>
    </section>
  );
}

export function DocumentCards({ documents }: { documents: readonly { title: string; description: string; href: string; source: string }[] }) {
  return <ul className="institutional-documents">{documents.map((document, index) => <li key={document.href} data-reveal data-reveal-delay={index % 2 * 90}>
    <span className="institutional-document-icon" aria-hidden="true"><FileText size={26} strokeWidth={1.4} /></span>
    <h3>{document.title}</h3><p>{document.description}</p>
    <a className="institutional-download" href={document.href} download aria-label={`Scarica il Certificato: ${document.title} (PDF)`}><span>Scarica il Certificato</span><Download size={18} aria-hidden="true" /></a>
  </li>)}</ul>;
}
