import type { Metadata } from "next";
import { TrainingCatalogPage } from "@/components/training-catalog-page";
import { universityCatalog } from "@/lib/training-catalogs";

export const metadata: Metadata = { title: "Formazione Universitaria | GiCo", description: "Orientamento e accompagnamento universitario GiCo: Pegaso, Mercatorum, San Raffaele, perfezionamenti, master e percorsi abilitanti insegnanti." };
export default function UniversityPage() { return <TrainingCatalogPage catalog={universityCatalog} />; }
