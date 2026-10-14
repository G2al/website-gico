import type { Metadata } from "next";
import { TrainingCatalogPage } from "@/components/training-catalog-page";
import { professionalCatalog } from "@/lib/training-catalogs";

export const metadata: Metadata = { title: "Formazione Professionale | GiCo", description: "Scopri le qualifiche professionali pubblicate da GiCo: percorsi socio-sanitari, educativi, amministrativi e per la cura degli ambienti." };
export default function ProfessionalPage() { return <TrainingCatalogPage catalog={professionalCatalog} />; }
