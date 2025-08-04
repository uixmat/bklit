import { type NextRequest, NextResponse } from "next/server";
import {
  getPlanTypeByPolarProductId,
  PLAN_DETAILS,
  PlanType,
} from "@/lib/plans";

export async function GET(_request: NextRequest) {
  try {
    // const polarProducts = await getPublishedPolarProducts();

    // Start with our local plan definitions
    const plans: any[] = [];

    // Add free plan (always use our local definition)
    const freePlan = PLAN_DETAILS[PlanType.FREE];
    plans.push({
      id: PlanType.FREE,
      polarProductId: "free", // No Polar product ID for free plan
      name: freePlan.name,
      description: freePlan.description,
      type: "recurring",
      priceAmount: freePlan.price * 100, // Convert to cents
      currency: freePlan.currency,
      interval: freePlan.interval,
      isActive: true,
      benefits: freePlan.features.map((feature, index) => ({
        id: `free-benefit-${index}`,
        name: feature,
        description: feature,
        type: "feature",
        value: undefined,
      })),
    });

    const polarProducts: any[] = [];
    // Process Polar products and map to our plan structure
    for (const product of polarProducts) {
      if (!product.id || !product.prices || product.prices.length === 0) {
        continue;
      }

      const firstPrice = product.prices[0];
      if (!firstPrice) {
        continue;
      }

      // Check if this is our pro plan
      const planType = getPlanTypeByPolarProductId(product.id);
      const localPlan = PLAN_DETAILS[planType];

      // Only add if it's our pro plan
      if (planType === PlanType.PRO) {
        // Use Polar price if available, otherwise fallback to local plan
        const priceAmount = firstPrice.priceAmount || localPlan.price * 100;

        plans.push({
          id: planType,
          polarProductId: product.id,
          name: localPlan.name,
          description: localPlan.description,
          type: firstPrice.type,
          priceAmount: priceAmount,
          currency: firstPrice.priceCurrency?.toUpperCase() || "USD",
          interval: firstPrice.recurringInterval || localPlan.interval,
          isActive: true,
          benefits: localPlan.features.map((feature, index) => ({
            id: `pro-benefit-${index}`,
            name: feature,
            description: feature,
            type: "feature",
            value: undefined,
          })),
        });
      }
    }

    // Sort by price (free first, then pro)
    plans.sort((a, b) => a.priceAmount - b.priceAmount);

    return NextResponse.json(plans);
  } catch (error) {
    console.error("Error fetching subscription plans from Polar:", error);
    return NextResponse.json(
      { error: "Failed to fetch pricing information" },
      { status: 500 },
    );
  }
}
