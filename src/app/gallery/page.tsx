import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/institutional-page";
import { SocialGallery } from "@/components/social-gallery";
import { socialGallery } from "@/lib/social-content";

export const metadata: Metadata = {
  title: "Gallery – Le Perle Preziose | GiCo",
  description: "La gallery del Centro Sociale Polifunzionale per Disabili Le Perle Preziose: fotografie degli spazi, delle attività e dei momenti condivisi.",
};

export default function GalleryPage() {
  return <InstitutionalPage title="Gallery" overline="Centro Sociale Polifunzionale per Disabili “Le Perle Preziose”" path="/gallery" parent={{ label: "Centro Sociale", href: "/centro-sociale-polifunzionale" }}>
    <SocialGallery photos={socialGallery} />
  </InstitutionalPage>;
}
