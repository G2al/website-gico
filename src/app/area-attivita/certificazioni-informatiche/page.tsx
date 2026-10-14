import type { Metadata } from "next";
import { TrainingCatalogPage } from "@/components/training-catalog-page";
import { computerCatalog } from "@/lib/training-catalogs";

export const metadata: Metadata = { title: "Certificazioni Informatiche | GiCo", description: "Le certificazioni e i corsi informatici GiCo: EIPASS, PEKIT, LIM, tablet, coding e dattilografia. Consulta i percorsi disponibili." };
export default function ComputerCertificationsPage() { return <TrainingCatalogPage catalog={computerCatalog} />; }
