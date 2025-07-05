import styles from "./page.module.css";
import { UserStatus } from "@/components";

export default function Home() {
  return (
    <main className={styles.page}>
      <UserStatus />
    </main>
  );
}
