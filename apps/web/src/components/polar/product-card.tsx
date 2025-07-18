import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PolarBenefit, PolarProduct } from "@/lib/polar";

interface ProductCardProps {
  product: PolarProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const displayPrice = useMemo(() => {
    if (!product.prices || product.prices.length === 0) {
      if (product.type === "free") return "Free";
      return "Contact us";
    }
    const firstPrice = product.prices[0];

    if (firstPrice.type === "recurring") {
      return `$${(firstPrice.price_amount || 0) / 100} / ${
        firstPrice.recurring_interval || "month"
      }`;
    }
    if (firstPrice.type === "one_time") {
      return `$${(firstPrice.price_amount || 0) / 100}`;
    }
    if (firstPrice.price_amount !== undefined) {
      return `$${firstPrice.price_amount / 100}`;
    }
    return "N/A";
  }, [product]);

  const benefits = product.benefits || product.features || [];

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
            {benefits.map((benefit: PolarBenefit, index: number) => (
              <li key={benefit.id || index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>{benefit.description || "Benefit"}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter>
        {product.id ? (
          <Button asChild className="w-full">
            <Link href={`/checkout?products=${product.id}`}>
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
