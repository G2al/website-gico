import Image from "next/image";
import { coursePath, type Course } from "@/lib/courses";
import "./course-grid.css";

export function CourseGrid({ courses, headingLevel = 3 }: { courses: readonly Course[]; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <ul className="course-grid">
      {courses.map((course, index) => (
        <li key={course.slug} data-reveal data-reveal-delay={index % 3 * 60}>
          <article className="course-card">
            <div className="course-card-photo"><Image src={course.image} alt="" width={770} height={500} sizes="(max-width: 600px) calc(100vw - 48px), (max-width: 1000px) 45vw, 380px" /></div>
            <div className="course-card-body">
              <Heading><a href={coursePath(course.slug)}>{course.title}</a></Heading>
              <p>{course.summary}</p>
              <span className="course-card-more" aria-hidden="true">Scheda del corso</span>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
