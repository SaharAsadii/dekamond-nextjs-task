import Image from "next/image";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        aria-hidden
        src="/file.svg"
        alt="File icon"
        width={16}
        height={16}
      />
      <p> Dekamond Task</p>
    </footer>
  );
};
