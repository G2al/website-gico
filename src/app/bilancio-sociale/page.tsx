import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import { InstitutionalPage } from "@/components/institutional-page";
import { socialReport } from "@/lib/institutional-content";

export const metadata: Metadata = {
  title: "Bilancio Sociale | GiCo",
  description: "Consulta e scarica il Bilancio Sociale 2024 pubblicato da GiCo Società Cooperativa Sociale – Impresa Sociale.",
};

export default function SocialReportPage() {
  return <InstitutionalPage title="Bilancio Sociale" path="/bilancio-sociale" sections={[{ id: "bilancio-2024", label: "Anno 2024" }]}>
    <section id="bilancio-2024" className="institutional-report institutional-width" aria-labelledby="report-title" data-reveal>
      <div className="institutional-report-decoration" aria-hidden="true"><FileText size={170} strokeWidth={.7} /></div>
      <div><p className="institutional-eyebrow">GiCo</p><h2 id="report-title">Anno <span>{socialReport.year}</span></h2></div>
      <a className="institutional-download" href={socialReport.href} download aria-label="Scarica il Bilancio Sociale 2024 (PDF)"><span>Scarica il Bilancio</span><Download size={19} aria-hidden="true" /></a>
    </section>
  </InstitutionalPage>;
}
