import { notFound } from "next/navigation";
import styles from "./NewsList.module.scss";
import Link from "next/link";

export default function NewsList({ news }) {

  return (
    <ul className={styles.newsList}>
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
