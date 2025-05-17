import { getPublishedPolarProducts } from "@/lib/polar";
import { ProductCard } from "@/components/polar/product-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Upgrade Your Plan",
  description: "Choose the plan that best suits your needs.",
};

// Revalidate a specific page every 60 seconds
export const revalidate = 60;

export default async function PricingPage() {
  const products = await getPublishedPolarProducts();

  return (
    <section className="container flex flex-col items-center gap-6 py-8 md:max-w-5xl md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-5xl">
        <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-5xl text-center">
          Pricing
        </h2>
        <p className="max-w-xl text-center text-lg text-muted-foreground sm:text-xl mx-auto">
          Choose the plan that&apos;s right for you. Unlock more features and
          support the project.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Manual Free Plan Card - consider moving this to Polar if you want one source of truth */}
        <ProductCard
          product={{
            id: "free-plan-manual",
            name: "Free",
            description:
              "For personal use and small projects. Get a feel for our platform.",
            type: "free",
            prices: [{ type: "free", price_amount: 0 }],
            benefits: [
              { id: "fpb1", description: "1 Project" },
              { id: "fpb2", description: "Basic Analytics" },
              { id: "fpb3", description: "Community Support" },
            ],
          }}
        />

        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="md:col-span-2 text-center text-muted-foreground">
            No paid plans available at the moment. Check back soon!
          </p>
        )}
      </div>
    </section>
  );
}
