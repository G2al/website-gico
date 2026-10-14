import archive from "./news-archive.json";

export type NewsEntry = {
  id: number;
  title: string;
  date: string;
  href: string;
  image: string | null;
  width: number;
  height: number;
  sourceImage: string | null;
};

// Copia statica dell'archivio pubblico GiCo; nessuna richiesta al CMS durante la navigazione.
export const newsArchive: readonly NewsEntry[] = archive;
export const newsDateLabel = (date: string) => new Intl.DateTimeFormat("it-IT", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
export const newsMonthLabel = (month: string) => new Intl.DateTimeFormat("it-IT", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${month}-01T12:00:00Z`));
export const newsTitle = (article: NewsEntry) => article.title || `Notizia del ${newsDateLabel(article.date)}`;
