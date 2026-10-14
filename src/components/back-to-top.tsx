"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return <button className="footer-back-top" type="button" aria-label="Torna all’inizio della pagina" onClick={() => {
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    document.querySelector<HTMLAnchorElement>(".site-header .brand")?.focus({ preventScroll: true });
  }}><ArrowUp size={20} strokeWidth={1.6} aria-hidden="true" /></button>;
}
