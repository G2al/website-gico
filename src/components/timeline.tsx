import { timeline } from "@/lib/institutional-content";
import "./timeline.css";

// Compact: years and titles in a row (home). Full: every milestone with its text (Chi siamo page).
export function Timeline({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`timeline${compact ? " is-compact" : ""}`}>
      {timeline.map(step => (
        <li key={step.year} data-reveal>
          <span className="timeline-marker" aria-hidden="true" />
          <p className="timeline-year">{step.year}</p>
          <h3>{step.title}</h3>
          {!compact && <p className="timeline-text">{step.text}</p>}
        </li>
      ))}
    </ol>
  );
}
