import NewsList from "@/components/NewsList/NewsList";
import { getLatestNews } from "@/lib/news";

export default async function LatesNewstPage() {
  const latestNews =  await getLatestNews();
  return (
    <div>
      <h1> Latest Page</h1>
      <NewsList news={latestNews} />
    </div>
  );
}
