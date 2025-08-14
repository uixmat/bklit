import { buttonVariants } from "@bklit/ui/components/button";
import { dashboardUrl } from "@bklit/utils/envs";
import Link from "next/link";

export default function MarketingHomePage() {
  return (
    <main className="flex  flex-col items-center">
      <div className="min-h-screen flex flex-col items-center justify-center">
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
              href={`${dashboardUrl()}`}
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
      </div>
    </main>
  );
}
