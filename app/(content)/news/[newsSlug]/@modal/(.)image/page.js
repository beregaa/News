import { notFound } from "next/navigation";

import styles from "./page.module.scss";
import ModalBackDrop from "@/components/ModalBackDrops/ModalBackDrops";
import { getNewsItem } from "@/lib/news";

export default async function InterceptedImagePage({ params }) {
  const newsItemSlug = params.newsSlug;
  const newsItem = await getNewsItem(newsItemSlug);
  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackDrop />
      <dialog className={styles.modal} open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
