import { prisma } from "@bklit/db/client";
import { BillingSuccessDialog } from "@/components/dialogs/billing-success-dialog";
import { PageHeader } from "@/components/page-header";
import { PolarPricingTable } from "@/components/polar-pricing-table";
import { authenticated } from "@/lib/auth";

async function getOrganizationPlan(organizationId: string) {
  const organization = await prisma.organization.findUnique({
    where: { id: organizationId },
    select: {
      // plan: true,
      name: true,
      polarSubscriptionId: true,
    },
  });
  return (
    organization || {
      plan: "free",
      name: "Unknown Organization",
      polarSubscriptionId: null,
    }
  );
}

export default async function BillingPage({
  params,
  searchParams,
}: {
  params: Promise<{ organizationId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { organizationId } = await params;
  const resolvedSearchParams = await searchParams;
  const _session = await authenticated({
    callbackUrl: `/${organizationId}/billing`,
  });

  const organization = await getOrganizationPlan(organizationId);
  const showSuccessMessage = resolvedSearchParams?.purchase === "success";

  return (
    <div className="space-y-6 prose dark:prose-invert max-w-none">
      <PageHeader
        title={`${organization.name} - Billing`}
        description={`Manage subscription and billing information for ${organization.name}.`}
      />
      <BillingSuccessDialog isOpenInitially={showSuccessMessage} />

      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2>Available Plans</h2>
        </div>
        <div className="flex justify-center">
          <PolarPricingTable
            currentOrganizationId={organizationId}
            // currentPlanId={organization.plan}
            showCurrentPlan={true}
          />
        </div>
      </div>
    </div>
  );
}
