"use client";

import { authClient } from "@/auth/client";
import { Button } from "@/components/ui/button";

export function SignInButton() {
  return <Button onClick={() => authClient.signIn.social({ provider: "github" })}>Sign in with GitHub</Button>;
}

export function SignOutButton() {
  return (
    <Button variant="outline" onClick={() => authClient.signOut()}>
      Sign Out
    </Button>
  );
}
