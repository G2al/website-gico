# GiCo — Sito web

Sito istituzionale GiCo con pannello riservato per la gestione delle notizie.
Next.js, React, TypeScript, Tailwind CSS e MySQL/MariaDB.

## Sviluppo locale

Requisiti: Node.js compatibile con le dipendenze del progetto, npm e MySQL/MariaDB.

1. Installa le dipendenze con `npm ci`.
2. Copia `.env.example` in `.env.local` e imposta connessione al database, `APP_URL` e credenziali iniziali dell'amministratore.
3. Crea il database indicato nella configurazione.
4. Esegui `npm run db:setup` per creare le tabelle e importare le notizie originali.
5. Avvia `npm run dev` e apri `http://localhost:3000`. Il pannello è disponibile su `/admin`.

## Produzione

Imposta una connessione MySQL dedicata, un `APP_URL` HTTPS e una password amministratore di almeno 12 caratteri.

```bash
npm ci --include=dev
npm run build
npm run start
```

Le dipendenze di sviluppo sono necessarie durante la build. Il comando `db:setup` si esegue alla prima configurazione; non sovrascrive record esistenti. Per trasferire notizie già modificate, importa invece un backup del database.

Se trasferisci un account di sviluppo, imposta le nuove credenziali nei campi `ADMIN_INITIAL_*` ed esegui `npm run admin:password`. Il login locale debole è bloccato in produzione.

### Git e Plesk

Repository: `https://github.com/G2al/website-gico.git`, ramo `main`.
Collega la repository nell'estensione Git di Plesk. Gli aggiornamenti si inviano dal PC con:

```bash
git add src public scripts docs README.md app.js package.json package-lock.json next.config.ts
git commit -m "Aggiornamento sito GiCo"
git push
```

Il push non aggiorna automaticamente Plesk finché non sono configurati il pull/deploy e le eventuali azioni aggiuntive.

Con il progetto distribuito in `/httpdocs`, imposta nell'estensione Node.js:

- Application Root: `/httpdocs`.
- Document Root: `/httpdocs/public`, così sorgenti e configurazioni non sono nella cartella pubblica.
- Application Startup File: `app.js`.
- Application Mode: `Production`.
- Versione Node.js: 24, oppure una versione compatibile con tutte le dipendenze installate.

Configura le variabili d'ambiente sul server, poi esegui `npm ci --include=dev`, `npm run db:setup` solo alla prima installazione su un database nuovo, e `npm run build`. Infine premi **Restart App** in Plesk. Non avviare un secondo processo con `npm start` quando l'app è già gestita da Passenger.

`app.js` riconosce Passenger e utilizza il suo socket. Fuori da Plesk, `npm start` avvia lo stesso server sulla porta `PORT` (3000 per impostazione predefinita). Per lo sviluppo resta disponibile `npm run dev`.

Per gli aggiornamenti successivi: pull/deploy, `npm ci --include=dev`, `npm run build`, **Restart App**. Non eseguire nuovamente il setup del database ad ogni deploy. In caso di cambiamenti futuri allo schema, seguire le relative istruzioni di migrazione.

Non pubblicare `.env.local`. Configura le variabili sul server e conserva la directory `.data/news-images` su disco persistente, scrivibile e non eliminato durante i deploy. I backup devono comprendere database e immagini caricate.

## Documentazione

[Gestione News e sicurezza](docs/PANNELLO-NEWS.md)
