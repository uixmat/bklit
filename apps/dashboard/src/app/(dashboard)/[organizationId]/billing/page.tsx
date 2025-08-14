import { headers } from "next/headers";
import { auth } from "@/auth/server";
import { BillingSuccessDialog } from "@/components/dialogs/billing-success-dialog";
import { PageHeader } from "@/components/page-header";
import { PricingTable } from "@/components/plans/pricing-table";
import { authenticated } from "@/lib/auth";
import { api } from "@/trpc/server";

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

  const organization = await api.organization.fetch({ id: organizationId });
  const showSuccessMessage = resolvedSearchParams?.purchase === "success";

  const subscriptions = await auth.api.subscriptions({
    query: {
      page: 1,
      limit: 10,
      active: true,
      referenceId: organizationId,
    },
    headers: await headers(),
  });

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
          <PricingTable subscriptions={subscriptions.result.items} />
        </div>
      </div>
    </div>
  );
}
