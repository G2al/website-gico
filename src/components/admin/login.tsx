"use client";
import Image from "next/image";
import { useState, type FormEvent } from "react";
export function AdminLogin() {
  const [error, setError] = useState(""); const [pending, setPending] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setPending(true);
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/admin/session", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username: form.get("username"), password: form.get("password") }) });
      const data = await response.json();
      if (!response.ok) { setError(data.error || "Accesso non riuscito."); return; }
      window.location.assign("/admin");
    } catch { setError("Connessione non disponibile. Riprova."); } finally { setPending(false); }
  }
  return <div className="admin-login"><a href="/" aria-label="Torna al sito GiCo"><Image src="/images/logo-gico-coop.png" alt="GiCo Cooperativa Sociale" width={140} height={82} /></a><p className="admin-eyebrow">Area riservata</p><h1>Le tue news,<br />in un unico posto.</h1><p>Accedi per gestire le notizie del sito GiCo.</p><form onSubmit={submit}><label>Nome utente<input name="username" autoComplete="username" required maxLength={100} /></label><label>Password<input name="password" type="password" autoComplete="current-password" required maxLength={256} /></label>{error && <p className="admin-feedback is-error" role="alert">{error}</p>}<button className="admin-primary" disabled={pending} type="submit">{pending ? "Accesso in corso…" : "Accedi"}</button></form><a className="admin-back" href="/">← Torna al sito pubblico</a></div>;
}
