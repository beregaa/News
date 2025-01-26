import NewsList from "@/components/NewsList/NewsList";
import { getLatestNews } from "@/lib/news";

export default function LatesNewstPage() {
  const latestNews = getLatestNews();
  return (
    <div>
      <h1> Latest Page</h1>
      <NewsList news={latestNews} />
    </div>
  );
}
