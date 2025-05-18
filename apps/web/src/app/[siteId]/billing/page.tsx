import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPublishedPolarProducts } from "@/lib/polar";
import { ProductCard } from "@/components/polar/product-card";
import { BillingSuccessDialog } from "@/components/billing-success-dialog";

async function getUserPlan(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { plan: true },
  });
  return user?.plan || "free"; // Default to free if not found, though should always exist
}

export default async function BillingPage({
  params,
  searchParams,
}: {
  params: { siteId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    redirect(
      `/login?callbackUrl=${encodeURIComponent(`/${params.siteId}/billing`)}`
    );
  }

  const userPlan = await getUserPlan(session.user.id);
  const products = await getPublishedPolarProducts();
  const showSuccessMessage = searchParams?.purchase === "success";

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
      <BillingSuccessDialog isOpenInitially={showSuccessMessage} />

      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Billing & Subscription
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Manage your subscription and billing details.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            You are currently on the{" "}
            <span className="font-semibold capitalize">{userPlan}</span> plan.
          </p>
          {userPlan === "free" && (
            <div>
              <p className="text-muted-foreground mb-3">
                Upgrade to access more features and support our development.
              </p>
            </div>
          )}
          {userPlan === "pro" && (
            <div>
              <p className="text-muted-foreground">
                Thank you for being a Pro member!
              </p>
              {/* TODO: Add link to Polar customer portal if available/integrated */}
              {/* <Button variant="outline">Manage Subscription</Button> */}
            </div>
          )}
        </CardContent>
      </Card>

      {products.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-center mb-6">
            Available Plans
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
