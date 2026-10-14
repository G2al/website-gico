/* Punto di avvio Node.js per Plesk/Passenger e per npm start. */
process.env.NODE_ENV = process.env.NODE_ENV || "production";
process.chdir(__dirname);

const passenger = globalThis.PhusionPassenger;
if (passenger) passenger.configure({ autoInstall: false });

const { createServer } = require("node:http");
const next = require("next");
const port = passenger ? 3000 : Number(process.env.PORT || 3000);
const hostname = process.env.APP_BIND_HOST || "0.0.0.0";

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error("PORT deve essere un numero compreso tra 1 e 65535.");
  process.exit(1);
}

const app = next({ dev: process.env.NODE_ENV === "development", dir: __dirname, hostname, port });

app.prepare().then(() => {
  const handle = app.getRequestHandler();
  const server = createServer(async (request, response) => {
    try { await handle(request, response); }
    catch (error) {
      console.error("Errore durante la gestione della richiesta:", error);
      if (!response.headersSent) { response.statusCode = 500; response.end("Servizio temporaneamente non disponibile."); }
      else response.destroy();
    }
  });
  server.on("upgrade", app.getUpgradeHandler());
  server.on("error", error => { console.error("Impossibile avviare il server:", error); process.exit(1); });

  // Passenger gestisce il socket di ascolto; fuori da Plesk si usa PORT.
  if (passenger) server.listen("passenger", () => console.log("GiCo avviato con Passenger."));
  else server.listen(port, hostname, () => console.log(`GiCo avviato sulla porta ${port}.`));

  let stopping = false;
  const shutdown = () => {
    if (stopping) return;
    stopping = true;
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(1), 10000).unref();
  };
  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);
}).catch(error => { console.error("Avvio Next.js non riuscito. Verifica di aver eseguito npm run build:", error); process.exit(1); });
