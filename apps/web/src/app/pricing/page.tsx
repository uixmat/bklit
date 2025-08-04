import { PageHeader } from "@/components/page-header";
import { PolarPricingTable } from "@/components/polar-pricing-table";
import { PricingComparison } from "@/components/pricing-comparison";

export default function PricingPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Simple, Transparent Pricing"
        description="Choose the perfect plan for your organization. All plans include a 14-day free trial."
      />

      <PolarPricingTable />

      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Feature Comparison
          </h2>
          <p className="text-muted-foreground mt-2">
            See exactly what's included in each plan
          </p>
        </div>

        <PricingComparison />
      </div>
    </div>
  );
}
