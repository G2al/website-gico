# Pannello News GiCo

Avvia MySQL e `npm run dev`, poi apri `http://localhost:3000/admin`.
Le credenziali iniziali sono definite nel file locale `.env.local`; non sono incluse nella repository.

## Configurazione

La connessione a MySQL è in `.env.local`, escluso da Git. Configura host, porta, nome del database, utente e password secondo il tuo ambiente.
`npm run db:setup` crea solo le tabelle con prefisso `gico_` e importa l'archivio originale. Può essere ripetuto: non sovrascrive le notizie o l'amministratore già presenti.
I campi `ADMIN_INITIAL_*` servono solo alla prima configurazione e possono poi essere rimossi.

## Gestione

- Crea o modifica titolo, testo, data, copertina e descrizione della foto.
- Il testo è semplice, non HTML: una riga vuota separa i paragrafi.
- Le bozze non sono pubbliche; la pubblicazione è immediata dopo il salvataggio (la data è editoriale, non un pianificatore).
- Il cestino rimuove la notizia dal sito senza cancellare i dati. Il ripristino la riporta in bozza.
- Le foto vengono convertite in WebP, massimo 1600px, senza metadati. Sono ammesse JPG/PNG/WebP fino a 5MB, non SVG o immagini animate.
- Le news pubbliche, gli articoli di dettaglio e le tre notizie in home leggono MySQL. Il contenuto originale è importato come testo; le gallerie HTML e i contenuti incorporati del vecchio CMS non vengono riprodotti come codice eseguibile.

## Sicurezza e produzione

Le password sono memorizzate come hash scrypt con sale casuale. Le sessioni durano 8 ore, sono revocabili e usano token casuali, salvati nel DB soltanto come hash. Cookie HttpOnly/SameSite Strict; Secure in produzione. Le scritture richiedono sessione, origine corretta e token CSRF. Il login è limitato a 15 tentativi per 15 minuti per il singolo account.

Il login debole richiesto è **solo locale**: l'accesso viene bloccato con `NODE_ENV=production`. Prima di pubblicare, sostituisci la password tramite lo script di reset, configura un utente MySQL dedicato (mai root), HTTPS e `APP_URL` corrispondente all'origine pubblica.
Per cambiare la password, imposta i campi `ADMIN_INITIAL_*` in `.env.local` (minimo 12 caratteri) ed esegui `npm run admin:password`. Poi rimuovi la password in chiaro dal file: il login usa soltanto l'hash nel database.

Le immagini caricate sono in `.data/news-images`, esclusa da Git. Il server deve avere un disco persistente scrivibile: per hosting serverless servirà uno storage esterno. Conserva backup sia del database sia di questa cartella. Le immagini dell'archivio iniziale sono in `public/images`.

Non esiste una registrazione pubblica e i segreti non sono inviati a React. Non pubblicare `.env.local` né il database locale root senza password.
