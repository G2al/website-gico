# GiCo Design System

Adattamento di **GovKit** (`govkit-DESIGN.md`) al sito di GiCo Società Cooperativa Sociale. Da GovKit prendiamo struttura, regole di accessibilità, spaziature, raggi contenuti ed estetica piatta definita da bordi; colori e font seguono le indicazioni del cliente (palette del logo, Manrope + Source Sans 3, sfondi caldi). Dove questo file e GovKit non coincidono, vale questo file.

## Principi

- **Istituzionale e sobrio.** Il sito rappresenta un ente sociale accreditato: chiarezza prima dell'effetto.
- **La persona al centro.** Fotografie vere di persone e luoghi GiCo; nessuna immagine generica quando ne esiste una reale.
- **Due realtà distinte.** Centro Sociale Polifunzionale per Disabili “Le Perle Preziose” e Centro Studi, Orientamento e Formazione Professionale “Edoardo Apicella” devono essere sempre riconoscibili per nome completo. Il Centro Sociale viene prima.
- **Piatto e squadrato.** La gerarchia nasce da bordi, campiture e tipografia, non da ombre, gradienti o arrotondamenti.
- **Accessibile per tutti.** WCAG AAA per il testo, focus sempre visibile, target di almeno 44px.

---

## Colori

Token definiti in `src/app/globals.css` (`:root`). Non usare valori esadecimali sparsi nei componenti.

| Token | Valore | Uso |
|---|---|---|
| `--bg` | #F5F6F3 | Sfondo pagina |
| `--bg-alt` | #E6E4D9 | Sezioni alternate, fasce di approfondimento |
| `--surface` | #FFFFFF | Card, pannelli, campi dei moduli |
| `--ink` | #1B2631 | Testo principale (15:1 su bianco) |
| `--ink-2` | #3E4A55 | Testo secondario (AAA su tutti gli sfondi) |
| `--blue` | #2F4D6E | Blu del logo: pulsanti primari, link, titoli in evidenza |
| `--blue-dark` | #1E3550 | Hover dei pulsanti, footer, fasce scure |
| `--azzurro` | #0089AB | Azzurro del logo: **solo elementi grafici** (filetti, icone, indicatori attivi, bordi d'accento). Mai per testo sotto i 24px |
| `--azzurro-tint` | #E1EFF3 | Fondi chiari per chip e riquadri informativi |
| `--line` | #D3D1C5 | Bordi e divisori su sfondi chiari |
| `--line-strong` | #858B91 | Bordi dei campi modulo (contrasto ≥3:1) |
| `--error` | #B91C1C | Errori di validazione |

Contrasti verificati: `--ink-2` 7,1:1 su `--bg-alt`; `--blue` 8:1 su `--bg`; testo bianco su `--blue` 8,7:1.

## Tipografia

- **Manrope**: titoli, testi principali (lead), navigazione, pulsanti. Pesi 500–600. **Mai 700/800**: il cliente chiede titoli meno pesanti.
- **Source Sans 3**: corpi di testo, didascalie, testi secondari. Pesi 400–600.

| Stile | Font | Dimensione / interlinea | Peso |
|---|---|---|---|
| Display (hero home) | Manrope | clamp(36px, 4.2vw, 54px) / 1.12 | 600 |
| H1 pagine interne | Manrope | clamp(32px, 3.6vw, 46px) / 1.15 | 600 |
| H2 sezione | Manrope | clamp(27px, 2.6vw, 36px) / 1.2 | 600 |
| H3 | Manrope | 20–22px / 1.35 | 600 |
| Lead | Manrope | 18–19px / 1.6 | 400 |
| Body | Source Sans 3 | 17px / 1.65 | 400 |
| Small | Source Sans 3 | 15px / 1.6 | 400 |
| Overline | Source Sans 3 | 14px / 1.4, maiuscolo, spaziatura 0.06em | 600, colore `--blue` |

Spaziatura delle lettere dei titoli: −0.02em al massimo. Lunghezza della riga del testo: massimo 72 caratteri (`--measure: 720px`).

## Spaziature e layout

- **Unità base:** 8px. Scala 8 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96.
- **Contenitore:** max 1200px (`--container`), margini laterali 24px (20px sotto i 400px).
- **Sezioni:** 96px verticali su desktop, 64px su tablet, 56px su mobile.
- **Componenti:** padding 24px (default), 32px (rilassato), 16px (compatto).
- **Griglia:** 12 colonne logiche; preferire 2, 3 o 4 colonne uguali. Su mobile una colonna, nessuno scorrimento orizzontale salvo gallery e loghi.

## Raggi

| Token | Valore | Uso |
|---|---|---|
| — | 0 | Fasce a tutta larghezza, sezioni, tabelle |
| `--radius-sm` | 2px | Chip, piccoli indicatori |
| `--radius` | 4px | Pulsanti, campi, card, immagini nelle card |
| `--radius-lg` | 6px | Pannelli fluttuanti (mega menu), dialog |

Niente pulsanti a pillola, niente cerchi decorativi (solo i pallini di stato).

## Elevazione

