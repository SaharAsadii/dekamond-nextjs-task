"use client";

import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { Button } from "../button";
import styles from "./header.module.scss";

export const Header = () => {
  const { logout, user } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth");
  };

  return (
    <header className={styles.header}>
      {user && <Button onClick={handleLogout}>خروج</Button>}
      <h1>DEKAMOND</h1>
    </header>
  );
};
