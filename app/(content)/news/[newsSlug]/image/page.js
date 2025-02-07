import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function NewsImagePage({ params }) {
  const newsItemSlug = params.newsSlug;

  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div>
      <img src={`/images/news/${newsItem.image}`} />
    </div>
  );
}
