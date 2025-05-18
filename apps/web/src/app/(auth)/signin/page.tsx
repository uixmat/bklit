"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Sign in</h1>
          <p className="mt-2">Access your Bklit Analytics dashboard.</p>
        </div>

        <Button onClick={() => signIn("github", { callbackUrl })} size="lg">
          Sign in with GitHub
        </Button>
      </div>
    </main>
  );
}
