import { prisma } from "@bklit/db/client";
import polar, { SERVER_POLAR_ACCESS_TOKEN } from "./client";
import type { PolarProduct, SubscriptionPlanData } from "./types";

export async function getPublishedPolarProducts(): Promise<PolarProduct[]> {
  if (!SERVER_POLAR_ACCESS_TOKEN) {
    console.error(
      "Polar access token is not configured. Cannot fetch products.",
    );
    return [];
  }
  try {
    console.log("Fetching Polar products...");
    const productsIterator = await polar.products.list({
      isArchived: false,
    });

    const products: PolarProduct[] = [];
    for await (const page of productsIterator) {
      if (page?.result && Array.isArray(page.result.items)) {
        products.push(...(page.result.items as PolarProduct[]));
      } else if (Array.isArray(page)) {
        products.push(...(page as PolarProduct[]));
      } else if (
        page &&
        typeof page === "object" &&
        "items" in page &&
        Array.isArray((page as { items?: unknown[] }).items)
      ) {
        products.push(...(page as { items: PolarProduct[] }).items);
      } else {
        console.warn(
          "Unexpected page structure in Polar products iterator:",
          page,
        );
      }
    }
    console.log("Fetched products count:", products.length);
    return products;
  } catch (error) {
    console.error("Error fetching Polar products:", error);
    return [];
  }
}

export async function syncPolarProductsToDatabase(): Promise<void> {
  try {
    const polarProducts = await getPublishedPolarProducts();

    for (const product of polarProducts) {
      if (!product.id) continue;

      const firstPrice = product.prices?.[0];
      if (!firstPrice || !firstPrice.priceAmount) continue;

      // Create or update subscription plan
      await prisma.subscriptionPlan.upsert({
        where: { polarProductId: product.id },
        update: {
          name: product.name || "Unknown Product",
          description: product.description,
          type: firstPrice.type,
          priceAmount: firstPrice.priceAmount,
          interval: firstPrice.recurringInterval,
          isActive: !product.type?.includes("archived"),
          updatedAt: new Date(),
        },
        create: {
          polarProductId: product.id,
          name: product.name || "Unknown Product",
          description: product.description,
          type: firstPrice.type,
          priceAmount: firstPrice.priceAmount,
          interval: firstPrice.recurringInterval,
          isActive: !product.type?.includes("archived"),
        },
      });

      // Sync benefits
      const benefits = product.benefits || product.features || [];
      const plan = await prisma.subscriptionPlan.findUnique({
        where: { polarProductId: product.id },
      });

      if (plan) {
        // Remove existing benefits
        await prisma.subscriptionPlanBenefit.deleteMany({
          where: { planId: plan.id },
        });

        // Add new benefits
        for (const benefit of benefits) {
          await prisma.subscriptionPlanBenefit.create({
            data: {
              planId: plan.id,
              name: benefit.description || "Benefit",
              description: benefit.description,
              type: "feature",
            },
          });
        }
      }
    }

    console.log("Successfully synced Polar products to database");
  } catch (error) {
    console.error("Error syncing Polar products to database:", error);
    throw error;
  }
}

export async function getLocalSubscriptionPlans(): Promise<
  SubscriptionPlanData[]
> {
  try {
    const plans = await prisma.subscriptionPlan.findMany({
      where: { isActive: true, isArchived: false },
      include: {
        benefits: true,
      },
      orderBy: { priceAmount: "asc" },
    });

    return plans.map((plan) => ({
      id: plan.id,
      polarProductId: plan.polarProductId,
      name: plan.name,
      description: plan.description || undefined,
      type: plan.type,
      priceAmount: plan.priceAmount,
      currency: plan.currency,
      interval: plan.interval || undefined,
      isActive: plan.isActive,
      benefits: plan.benefits.map((benefit) => ({
        id: benefit.id,
        name: benefit.name,
        description: benefit.description || undefined,
        type: benefit.type || undefined,
        value: benefit.value || undefined,
      })),
    }));
  } catch (error) {
    console.error("Error fetching local subscription plans:", error);
    return [];
  }
}

// Environment variable for specific product IDs
export const POLAR_PRO_PRODUCT_ID =
  process.env.NEXT_PUBLIC_POLAR_PRO_PLAN_PRODUCT_ID;
