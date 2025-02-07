import Link from "next/link";
import styles from "./page.module.scss";
import NewsList from "@/components/NewsList/NewsList";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const news = await getAllNews();

  
  return (
    <div>
      <h1>NEWS PAGE</h1>

      <NewsList news={news} />
    </div>
  );
}
