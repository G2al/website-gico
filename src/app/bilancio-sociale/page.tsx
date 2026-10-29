import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import { InstitutionalPage } from "@/components/institutional-page";
import { socialReport } from "@/lib/institutional-content";
import "./social-report.css";

export const metadata: Metadata = {
  title: "Bilancio Sociale | GiCo",
  description: "Consulta e scarica il Bilancio Sociale 2024 pubblicato da GiCo Società Cooperativa Sociale – Impresa Sociale.",
};

export default function SocialReportPage() {
  return <InstitutionalPage title="Bilancio Sociale" intro="I bilanci sociali pubblicati dalla cooperativa, suddivisi per anno." path="/bilancio-sociale">
    <section className="section" aria-label="Bilanci sociali per anno">
      <div className="wrap">
        <ul className="reports">
          <li id={`bilancio-${socialReport.year}`} className="report" data-reveal>
            <span className="report-icon" aria-hidden="true"><FileText size={28} strokeWidth={1.6} /></span>
            <div>
              <h2>Bilancio Sociale {socialReport.year}</h2>
              <p>Documento in formato PDF.</p>
            </div>
            <a className="arrow-link" href={socialReport.href} download aria-label={`Scarica il Bilancio Sociale ${socialReport.year} (PDF)`}><span>Scarica il PDF</span><Download size={18} aria-hidden="true" /></a>
          </li>
        </ul>
      </div>
    </section>
  </InstitutionalPage>;
}
