import { Suspense } from "react";
import { redirect } from "next/navigation";
import { currentAdmin } from "@/lib/server/admin-auth";
import { adminNews } from "@/lib/server/news-store";
import { AdminDashboard } from "@/components/admin/dashboard";
async function Dashboard() {
  const admin = await currentAdmin();
  if (!admin) redirect("/admin/login");
  return <AdminDashboard initialArticles={await adminNews()} username={admin.username} csrf={admin.csrf} />;
}
export default function AdminPage() { return <Suspense fallback={<p className="admin-loading">Caricamento del pannello…</p>}><Dashboard /></Suspense>; }
