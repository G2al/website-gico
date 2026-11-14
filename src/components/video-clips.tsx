"use client";

import { useEffect, useRef } from "react";
import "./video-clips.css";

export const dailyActivityClips = [
  { src: "/video/perle-attivita-1.mp4", poster: "/video/perle-attivita-1.jpg", label: "Le attività giornaliere al Centro Sociale Le Perle Preziose" },
  { src: "/video/perle-attivita-2.mp4", poster: "/video/perle-attivita-2.jpg", label: "Un laboratorio di pittura d’autunno al Centro Sociale Le Perle Preziose" },
];

// Short muted loops: play only while visible, never when reduced motion is requested.
export function VideoClips({ clips = dailyActivityClips }: { clips?: typeof dailyActivityClips }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const videos = Array.from(root.querySelectorAll("video"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting && !reduced.matches) video.play().catch(() => {});
        else video.pause();
      });
    }, { threshold: 0.25 });
    videos.forEach(video => observer.observe(video));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="video-clips" ref={rootRef}>
      {clips.map(clip => (
        <figure className="video-clip" key={clip.src}>
          <div className="video-clip-frame">
            <video src={clip.src} poster={clip.poster} muted loop playsInline preload="metadata" aria-label={clip.label} />
          </div>
        </figure>
      ))}
    </div>
  );
}
