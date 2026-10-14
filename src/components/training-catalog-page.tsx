import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { TrainingCatalog, TrainingCourse } from "@/lib/training-catalogs";
import { InstitutionalPage } from "./institutional-page";
import { MobileCarousel } from "./mobile-carousel";
import "./training-catalog-page.css";

function CatalogCard({ course, index, mode }: { course: TrainingCourse; index: number; mode: "grid" | "mobile" }) {
  const titleId = `catalog-${mode}-title-${index}`;
  return <a href={course.href} className="training-catalog-card" aria-labelledby={titleId}>
    <div className="training-catalog-photo"><Image src={course.image} alt="" width={770} height={500} loading={index === 0 ? "eager" : "lazy"} sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1100px) 45vw, 430px" /></div>
    <div className="training-catalog-body"><span className="training-catalog-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h2 id={titleId}>{course.title}</h2><p>{course.description}</p><span className="training-catalog-link">Scopri di più<span aria-hidden="true"><ArrowUpRight size={18} strokeWidth={1.6} /></span></span></div>
  </a>;
}

export function TrainingCatalogPage({ catalog }: { catalog: TrainingCatalog }) {
  const sections = [
    ...(catalog.introduction.length ? [{ id: "presentazione", label: "Presentazione" }] : []),
    { id: "percorsi", label: catalog.title === "Certificazioni Linguistiche" ? "Inglese e tedesco" : "Scopri i percorsi" },
  ];
  return <InstitutionalPage title={catalog.title} path={catalog.path} parent={{ label: "Centro di Formazione", href: "/centro-di-formazione" }} sections={sections}>
    {catalog.introduction.length > 0 && <section id="presentazione" className={`training-catalog-introduction institutional-width${catalog.introduction.length === 2 ? " is-paired" : ""}`} aria-label={`Presentazione: ${catalog.title}`}>
      {catalog.introduction.map((paragraph, index) => <p key={paragraph} data-reveal data-reveal-delay={index * 70}>{paragraph}</p>)}
    </section>}
    <section id="percorsi" className={`training-catalog institutional-width${catalog.courses.length === 2 ? " is-compact" : ""}`} aria-label={`Percorsi: ${catalog.title}`}>
      <ul className="training-catalog-grid">{catalog.courses.map((course, index) => <li key={course.href} data-reveal data-reveal-delay={index % 3 * 70}><CatalogCard course={course} index={index} mode="grid" /></li>)}</ul>
      <div className="training-catalog-mobile"><MobileCarousel label={catalog.title} slides={catalog.courses.map((course, index) => <CatalogCard key={course.href} course={course} index={index} mode="mobile" />)} /></div>
    </section>
  </InstitutionalPage>;
}
