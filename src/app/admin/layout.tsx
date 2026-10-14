import type { Metadata } from "next";
import "./admin.css";
export const metadata: Metadata = { title: "Pannello News | GiCo", robots: { index: false, follow: false } };
export default function AdminLayout({ children }: { children: React.ReactNode }) { return <main className="admin-shell">{children}</main>; }
