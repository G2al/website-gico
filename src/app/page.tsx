import { SiteHeader } from "@/components/site-header";
import { HomeHero } from "@/components/home-hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { AboutSection } from "@/components/about-section";
import { TrainingSection } from "@/components/training-section";
import { ParGolHighlight } from "@/components/par-gol-highlight";
import { SocialSection } from "@/components/social-section";
import { GalleryStrip } from "@/components/gallery-strip";
import { VideoSection } from "@/components/video-section";
import { HomeNews } from "@/components/home-news";
import { TransparencySection } from "@/components/transparency-section";
import { VisitSection } from "@/components/visit-section";
import { Suspense } from "react";
import { ContactBar } from "@/components/contact-bar";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenuto">Vai al contenuto</a>
      <SiteHeader />
      <main id="contenuto">
        <HomeHero />
        <LogoMarquee />
        <AboutSection />
        <TrainingSection />
        <ParGolHighlight />
        <SocialSection />
        <GalleryStrip />
        <VideoSection />
        <Suspense fallback={<section className="news-section"><p>Caricamento delle notizie…</p></section>}><HomeNews /></Suspense>
        <TransparencySection />
        <VisitSection />
        <ContactBar />
      </main>
      <SiteFooter />
    </div>
  );
}
