import Image from "next/image";
import styles from "./page.module.css";
import { UserStatus } from "@/components";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <UserStatus />
      </main>
      <footer className={styles.footer}>
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        <p>Task for Dekamond</p>
      </footer>
    </div>
  );
}
