import type { Metadata } from "next";
import { TrainingCatalogPage } from "@/components/training-catalog-page";
import { languageCatalog } from "@/lib/training-catalogs";

export const metadata: Metadata = { title: "Certificazioni Linguistiche | GiCo", description: "Scopri le certificazioni di lingua inglese e tedesca pubblicate da GiCo Centro di Formazione." };
export default function LanguageCertificationsPage() { return <TrainingCatalogPage catalog={languageCatalog} />; }
