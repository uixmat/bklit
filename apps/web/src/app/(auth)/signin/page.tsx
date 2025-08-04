"use client";

import { Button } from "@bklit/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@bklit/ui/components/card";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { authClient } from "@/auth/client";

function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="font-semibold tracking-tight text-2xl">
            Sign in
          </CardTitle>
          <CardDescription>
            Access your Bklit Analytics dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() =>
              authClient.signIn.social({
                provider: "github",
                callbackURL: callbackUrl,
              })
            }
            size="lg"
          >
            Sign in with GitHub
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense>
      <LoginPage />
    </Suspense>
  );
}