Design piatto: la profondità si ottiene con bordi e campiture.
- **Card e pannelli:** nessuna ombra, bordo 1px `--line`.
- **Menu a tendina / mega menu:** `0 1px 3px rgb(0 0 0 / 6%)` + bordo.
- **Dialog:** `0 4px 12px rgb(0 0 0 / 8%)`.

## Componenti

### Pulsanti (`ArrowLink`, `.button`)
- **Primario:** fondo `--blue`, testo bianco, hover `--blue-dark`. Altezza 48px (56px nell'hero), padding orizzontale 24px, raggio 4px, Manrope 600 15px, freccia a destra.
- **Secondario:** fondo `--surface`, testo `--blue`, bordo 2px `--blue`, hover fondo `--azzurro-tint`.
- **Link testuale:** testo `--blue` sottolineato (offset 4px), freccia; hover colore `--blue-dark`.
- Su fondi scuri: primario bianco con testo `--blue-dark`.
- Focus: outline 3px `--blue` offset 3px (bianco su fondi scuri).

### Card
- Fondo `--surface`, bordo 1px `--line`, raggio 4px, padding 24px.
- Variante d'accento: bordo superiore 4px `--azzurro`.
- Hover (solo se l'intera card è un link): bordo `--blue`, titolo sottolineato. Nessuno spostamento, nessuno zoom.

### Riquadro informativo
- Fondo `--surface` o `--azzurro-tint`, bordo sinistro 4px `--azzurro`, padding 24px. Per autorizzazioni, dati istituzionali, avvisi.

### Moduli
- Etichetta sempre visibile sopra il campo, Source Sans 3 16px 600, 8px sopra il campo.
- Campi obbligatori: testo “(obbligatorio)” dopo l'etichetta, mai solo l'asterisco.
- Campo: altezza ≥48px, testo 16px, bordo 2px `--line-strong`, raggio 4px; focus bordo `--blue` + outline 3px.
- Errore: bordo `--error`, messaggio con testo esplicito.
- I placeholder non sostituiscono mai l'etichetta.

### Navigazione
- Header bianco con filetto inferiore, logo a sinistra, voci testuali (Manrope 500 15px). Voce attiva: filetto inferiore 3px `--azzurro` + testo `--blue`.
- Mega menu: pannello squadrato, raggio 6px, bordo, ombra media; link con titolo e descrizione.
- Mobile: menu a schermo intero, voci grandi, sottomenu ad apertura.
- Breadcrumb in tutte le pagine interne.

### Elenchi e timeline
- Righe ≥52px, divisori 1px `--line`. Elemento attivo: fondo `--azzurro-tint` + bordo sinistro 4px `--azzurro`.
- Timeline: anno in Manrope 600 `--blue`, filetto verticale `--line`, marcatore quadrato 12px `--azzurro`.

### Immagini
- Fotografie reali GiCo, raggio 4px (0 se a tutta larghezza). Nessun filtro colore, nessuna cornice decorativa, nessuna ombra sfalsata.
- Dimensioni sempre dichiarate (`next/image`), testo alternativo descrittivo.

## Movimento
- Consentiti: comparsa leggera delle sezioni (opacità + 16px, 500ms, una volta), transizioni di colore e bordo (150–200ms), scorrimento continuo della gallery e dei loghi (in pausa al passaggio e con “riduci movimento”).
- Vietati: zoom delle immagini al passaggio, elementi fluttuanti o pulsanti, parallasse, effetti cursore, animazioni dei titoli lettera per lettera.
- `prefers-reduced-motion: reduce` disattiva ogni animazione.

## Testi
- Italiano istituzionale, chiaro e concreto. Frasi brevi, verbi attivi.
- Usare i nomi completi dei centri almeno una volta per pagina.
- Nessun dato, numero, partner o riconoscimento non verificato. I contenuti mancanti si segnalano come “segnaposto” in modo evidente.
- Non nominare atenei (Pegaso, Mercatorum, San Raffaele): la formazione universitaria si descrive in modo generico.

## Da evitare (anti-slop)
1. Etichette colorate “badge” sopra ogni titolo.
2. Titoli costruiti come “Frase, *parola colorata.*”.
3. Gradienti, vetro sfocato, ombre colorate o sfalsate, cerchi decorativi.
4. Pulsanti a pillola con icona in un cerchio.
5. Numerazioni decorative (01, 02, 03) senza funzione.
6. Animazioni d'effetto (pulsazioni, fluttuazioni, zoom, cursori simulati).
7. Testi riempitivi generici (“in movimento”, “momenti di vita, insieme”).
8. Emoji nei titoli e nei pulsanti.

## Regole di accessibilità (da GovKit)
1. Contrasto AAA (7:1) per il testo normale, 4.5:1 per il testo grande.
2. Focus visibile (3px) su ogni elemento interattivo.
3. Mai il solo colore per comunicare un'informazione.
4. “(obbligatorio)” al posto dell'asterisco.
5. Etichette sempre visibili.
6. Target minimi 44 × 44px.
7. Nessuna scrollbar personalizzata, nessuna alterazione del focus nativo.
8. Ruoli e attributi ARIA corretti, regioni live dove servono.
9. Nessuna interazione disponibile solo al passaggio del mouse.
