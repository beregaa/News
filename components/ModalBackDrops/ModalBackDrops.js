"use client";
import { useRouter } from "next/navigation";
import styles from "./ModalBackDrop.module.scss";

export default function ModalBackDrop() {
  const router = useRouter();

  return <div className={styles.modalBackdrop} onClick={router.back} />;
}
