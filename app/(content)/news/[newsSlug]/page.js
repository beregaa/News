import { DUMMY_NEWS } from "@/dummy-news";
import styles from "./page.module.scss";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function newsSlug({ params }) {
  const newsSlug = params.newsSlug;

  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    console.log('aq ra debaaa!!');
    notFound();
  }
  return (
    <article className={styles.newsArticle}>
      <header>
        <Link href={`/news/${newsSlug}/image`}>
          <img src={`/images/news/${newsItem.image}`} />
        </Link>

        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
