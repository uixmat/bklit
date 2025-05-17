import Link from "next/link";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ProductCardProps {
  product: any; // Should be Product
}

// Helper to format price
// const formatPrice = (price: ProductPrice | undefined): string => {
//   if (!price) return "N/A";
//   switch (price.type) { // Assuming 'type' instead of 'amountType' from generic structure
//     case "one_time": // Common term for fixed price
//     case "fixed": // From older example
//       return `$${(price.price_amount || 0) / 100}`; // Assuming 'price_amount'
//     case "recurring": // Common term for subscription
//       return `$${(price.price_amount || 0) / 100} / ${price.recurring_interval || 'month'}`;
//     case "free":
//       return "Free";
//     default:
//       return "Pay what you want";
//   }
// };

export const ProductCard = ({ product }: ProductCardProps) => {
  // The Polar API returns prices in cents.
  // This example assumes a single 'fixed' or 'one_time' price for simplicity,
  // or the first price if multiple exist.
  // Adapt this based on your actual product and price structures from Polar.
  const displayPrice = useMemo(() => {
    if (!product.prices || product.prices.length === 0) {
      if (product.type === "free") return "Free"; // Check product type if prices array is empty/missing
      return "Contact us";
    }
    const firstPrice = product.prices[0]; // Using 'any' due to Product type issue

    if (firstPrice.type === "recurring") {
      return `$${(firstPrice.price_amount || 0) / 100} / ${
        firstPrice.recurring_interval || "month"
      }`;
    }
    if (firstPrice.type === "one_time") {
      return `$${(firstPrice.price_amount || 0) / 100}`;
    }
    // Fallback for 'fixed' or other types if needed, or if type is not 'recurring'/'one_time'
    if (firstPrice.price_amount !== undefined) {
      return `$${firstPrice.price_amount / 100}`;
    }
    return "N/A";
  }, [product]);

  const benefits = product.benefits || product.features || []; // Adjust based on actual property name

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{product.name || "Unnamed Product"}</CardTitle>
        <CardDescription>
          {product.description || "No description available."}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-3xl font-bold mb-4">{displayPrice}</p>
        {benefits.length > 0 && (
          <ul className="space-y-2">
            {benefits.map(
              (
                benefit: any,
                index: number // benefit should be Benefit type
              ) => (
                <li key={benefit.id || index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{benefit.description || "Benefit"}</span>
                </li>
              )
            )}
          </ul>
        )}
      </CardContent>
      <CardFooter>
        {product.id ? (
          <Button asChild className="w-full">
            <Link href={`/checkout?productId=${product.id}`}>
              {product.type === "free" ? "Get Started" : "Upgrade"}
            </Link>
          </Button>
        ) : (
          <Button className="w-full" disabled>
            Not Available
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
