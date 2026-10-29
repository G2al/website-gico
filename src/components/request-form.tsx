"use client";

import { ArrowRight, Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useId, useState, type FormEvent } from "react";
import { coursesIn } from "@/lib/courses";
import { gicoContact } from "@/lib/gico-contact";
import { originalPage } from "@/lib/navigation";
import "./request-form.css";

type Topic = { value: string; label: string; training?: boolean };
const training = (items: readonly { slug: string; title: string }[]): Topic[] => items.map(item => ({ value: item.slug, label: item.title, training: true }));

const topicGroups: { label: string; topics: Topic[] }[] = [
  { label: "GiCo", topics: [{ value: "generale", label: "Informazioni generali" }, { value: "centro-sociale", label: "Centro Sociale Le Perle Preziose" }] },
  { label: "Formazione professionale", topics: training(coursesIn("professionale")) },
  { label: "Formazione universitaria e post-universitaria", topics: [
    { value: "universitaria", label: "Lauree, master, perfezionamenti e alta formazione", training: true },
    { value: "scuola-pa", label: "Formazione per docenti, scuola e Pubblica Amministrazione", training: true },
    { value: "abilitanti-tfa", label: "Percorsi abilitanti e TFA", training: true },
  ] },
  { label: "Certificazioni informatiche", topics: training(coursesIn("informatica")) },
  { label: "Lingue e scuola di inglese", topics: [...training(coursesIn("lingue")), { value: "scuola-inglese", label: "Scuola di inglese per bambini e adulti", training: true }] },
  { label: "Altre attività formative", topics: [
    ...training(coursesIn("altre")),
    { value: "alimentaristi", label: "Attestati per alimentaristi (livello 1, 2 e 3)", training: true },
    { value: "sicurezza", label: "Salute e sicurezza nei luoghi di lavoro", training: true },
  ] },
  { label: "Programmi", topics: [{ value: "par-gol", label: "PAR GOL – Garanzia di Occupabilità dei Lavoratori", training: true }] },
];
const allTopics = topicGroups.flatMap(group => group.topics);

export function RequestForm({ initialTopic = "generale" }: { initialTopic?: string }) {
  const id = useId();
  const [topic, setTopic] = useState(allTopics.some(item => item.value === initialTopic) ? initialTopic : "generale");
  const [draft, setDraft] = useState<string | null>(null);
  const selected = allTopics.find(item => item.value === topic) ?? allTopics[0];
  const recipient = selected.training ? gicoContact.trainingEmail : selected.value === "centro-sociale" ? "centrosociale@gicocoop.it" : gicoContact.email;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    for (const name of ["name", "message"]) {
      const field = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
      if (!field.value.trim()) { field.setCustomValidity("Compila questo campo."); field.reportValidity(); return; }
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`Richiesta di informazioni: ${selected.label}`);
    const phone = String(data.get("phone") ?? "").trim();
    const body = encodeURIComponent(`Argomento: ${selected.label}\nNome: ${String(data.get("name")).trim()}\nEmail: ${String(data.get("email")).trim()}${phone ? `\nTelefono: ${phone}` : ""}\n\n${String(data.get("message")).trim()}`);
    setDraft(`mailto:${recipient}?subject=${subject}&body=${body}`);
  };

  return (
    <form className="request-form" onSubmit={handleSubmit} onChange={event => {
      setDraft(null);
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) event.target.setCustomValidity("");
    }}>
      <div className="request-field is-wide">
        <label htmlFor={`${id}-topic`}>Argomento della richiesta <span>(obbligatorio)</span></label>
        <select id={`${id}-topic`} name="topic" value={topic} onChange={event => setTopic(event.target.value)} aria-describedby={`${id}-topic-help`} required>
          {topicGroups.map(group => <optgroup key={group.label} label={group.label}>{group.topics.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}</optgroup>)}
        </select>
        <p className="request-help" id={`${id}-topic-help`}>La richiesta verrà indirizzata a <strong>{recipient}</strong>.</p>
      </div>
      <div className="request-field">
        <label htmlFor={`${id}-name`}>Nome e cognome <span>(obbligatorio)</span></label>
        <input id={`${id}-name`} name="name" autoComplete="name" required maxLength={120} />
      </div>
      <div className="request-field">
        <label htmlFor={`${id}-email`}>Email <span>(obbligatorio)</span></label>
        <input id={`${id}-email`} type="email" name="email" autoComplete="email" required maxLength={254} />
      </div>
      <div className="request-field">
        <label htmlFor={`${id}-phone`}>Telefono <span>(facoltativo)</span></label>
        <input id={`${id}-phone`} type="tel" name="phone" autoComplete="tel" maxLength={30} />
      </div>
      <div className="request-field is-wide">
        <label htmlFor={`${id}-message`}>Messaggio <span>(obbligatorio)</span></label>
        <textarea id={`${id}-message`} name="message" rows={6} required maxLength={2000} />
      </div>
      <div className="request-privacy is-wide">
        <input id={`${id}-privacy`} name="privacy" type="checkbox" required />
        <label htmlFor={`${id}-privacy`}>Ho letto l’<a href={originalPage("/privacy-policy/")} target="_blank" rel="noopener noreferrer">Informativa Privacy</a> e acconsento al trattamento dei dati personali <span>(obbligatorio)</span>.</label>
      </div>
      <div className="request-submit is-wide">
        <button className="arrow-link" type="submit"><span>Prepara l’email</span><Mail size={18} aria-hidden="true" /></button>
        <p className="request-help">Il modulo prepara un’email da inviare con il tuo programma di posta: nessun messaggio viene inviato automaticamente.</p>
      </div>
      {draft && <div className="request-ready is-wide" role="status"><p>L’email è pronta. Aprila nel tuo programma di posta e completa l’invio.</p><a className="text-link" href={draft}>Apri l’email<ArrowRight size={18} aria-hidden="true" /></a></div>}
    </form>
  );
}

export function RequestFormFromQuery() {
  const params = useSearchParams();
  return <RequestForm initialTopic={params.get("corso") ?? undefined} />;
}
