import Link from "next/link";
import styles from "./page.module.scss";
import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList/NewsList";

export default function NewsPage() {
  return (
    <div>
      <h1>NEWS PAGE</h1>

      <NewsList news={DUMMY_NEWS} />
    </div>
  );
}
