import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SignInButton, SignOutButton } from "@/components/auth-buttons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to Your Analytics Tracker
        </h1>

        {session ? (
          <div className="space-y-4">
            <p className="text-lg">
              Signed in as {session.user?.email || session.user?.name}
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button>Go to Dashboard</Button>
              </Link>
              <SignOutButton />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-lg">Please sign in to continue.</p>
            <SignInButton />
          </div>
        )}
      </main>
    </div>
  );
}
