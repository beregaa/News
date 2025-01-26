import styles from "./layout.module.scss";
export default function ArchivePage({ archive, latest }) {
  return (
    <div>
      <h1>Archive Page</h1>

      <section className={styles.archiveFilter}>{archive}</section>
      <section>{latest}</section>
    </div>
  );
}
