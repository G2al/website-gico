import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { HomeHero } from "@/components/home-hero";
import { PerleSection } from "@/components/perle-section";
import { GalleryStrip } from "@/components/gallery-strip";
import { TrainingSection } from "@/components/training-section";
import { LogoMarquee } from "@/components/logo-marquee";
import { ParGolHighlight } from "@/components/par-gol-highlight";
import { HomeNews } from "@/components/home-news";
import { TransparencySection } from "@/components/transparency-section";
import { VisitSection } from "@/components/visit-section";
import { AboutSection } from "@/components/about-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenuto">Vai al contenuto</a>
      <SiteHeader />
      <main id="contenuto">
        <HomeHero />
        <PerleSection />
        <GalleryStrip />
        <TrainingSection />
        <LogoMarquee />
        <ParGolHighlight />
        <Suspense fallback={<section className="section"><p className="wrap">Caricamento delle notizie…</p></section>}><HomeNews /></Suspense>
        <TransparencySection />
        <VisitSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}
