"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
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
          <Button onClick={() => signIn("github", { callbackUrl })} size="lg">
            Sign in with GitHub
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
