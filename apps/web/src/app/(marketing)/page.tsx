import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default async function MarketingHomePage() {
  const session = await getServerSession(authOptions);

  if (session && session.user?.id) {
    // TODO: Redirect correctly to [siteId]
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-extrabold tracking-tight">
          Welcome to Bklit Analytics
        </h1>
        <p className="text-2xl max-w-2xl mx-auto">
          Gain powerful insights into your website&apos;s traffic with our
          simple and effective analytics platform.
        </p>
        <div className="space-x-6">
          <Link
            href="/signin"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Get Started
          </Link>
          <Link
            href="#features"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Learn More
          </Link>
        </div>
      </div>
    </main>
  );
}
