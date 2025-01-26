import Link from "next/link";

import styles from "./MainHeader.module.scss";
import NavLink from "./NavLink/NavLink";

export default function MainHeader() {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.logo}>
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href={"/news"}>News</NavLink>
          </li>
          <li>
            <NavLink href={"/archive"}>Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
