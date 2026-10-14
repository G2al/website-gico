import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function ArrowLink({ href, children, secondary = false, className = "" }: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <a href={href} className={`arrow-link ${secondary ? "arrow-link-secondary" : ""} ${className}`}>
      <span>{children}</span>
      <span className="arrow-link-icon" aria-hidden="true"><ArrowRight size={18} strokeWidth={1.75} /></span>
    </a>
  );
}
