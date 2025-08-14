"use client";

import plans from "@bklit/auth/pricing-plans.json";
import { Badge } from "@bklit/ui/components/badge";
import { Button } from "@bklit/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@bklit/ui/components/card";
import type { CustomerSubscription } from "@polar-sh/sdk/models/components/customersubscription.js";
import type { Subscription } from "@polar-sh/sdk/models/components/subscription.js";
import { Check, Crown, Star } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/auth/client";
import { useWorkspace } from "@/contexts/workspace-provider";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function PricingTable({
  subscriptions,
}: {
  subscriptions: Subscription[] | CustomerSubscription[];
}) {
  const { activeOrganization } = useWorkspace();

  const currentPlan = subscriptions.find(
    (subscription) => subscription.status === "active",
  );

  const isCurrentPlan = (planId: string | null) => {
    return planId === currentPlan?.productId;
  };

  return (
    <div className="w-full max-w-4xl flex flex-col items-center gap-6">
      <Button
        onClick={async () => {
          await authClient.customer.portal();
        }}
      >
        Manage subscription
      </Button>
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 w-full">
        {plans.map((plan) => (
          <Card key={plan.name}>
            {plan.name.toLowerCase().includes("pro") && (
              <div className="flex justify-center">
                <Badge className="bg-primary text-primary-foreground px-3 py-1">
                  <Star size={12} />
                  Most Popular
                </Badge>
              </div>
            )}

            {isCurrentPlan(plan.polarProductId) && (
              <div className="flex justify-center">
                <Badge variant="secondary" className="px-3 py-1">
                  <Crown size={12} />
                  Current
                </Badge>
              </div>
            )}

            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {plan.description}
              </CardDescription>

              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl font-bold">
                  {formatPrice(plan.price)}
                </span>
                {plan.price > 0 && plan.interval && (
                  <span className="text-muted-foreground">
                    /{plan.interval}
                  </span>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-4 flex-1">
              {/* Features List */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Features
                </h4>
                <ul className="space-y-2">
                  {plan.benefits.length > 0 ? (
                    plan.benefits.map((benefit) => (
                      <li
                        key={benefit.id}
                        className="flex items-center gap-3 text-sm"
                      >
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{benefit.description || benefit.name}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-muted-foreground">
                      No features listed
                    </li>
                  )}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <CheckoutButton plan={plan} currentPlan={currentPlan} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

const CheckoutButton = ({
  plan,
  currentPlan,
}: {
  plan: (typeof plans)[number];
  currentPlan?: Subscription | CustomerSubscription;
}) => {
  const isCurrent = plan.polarProductId === currentPlan?.productId;
  const { activeOrganization } = useWorkspace();

  if (isCurrent) {
    return (
      <Button variant="outline" className="w-full" disabled>
        Current Plan
      </Button>
    );
  }

  // If user is on free plan and this is the pro plan, show upgrade button
  if (plan.name === "Pro" && !isCurrent) {
    return (
      <Button
        className="w-full"
        onClick={async () => {
          await authClient.checkout({
            products: [plan.polarProductId],
            referenceId: activeOrganization?.id,
          });
        }}
      >
        Upgrade to Pro
      </Button>
    );
  }

  // If this is the free plan and user is not on it, show downgrade/get started
  if (plan.name === "Free") {
    return (
      <Button
        variant="outline"
        className="w-full"
        onClick={async () => {
          await authClient.checkout({
            products: [plan.polarProductId],
            referenceId: activeOrganization?.id,
          });
        }}
      >
        Downgrade
      </Button>
    );
  }

  // Default case
  return (
    <Button asChild className="w-full">
      <Link href={`/${activeOrganization?.id}/billing`}>Get Started</Link>
    </Button>
  );
};
