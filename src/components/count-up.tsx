"use client";

import { useEffect, useRef } from "react";

export function CountUp({ value }: { value: number }) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = numberRef.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let started = false;
    const finish = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      element.textContent = String(value);
    };
    const observer = new IntersectionObserver(entries => {
      if (started || !entries.some(entry => entry.isIntersecting)) return;
      started = true;
      observer.disconnect();
      if (preference.matches) return;
      const duration = value < 10 ? 1000 : 1800;
      let start: number | undefined;
      const tick = (time: number) => {
        start ??= time;
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = String(Math.floor(eased * value));
        if (progress < 1) frame = window.requestAnimationFrame(tick);
        else finish();
      };
      element.textContent = "0";
      frame = window.requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    const handlePreference = () => { if (preference.matches) finish(); };
    observer.observe(element);
    preference.addEventListener("change", handlePreference);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", handlePreference);
      finish();
    };
  }, [value]);

  // Screen readers and the server-rendered page always receive the final value.
  return <span role="img" aria-label={String(value)}><span ref={numberRef} aria-hidden="true">{value}</span></span>;
}
