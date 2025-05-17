"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

export function SignInButton() {
  return <Button onClick={() => signIn("github")}>Sign in with GitHub</Button>;
}

export function SignOutButton() {
  const { data: session } = useSession();
  if (!session) return null;
  return (
    <Button variant="outline" onClick={() => signOut()}>
      Sign Out
    </Button>
  );
}
