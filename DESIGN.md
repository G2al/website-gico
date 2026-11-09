# GiCo Design System (v3 – solare e dinamico)

Versione aggiornata dopo il feedback del cliente (novembre 2026): il design istituzionale squadrato è stato giudicato troppo statico. La nuova direzione è più calda, colorata e coinvolgente, ispirata a coopdedalus.it, mantenendo le regole di accessibilità di GovKit (`govkit-DESIGN.md`).

## Principi
- **Calda e accogliente:** colori pieni, forme morbide, decorazioni SVG leggere.
- **Due realtà riconoscibili a colpo d'occhio:**
  - Le Perle Preziose → **azzurro** (`.theme-perle`, `.section-perle`)
  - Edoardo Apicella → **blu** (`.theme-apicella`, `.section-apicella`)
  - Il **giallo** è l'accento comune (pulsanti su fondo colorato, evidenziazioni, icone).
- **Niente grigio e beige:** sfondi bianchi, azzurro chiaro e giallo chiaro.
- **Accessibile:** contrasto AA minimo (AAA per il testo corrente), focus visibile, target ≥44px, “riduci movimento” rispettato.

## Colori (token in `src/app/globals.css`)
| Token | Valore | Uso |
|---|---|---|
| `--bg` | #FFFFFF | Sfondo pagina |
| `--bg-alt` | #EAF6FA | Sezioni alternate (azzurro chiaro) |
| `--bg-warm` | #FFF6D6 | Sezioni calde (giallo chiaro) |
| `--blue` / `--blue-dark` | #2F4D6E / #1E3550 | Blu del logo, Centro di Formazione, testi forti |
| `--azzurro` / `--azzurro-dark` | #0089AB / #00708C | Azzurro del logo, Centro Sociale (testo bianco solo su `--azzurro-dark`) |
| `--giallo` | #F7B500 | Accento: pulsanti su fondi colorati, evidenziazioni, icone |
| `--giallo-tint` | #FFF1C2 | Chip ed evidenziazioni chiare |
| `--ink` / `--ink-2` | #1B2631 / #44515D | Testi |
| `--accent*` | variabile | Colore dell'area corrente (impostato dal tema) |

## Tipografia
- **Nunito** per tutto il sito. Titoli 800, testi 400, etichette e link 800.
- H1 clamp(36px, 4.8vw, 62px); H2 sezione clamp(30px, 3.2vw, 44px); titoli dei centri fino a 60px.
- Etichetta (`.kicker`): maiuscolo, 14px, 800, con pallino giallo.
- Evidenziazione (`.highlight`): sottolineatura gialla spessa dietro le parole chiave, al massimo una per titolo.

## Forme e spazi
- Raggi: `--radius` 18px (card, foto), `--radius-lg` 28px (blocchi grandi), `--radius-sm` pillola (pulsanti, chip).
- Ombre morbide: `--shadow-card`, `--shadow-hover`. Niente bordi grigi sulle card.
- Sezioni: 104px desktop / 72px tablet / 60px mobile. Contenitore `.wrap` max 1200px.

## Componenti
- **Pulsanti** (`ArrowLink`, `.arrow-link`): pillola, blu su fondo chiaro, **giallo** su fondo colorato; variante secondaria bianca/contorno; si sollevano leggermente al passaggio.
- **Link testuali** (`.text-link`): sottolineatura gialla spessa.
- **Card** (`.card`): bianche, arrotondate, con ombra; `.is-accent` aggiunge una barra superiore nel colore dell'area; al passaggio si sollevano.
- **Riquadro info** (`.info-box`): fondo tinta dell'area.
- **Intestazione pagine interne:** colorata secondo l'area (azzurro, blu o azzurro chiaro) con forme decorative e onda di chiusura.

## Decorazioni SVG (`src/components/decor.tsx`)
- `Wave`: onde tra sezioni di colore diverso.
- `Blob`, `Ring`, `Dots`, `Squiggle`, `Sparkle`: forme decorative assolute, `aria-hidden`, nascoste sotto i 600px.
- Animazioni lente (`.float-slow`, `.float-fast`), disattivate con “riduci movimento”.

## Movimento
- Consentiti: comparsa delle sezioni, sollevamento di card e pulsanti, leggero zoom delle foto al passaggio, forme fluttuanti lente, gallery e loghi a scorrimento.
- Sempre rispettare `prefers-reduced-motion`.

## Testi
- Italiano, chiaro e caldo. Nomi completi dei centri almeno una volta per pagina.
- Nessun dato non verificato; segnaposto evidenti per contenuti mancanti.
- Nessun riferimento ad atenei (Pegaso, Mercatorum, San Raffaele).
