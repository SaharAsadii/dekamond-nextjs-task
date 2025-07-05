"use client";

import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { Button } from "../button";

export const UserStatus = () => {
  const { user } = useAuth();
  return (
    <div>
      <Button>
        <Link href={`/${user ? "dashboard" : "auth"}`}>
          {user ? "Dashboard" : "Login"}
        </Link>
      </Button>
    </div>
  );
};
