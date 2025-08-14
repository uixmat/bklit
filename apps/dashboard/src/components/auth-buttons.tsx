"use client";

import { Button } from "@bklit/ui/components/button";
import { authClient } from "@/auth/client";

export function SignInButton() {
  return (
    <Button onClick={() => authClient.signIn.social({ provider: "github" })}>
      Sign in with GitHub
    </Button>
  );
}

export function SignOutButton() {
  return (
    <Button variant="outline" onClick={() => authClient.signOut()}>
      Sign Out
    </Button>
  );
}
