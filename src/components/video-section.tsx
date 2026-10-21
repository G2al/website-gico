import Image from "next/image";
import { Play } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import "./video-section.css";

// Placeholder until GiCo supplies the video: set `src` (e.g. "/videos/gico.mp4") to publish it.
const presentationVideo: { src: string | null; poster: string; title: string } = {
  src: null,
  poster: "/images/gallery-centro-sociale-14.webp",
  title: "Video di presentazione di GiCo",
};

export function VideoSection() {
  return (
    <section className="video-section" aria-labelledby="video-title">
      <ScrollReveal>
        <div className="video-heading" data-reveal>
          <p className="section-eyebrow">Video</p>
          <h2 id="video-title" className="section-title">GiCo, <span>in movimento.</span></h2>
          <p className="section-lead">Le attività, gli spazi e le persone dei nostri centri, raccontati per immagini.</p>
        </div>
        <div className="video-frame" data-reveal data-reveal-delay="90">
          {presentationVideo.src ? (
            <video controls playsInline preload="metadata" poster={presentationVideo.poster} aria-label={presentationVideo.title}>
              <source src={presentationVideo.src} />
            </video>
          ) : (
            <div className="video-placeholder">
              <Image src={presentationVideo.poster} alt="" fill sizes="(max-width: 1260px) calc(100vw - 64px), 1200px" />
              <div className="video-placeholder-content">
                <span className="video-placeholder-play" aria-hidden="true"><Play size={30} fill="currentColor" /></span>
                <p className="video-placeholder-badge">Video in arrivo</p>
                <p className="video-placeholder-note">Segnaposto: qui verrà pubblicato il video di presentazione di GiCo.</p>
              </div>
            </div>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
