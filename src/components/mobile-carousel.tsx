"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import "./mobile-carousel.css";

export function MobileCarousel({ slides, label, numbered = false, timeline = false, onActiveChange }: {
  slides: ReactNode[];
  label: string;
  numbered?: boolean;
  timeline?: boolean;
  onActiveChange?: (index: number) => void;
}) {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const progressRef = useRef<HTMLSpanElement>(null);
  const trackId = useId();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const align = () => {
      if (!track.clientWidth) return;
      const slide = track.children[activeRef.current] as HTMLElement;
      track.scrollTo({ left: slide.offsetLeft, behavior: "instant" });
    };
    const resize = new ResizeObserver(align);
    resize.observe(track);
    return () => { resize.disconnect(); window.cancelAnimationFrame(frameRef.current); };
  }, []);

  useEffect(() => {
    // Only the visible slide participates in keyboard navigation.
    const track = trackRef.current;
    if (!track) return;
    Array.from(track.children).forEach((slide, index) => { (slide as HTMLElement).inert = index !== active; });
  }, [active]);

  const handleScroll = () => {
    if (frameRef.current) return;
    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = 0;
      const track = trackRef.current;
      if (!track?.clientWidth) return;
      if (progressRef.current) {
        const last = track.lastElementChild as HTMLElement;
        const progress = last.offsetLeft ? Math.max(0, Math.min(track.scrollLeft / last.offsetLeft, 1)) : 0;
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      let nearest = 0;
      let distance = Infinity;
      Array.from(track.children).forEach((slide, index) => {
        const nextDistance = Math.abs((slide as HTMLElement).offsetLeft - track.scrollLeft);
        if (nextDistance < distance) { distance = nextDistance; nearest = index; }
      });
      if (nearest !== activeRef.current) {
        activeRef.current = nearest;
        setActive(nearest);
        onActiveChange?.(nearest);
      }
    });
  };

  const handleSelect = (index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

  return (
    <div className={`mobile-carousel${timeline ? " is-timeline" : ""}`} role="region" aria-roledescription="carosello" aria-label={label}>
      <div className="mobile-carousel-track" ref={trackRef} id={trackId} tabIndex={0} onScroll={handleScroll} onKeyDown={event => {
        let next = active;
        if (event.key === "ArrowRight") next = Math.min(active + 1, slides.length - 1);
        else if (event.key === "ArrowLeft") next = Math.max(active - 1, 0);
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = slides.length - 1;
        else return;
        event.preventDefault(); handleSelect(next);
      }}>
        {slides.map((slide, index) => <div key={index} className="mobile-carousel-slide" role="group" aria-roledescription="scheda" aria-label={`${index + 1} di ${slides.length}`}>{slide}</div>)}
      </div>
      <div className="mobile-carousel-controls">
        <button className="mobile-carousel-arrow" type="button" disabled={active === 0} aria-label={`${label}: precedente`} aria-controls={trackId} onClick={() => handleSelect(active - 1)}><ArrowLeft size={18} aria-hidden="true" /></button>
        <div className={`mobile-carousel-steps${numbered ? " is-numbered" : ""}`}>
          {timeline && <span className="mobile-carousel-line" aria-hidden="true"><span ref={progressRef} /></span>}
          {slides.map((_, index) => <button type="button" key={index} className="mobile-carousel-step" aria-label={`${label}: mostra scheda ${index + 1}`} aria-current={active === index ? "true" : undefined} aria-controls={trackId} onClick={() => handleSelect(index)}><span aria-hidden="true">{numbered ? index + 1 : ""}</span></button>)}
        </div>
        <button className="mobile-carousel-arrow" type="button" disabled={active === slides.length - 1} aria-label={`${label}: successiva`} aria-controls={trackId} onClick={() => handleSelect(active + 1)}><ArrowRight size={18} aria-hidden="true" /></button>
      </div>
      <p className="mobile-carousel-status" aria-live="polite" aria-atomic="true">Scheda {active + 1} di {slides.length}</p>
    </div>
  );
}
