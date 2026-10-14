import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/institutional-page";
import { SocialGallery } from "@/components/social-gallery";
import { socialGallery } from "@/lib/social-content";

export const metadata: Metadata = {
  title: "Gallery Centro Sociale | GiCo",
  description: "La gallery del Centro Sociale Le Perle Preziose: fotografie degli spazi, delle attività e dei momenti condivisi.",
};

export default function GalleryPage() {
  return <InstitutionalPage title="Gallery" path="/gallery" parent={{ label: "Centro Sociale", href: "/centro-sociale-polifunzionale" }} sections={[{ id: "fotografie", label: "Esplora le fotografie" }]}>
    <SocialGallery photos={socialGallery} />
  </InstitutionalPage>;
}
