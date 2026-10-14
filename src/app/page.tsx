import { SiteHeader } from "@/components/site-header";
import { HomeHero } from "@/components/home-hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { AboutSection } from "@/components/about-section";
import { TrainingSection } from "@/components/training-section";
import { SocialSection } from "@/components/social-section";
import { HomeNews } from "@/components/home-news";
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
        <SocialSection />
        <Suspense fallback={<section className="news-section"><p>Caricamento delle notizie…</p></section>}><HomeNews /></Suspense>
        <ContactBar />
      </main>
      <SiteFooter />
    </div>
  );
}
