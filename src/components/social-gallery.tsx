"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./social-gallery.css";

type GalleryPhoto = { src: string; alt: string; width: number; height: number; source: string };

export function SocialGallery({ photos }: { photos: readonly GalleryPhoto[] }) {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLAnchorElement | null>(null);
  const touchRef = useRef<{ x: number; y: number } | null>(null);
  const isOpen = active !== null;
  const photo = active === null ? null : photos[active];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  const move = (direction: number) => setActive(index => index === null ? null : (index + direction + photos.length) % photos.length);

  return <section id="fotografie" className="social-gallery institutional-width" aria-labelledby="social-gallery-title">
    <div className="social-gallery-heading" data-reveal><div><p className="institutional-eyebrow">Le Perle Preziose</p><h2 id="social-gallery-title">Il centro, da vicino.</h2></div><p>{photos.length} fotografie<span>Apri una foto per esplorare la gallery.</span></p></div>
    <div className="social-gallery-grid">
      {photos.map((item, index) => <a className="social-gallery-tile" href={item.src} key={item.src} data-reveal data-reveal-delay={index % 3 * 60} aria-label={`Ingrandisci foto ${index + 1}: ${item.alt}`} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return; event.preventDefault(); triggerRef.current = event.currentTarget; setActive(index); }}>
        <Image src={item.src} alt={item.alt} width={item.width} height={item.height} loading={index < 3 ? "eager" : "lazy"} sizes={index === 0 ? "(max-width: 900px) 100vw, 66vw" : "(max-width: 900px) 50vw, 33vw"} />
        <span className="social-gallery-tile-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span className="social-gallery-expand" aria-hidden="true"><Expand size={19} /></span>
      </a>)}
    </div>
    <a className="social-gallery-services" href="/servizi-centro-sociale">Scopri i servizi del centro<ArrowUpRight size={18} aria-hidden="true" /></a>
    <dialog className="social-gallery-dialog" ref={dialogRef} aria-labelledby="social-gallery-dialog-title" aria-describedby="social-gallery-dialog-caption" onCancel={() => setActive(null)} onClick={event => { if (event.target === event.currentTarget) setActive(null); }} onKeyDown={event => { if (event.key === "Escape") { event.preventDefault(); setActive(null); } else if (event.key === "ArrowRight") { event.preventDefault(); move(1); } else if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); } }}>
      {photo && <div className="social-gallery-viewer">
        <div className="social-gallery-toolbar"><h2 id="social-gallery-dialog-title">Gallery <span>Le Perle Preziose</span></h2><button type="button" autoFocus onClick={() => setActive(null)} aria-label="Chiudi la fotografia"><X size={23} aria-hidden="true" /></button></div>
        <div className="social-gallery-viewer-photo" onTouchStart={event => { const touch = event.touches[0]; touchRef.current = { x: touch.clientX, y: touch.clientY }; }} onTouchEnd={event => { const start = touchRef.current; touchRef.current = null; if (!start) return; const end = event.changedTouches[0]; const dx = end.clientX - start.x; if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(end.clientY - start.y)) move(dx < 0 ? 1 : -1); }}>
          <Image key={photo.src} src={photo.src} alt={photo.alt} fill sizes="(max-width: 600px) 100vw, 90vw" loading="eager" />
        </div>
        <div className="social-gallery-viewer-footer"><p id="social-gallery-dialog-caption" aria-live="polite" aria-atomic="true">{photo.alt}<span>Foto {active! + 1} di {photos.length}</span></p><div className="social-gallery-viewer-controls"><button type="button" onClick={() => move(-1)} aria-label="Fotografia precedente"><ArrowLeft size={21} aria-hidden="true" /></button><button type="button" onClick={() => move(1)} aria-label="Fotografia successiva"><ArrowRight size={21} aria-hidden="true" /></button></div></div>
      </div>}
    </dialog>
  </section>;
}
