"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Progressive enhancement: content stays visible without JavaScript.
export function ScrollReveal({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (preference.matches) return;
        const element = entry.target as HTMLElement;
        const animation = element.animate([
          { opacity: 0, transform: "translate3d(0, 16px, 0)" },
          { opacity: 1, transform: "translate3d(0, 0, 0)" },
        ], {
          duration: 500,
          delay: Number(element.dataset.revealDelay ?? 0),
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "both",
        });
        animations.add(animation);
        animation.finished.then(() => {
          animation.cancel();
          animations.delete(animation);
        }).catch(() => {});
      });
    }, { threshold: 0.12 });

    const stopAnimations = () => {
      animations.forEach(animation => animation.cancel());
      animations.clear();
    };
    const handlePreference = () => { if (preference.matches) stopAnimations(); };
    root.querySelectorAll("[data-reveal]").forEach(element => observer.observe(element));
    // Keyboard users never have to wait for an entrance animation.
    root.addEventListener("focusin", stopAnimations);
    preference.addEventListener("change", handlePreference);
    return () => {
      observer.disconnect();
      stopAnimations();
      root.removeEventListener("focusin", stopAnimations);
      preference.removeEventListener("change", handlePreference);
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
