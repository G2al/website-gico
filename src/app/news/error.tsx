"use client";
export default function NewsError({ reset }: { reset: () => void }) { return <div style={{ padding: 40 }}><h1>Notizie non disponibili</h1><p>Il servizio è temporaneamente non disponibile. Riprova tra poco.</p><button type="button" onClick={reset}>Riprova</button><p><a href="/">Torna alla home</a></p></div>; }
