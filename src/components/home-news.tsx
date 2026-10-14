import { NewsSection } from "./news-section";
import { publishedNews } from "@/lib/server/news-store";
import { newsDateLabel, newsMonthLabel, newsTitle } from "@/lib/news-archive";
export async function HomeNews() {
  let articles;
  try { articles = await publishedNews(); } catch { return <section className="news-section"><h2>News</h2><p>Le notizie sono temporaneamente non disponibili.</p></section>; }
  return <NewsSection newsArticles={articles.slice(0, 3).map(article => ({ id: String(article.id), title: newsTitle(article), date: article.date, day: article.date.slice(8), month: newsMonthLabel(article.date.slice(0, 7)).slice(0, 3).toUpperCase(), dateLabel: newsDateLabel(article.date), image: article.image, alt: article.imageAlt, href: article.href }))} />;
}
