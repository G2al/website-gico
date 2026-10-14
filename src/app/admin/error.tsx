"use client";
export default function AdminError({ reset }: { reset: () => void }) { return <div className="admin-login"><h1>Pannello non disponibile</h1><p>Controlla che MySQL sia attivo e che il database sia stato configurato.</p><button type="button" onClick={reset}>Riprova</button><a href="/">Torna al sito</a></div>; }
