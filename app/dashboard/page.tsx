"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./dashboard.module.scss";
import { useAuth } from "@/context/auth-context";
import Image from "next/image";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("Dashboard component mounted", user);
    if (!loading && !user) router.push("/auth");
  }, [user, loading, router]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <div className={styles.container}>
      <div>
        {user.picture && (
          <Image
            width={200}
            height={200}
            alt="User profile"
            src={user.picture}
          />
        )}
        <h1> {user.name} </h1>
      </div>
      <div>
        <p>ایمیل: {user.email}</p>
        <p>شماره موبایل: {user.phone}</p>
      </div>
    </div>
  );
}
