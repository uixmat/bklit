import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmation - Thank You!",
  description: "Your checkout is being processed.",
};

export default function ConfirmationPage({
  searchParams,
}: {
  searchParams: {
    checkoutId?: string;
    // Polar might also return subscriptionId or orderId, depending on the product type
    subscription_id?: string;
    order_id?: string;
  };
}) {
  const { checkoutId, subscription_id, order_id } = searchParams;

  // Note: The Polar documentation states:
  // "The checkout is not considered "successful" yet however.
  // It's initially marked as `confirmed` until you've received a webhook event
  // `checkout.updated` with a status set to `succeeded`."
  // So, this page is more of a "processing" page.
  // Real-time updates or final confirmation should be handled via webhooks and potentially client-side polling or sockets.

  return (
    <section className="container flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] gap-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-md flex-col items-center gap-6 text-center">
        <CheckCircleIcon className="h-16 w-16 text-green-500" />
        <h1 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-4xl">
          Thank You!
        </h1>
        <p className="text-lg text-muted-foreground">
          Your checkout has been initiated and is now being processed. You will
          receive an email confirmation shortly.
        </p>
        {checkoutId && (
          <p className="text-sm text-muted-foreground">
            Checkout ID: {checkoutId}
          </p>
        )}
        {(subscription_id || order_id) && (
          <p className="text-sm text-muted-foreground">
            {subscription_id ? `Subscription ID: ${subscription_id}` : ""}
            {order_id ? `Order ID: ${order_id}` : ""}
          </p>
        )}
        <p className="text-sm text-muted-foreground">
          Your plan will be updated once the payment is successfully confirmed.
          This might take a few moments.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full">
          <Button asChild className="w-full">
            <Link href="/">Go to Dashboard</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/billing">View Billing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
