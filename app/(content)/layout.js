import MainHeader from "@/components/MainHeader/MainHeader";
import "../globals.css";
import styles from "./layout.module.scss";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.mainPage}>
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
