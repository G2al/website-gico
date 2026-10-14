import { Suspense } from "react";
import { redirect } from "next/navigation";
import { currentAdmin } from "@/lib/server/admin-auth";
import { AdminLogin } from "@/components/admin/login";
async function Login() { if (await currentAdmin()) redirect("/admin"); return <AdminLogin />; }
export default function LoginPage() { return <Suspense fallback={<p className="admin-loading">Caricamento…</p>}><Login /></Suspense>; }
