"use client";
import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";
import { useRouter } from "next/navigation";
import styles from './page.module.scss'

export default function InterceptedImagePage({ params }) {
  const router = useRouter();

  const newsItemSlug = params.newsSlug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );
  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className={styles.modalBackdrop} onClick={router.back} />
      <dialog className={styles.modal} open>
        <div>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
