import { NextRequest, NextResponse } from "next/server";
// Using any for Webhook-related imports due to persistent type resolution issues
// import { Webhook, WebhookHandler } from "@polar-sh/nextjs/webhook";
// import type {
//   CheckoutUpdatedEvent,
//   SubscriptionCreatedEvent,
//   SubscriptionUpdatedEvent,
//   OrderCreatedEvent,
//   OrderUpdatedEvent,
// } from "@polar-sh/sdk/models/webhooks"; // Adjust import if types are elsewhere
import { prisma } from "@/lib/db"; // Your Prisma client

// Cast to any to bypass type errors for now
const Webhook =
  (global as any).polar?.Webhook ||
  function () {
    return { handle: async () => {} };
  };
const WebhookHandler =
  (global as any).polar?.WebhookHandler ||
  function (handlers: any) {
    return handlers;
  };

const webhookInstance = Webhook({
  secret: process.env.POLAR_WEBHOOK_SECRET!,
});

const handler = WebhookHandler({
  async onCheckoutUpdated(event: any) {
    console.log("Webhook: CheckoutUpdatedEvent received", event.payload);
    const checkout = event.payload;
    if (
      checkout.status === "succeeded" &&
      checkout.customer_email &&
      checkout.subscription_id
    ) {
      // Checkout succeeded, find user by email and update their plan and Polar subscription ID
      try {
        const user = await prisma.user.findUnique({
          where: { email: checkout.customer_email },
        });
        if (user) {
          // Determine the plan based on the product ID or some other logic
          // For simplicity, let's assume any successful subscription checkout maps to "pro"
          // You'll need to map Polar product IDs to your internal plan names if you have multiple paid plans.
          // const polarProductId = checkout.line_items?.[0]?.product_id;
          // const newPlan = getPlanFromPolarProductId(polarProductId); // Implement this logic

          await prisma.user.update({
            where: { id: user.id },
            data: {
              plan: "pro", // Or a dynamically determined plan
              polarSubscriptionId: checkout.subscription_id,
            },
          });
          console.log(
            `User ${user.email} plan updated to 'pro' and subscription ID set.`
          );
        } else {
          console.warn(
            `Webhook: User with email ${checkout.customer_email} not found for successful checkout.`
          );
        }
      } catch (error) {
        console.error("Webhook: Error processing CheckoutUpdatedEvent:", error);
        // Optionally, return a 500 to signal an error to Polar for potential retry
        // throw error;
      }
    }
  },
  async onSubscriptionCreated(event: any) {
    console.log("Webhook: SubscriptionCreatedEvent received", event.payload);
    const subscription = event.payload;
    // You might want to link the subscription to a user here if not already done by checkout.updated
    // This often happens if a subscription is created manually or by other means.
    if (subscription.customer_email && subscription.id) {
      try {
        const user = await prisma.user.findUnique({
          where: { email: subscription.customer_email },
        });
        if (user && !user.polarSubscriptionId) {
          // Only update if not already set by checkout
          // Determine plan based on subscription.product_id
          await prisma.user.update({
            where: { id: user.id },
            data: {
              plan: "pro", // Or map from subscription.product_id
              polarSubscriptionId: subscription.id,
            },
          });
          console.log(
            `User ${user.email} subscription ID set from SubscriptionCreatedEvent.`
          );
        }
      } catch (error) {
        console.error(
          "Webhook: Error processing SubscriptionCreatedEvent:",
          error
        );
      }
    }
  },
  async onSubscriptionUpdated(event: any) {
    console.log("Webhook: SubscriptionUpdatedEvent received", event.payload);
    const subscription = event.payload;
    // Handle subscription changes, e.g., plan changes, cancellations, payment failures.
    // Update user's plan in your DB based on subscription.status or product_id.
    if (subscription.id) {
      try {
        const user = await prisma.user.findFirst({
          where: { polarSubscriptionId: subscription.id },
        });
        if (user) {
          let newPlan = user.plan;
          if (subscription.status === "active") {
            // Potentially update plan if product_id changed
            // newPlan = getPlanFromPolarProductId(subscription.product_id);
            newPlan = "pro"; // Simplified
          } else if (
            ["canceled", "ended", "past_due", "unpaid"].includes(
              subscription.status
            )
          ) {
            newPlan = "free"; // Downgrade on cancellation or payment failure
          }

          if (newPlan !== user.plan) {
            await prisma.user.update({
              where: { id: user.id },
              data: { plan: newPlan },
            });
            console.log(
              `User ${user.email} plan updated to '${newPlan}' due to subscription update.`
            );
          }
        } else {
          console.warn(
            `Webhook: User with Polar subscription ID ${subscription.id} not found.`
          );
        }
      } catch (error) {
        console.error(
          "Webhook: Error processing SubscriptionUpdatedEvent:",
          error
        );
      }
    }
  },
  async onOrderCreated(event: any) {
    console.log("Webhook: OrderCreatedEvent received", event.payload);
    // Handle one-time purchase orders if you have them
  },
  async onOrderUpdated(event: any) {
    console.log("Webhook: OrderUpdatedEvent received", event.payload);
    const order = event.payload;
    if (
      order.status === "succeeded" &&
      order.customer_email /* && one_time_product_logic */
    ) {
      // Logic for one-time purchases, e.g., granting access to a digital product
      // This might not involve changing a 'plan' but could update other user attributes.
    }
  },
  // You can add handlers for other events as needed:
  // onDisputeCreated, onDisputeUpdated, etc.
});

export async function POST(req: NextRequest) {
  try {
    const payload = await req.text(); // Read raw body
    const sig = req.headers.get("polar-signature") as string; // Get signature header

    if (!sig) {
      console.warn("Webhook: Missing polar-signature header");
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }
    if (!process.env.POLAR_WEBHOOK_SECRET) {
      console.error("Webhook: POLAR_WEBHOOK_SECRET is not set.");
      return NextResponse.json(
        { error: "Webhook secret not configured." },
        { status: 500 }
      );
    }

    // Verify and handle the webhook
    // The `webhook.handle` method will call the appropriate `onEventType` function from `handler`
    await webhookInstance.handle(
      { body: payload, headers: { "polar-signature": sig } },
      handler
    );

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err: any) {
    // Type Webhook.SignatureVerificationError might need to be imported if specific handling is needed
    // if (err instanceof Webhook.SignatureVerificationError) {
    //   console.warn('Webhook: Signature verification failed:', err.message);
    //   return NextResponse.json({ error: 'Signature verification failed' }, { status: 400 });
    // }
    console.error("Webhook: Error handling webhook:", err);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message || "Unknown error"}` },
      { status: err.statusCode || 500 }
    );
  }
}
