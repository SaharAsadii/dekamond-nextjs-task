"use client";

import Link from "next/link";
import { useAuth } from "@/context/auth-context";

export const UserStatus = () => {
  const { user } = useAuth();
  return (
    <div>
      <Link href="/auth">{user ? "Dashboard" : "Login"}</Link>
    </div>
  );
};
