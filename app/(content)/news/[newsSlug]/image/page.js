import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsImagePage({ params }) {
  const newsItemSlug = params.newsSlug;

  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <div>
      <img src={`/images/news/${newsItem.image}`} />
    </div>
  );
}
