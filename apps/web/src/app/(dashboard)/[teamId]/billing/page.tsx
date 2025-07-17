import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPublishedPolarProducts } from "@/lib/polar";
import { PageHeader } from "@/components/page-header";
import { ProductCard } from "@/components/polar/product-card";
import { BillingSuccessDialog } from "@/components/dialogs/billing-success-dialog";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { getTeamBillingData } from "@/actions/billing-actions";

export default async function BillingPage({
  params,
  searchParams,
}: {
  params: Promise<{ teamId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { teamId } = await params;
  const resolvedSearchParams = await searchParams;
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    redirect(`/login?callbackUrl=${encodeURIComponent(`/${teamId}/billing`)}`);
  }

  const team = await getTeamBillingData(teamId);

  if (!team) {
    redirect("/");
  }
  const products = await getPublishedPolarProducts();
  const showSuccessMessage = resolvedSearchParams?.purchase === "success";

  return (
    <div className="space-y-6 prose dark:prose-invert max-w-none">
      <PageHeader
        title={`${team.name} - Billing`}
        description={`Manage subscription and billing information for ${team.name}.`}
      />
      <BillingSuccessDialog isOpenInitially={showSuccessMessage} />

      <Card className="card">
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">Team</p>
            <div className="flex items-center gap-2">
              <Users className="size-4 text-muted-foreground" />
              <p className="text-lg font-semibold">{team.name}</p>
              <Badge variant="outline" className="ml-2">
                {team.plan} Plan
              </Badge>
            </div>
          </div>
          <p className="text-lg">
            This team is currently on the{" "}
            <span className="font-semibold capitalize">{team.plan}</span> plan.
          </p>
          {team.plan === "free" && (
            <div>
              <p className="text-muted-foreground mb-3">
                Upgrade to access more features and support our development.
              </p>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Limited to 3 projects per team</p>
                <p>• Basic analytics and insights</p>
                <p>• Community support</p>
              </div>
            </div>
          )}
          {team.plan === "pro" && (
            <div>
              <p className="text-muted-foreground mb-3">
                Thank you for being a Pro member!
              </p>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Unlimited projects per team</p>
                <p>• Advanced analytics and insights</p>
                <p>• Priority support</p>
                <p>• Custom domains</p>
              </div>
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
