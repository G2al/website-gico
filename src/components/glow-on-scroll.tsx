"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Adds `is-lit` to each direct child while it is well inside the viewport (animated glowing border).
export function GlowOnScroll({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle("is-lit", entry.isIntersecting));
    }, { threshold: 0.45 });
    Array.from(root.children).forEach(child => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}
