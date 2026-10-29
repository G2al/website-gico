import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Mail, Phone } from "lucide-react";
import { InstitutionalPage } from "@/components/institutional-page";
import { ArrowLink } from "@/components/arrow-link";
import { courses, findCourse, type CourseCategory } from "@/lib/courses";
import { gicoContact } from "@/lib/gico-contact";
import { originalPage } from "@/lib/navigation";
import "./course-page.css";

const categories: Record<CourseCategory, { label: string; href: string }> = {
  professionale: { label: "Formazione Professionale", href: originalPage("/area-attivita/corsi-di-formazione-professionale/") },
  informatica: { label: "Certificazioni Informatiche", href: originalPage("/area-attivita/certificazioni-informatiche/") },
  lingue: { label: "Lingue e Scuola di Inglese", href: originalPage("/area-attivita/certificazioni-linguistiche/") },
  altre: { label: "Altre Attività Formative", href: originalPage("/area-attivita/altre-attivita-formative/") },
};

export function generateStaticParams() {
  return courses.map(course => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: PageProps<"/corsi/[slug]">): Promise<Metadata> {
  const course = findCourse((await params).slug);
  return course ? { title: `${course.title} | GiCo – Centro Edoardo Apicella`, description: course.summary } : { title: "Corso non trovato | GiCo" };
}

export default async function CoursePage({ params }: PageProps<"/corsi/[slug]">) {
  const course = findCourse((await params).slug);
  if (!course) notFound();
  const category = categories[course.category];
  const requestHref = `${originalPage("/richiedi-informazioni/")}?corso=${course.slug}`;

  return <InstitutionalPage title={course.title} overline={category.label} intro={course.summary} path={category.href} parent={category}>
    <div className="section">
      <div className="wrap course-layout">
        <article className="course-main">
          <Image className="course-image" src={course.image} alt="" width={770} height={500} loading="eager" sizes="(max-width: 900px) calc(100vw - 48px), 720px" />
          <div className="prose course-intro">{course.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          {course.sections.map((section, index) => (
            <section className="course-section" key={section.title} aria-labelledby={`sezione-${index}`}>
              <h2 id={`sezione-${index}`}>{section.title}</h2>
              {section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              {section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}
        </article>
        <aside className="course-aside" aria-label="Informazioni sul corso">
          {course.facts && <dl className="course-facts">{course.facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>}
          <div className="course-request">
            <h2>Ti interessa questo corso?</h2>
            <p>Chiedici date, costi e modalità di iscrizione.{course.category === "professionale" && " Per i corsi autofinanziati sono previsti pagamenti rateizzabili e tutor dedicati."}</p>
            <ArrowLink href={requestHref}>Richiedi informazioni</ArrowLink>
            <ul>
              <li><a href={`mailto:${gicoContact.trainingEmail}?subject=${encodeURIComponent(`Informazioni: ${course.title}`)}`}><Mail size={17} aria-hidden="true" />{gicoContact.trainingEmail}</a></li>
              <li><a href={gicoContact.phoneHref}><Phone size={17} aria-hidden="true" />{gicoContact.phone}</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </InstitutionalPage>;
}
