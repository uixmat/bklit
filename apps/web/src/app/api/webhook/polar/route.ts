import { prisma } from "@bklit/db/client";
import { Webhooks } from "@polar-sh/nextjs";
import { syncSubscriptionFromPolar } from "@/lib/polar/subscriptions";

// Define webhook payload types
interface WebhookPayload {
  data?: {
    id?: string;
    status?: string;
    customer_email?: string;
    customer?: {
      email?: string;
    };
    subscription_id?: string;
    productId?: string;
  };
}

export const POST = Webhooks({
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET || "",

  // Assuming payload is the 'data' part of the event, or the event object itself
  async onCheckoutUpdated(payload: WebhookPayload) {
    console.log(
      "Webhook: CheckoutUpdatedEvent (RAW PAYLOAD) received",
      payload,
    );
    // Access actual checkout data via payload.data
    const checkout = payload.data;
    if (!checkout) {
      console.warn("onCheckoutUpdated: payload.data is undefined!");
      return;
    }

    if (checkout.status === "succeeded" && checkout.customer_email) {
      console.log(
        `Webhook: Checkout succeeded for ${checkout.customer_email}. Subscription ID in this event: ${checkout.subscription_id}. Product ID: ${checkout.productId}`,
      );
      // If you absolutely need to do something with checkout *before* subscription events,
      // you could attempt a user lookup by email here, but avoid setting plan/subId
      // if subscription_id is null, as the subscription.updated event is more reliable.
      // Example:
      // const user = await prisma.user.findUnique({ where: { email: checkout.customer_email } });
      // if (user) { console.log("User found during checkout.updated:", user.id); }
    }
  },

  async onSubscriptionCreated(payload: WebhookPayload) {
    console.log(
      "Webhook: SubscriptionCreatedEvent (RAW PAYLOAD) received",
      payload,
    );
    const subscription = payload.data;
    if (!subscription?.id) {
      console.warn("onSubscriptionCreated: subscription ID is undefined!");
      return;
    }

    try {
      // Find organization by customer email (assuming customer email matches organization owner)
      if (subscription.customer?.email) {
        const user = await prisma.user.findUnique({
          where: { email: subscription.customer.email },
          include: {
            organizationMemberships: {
              where: { role: "owner" },
              include: { organization: true },
            },
          },
        });

        if (user?.organizationMemberships?.[0]?.organization) {
          const organization = user.organizationMemberships[0].organization;
          await syncSubscriptionFromPolar(subscription.id, organization.id);
        }
      }
    } catch (error) {
      console.error("Webhook: Error in onSubscriptionCreated:", error);
    }
  },

  async onSubscriptionUpdated(payload: WebhookPayload) {
    console.log(
      "Webhook: SubscriptionUpdatedEvent (RAW PAYLOAD) received",
      payload,
    );
    const subscription = payload.data;
    if (!subscription?.id) {
      console.warn("onSubscriptionUpdated: subscription ID is undefined!");
      return;
    }

    try {
      // Find organization by subscription ID first, then by customer email
      let organization = await prisma.organization.findFirst({
        where: { polarSubscriptionId: subscription.id },
      });

      if (!organization && subscription.customer?.email) {
        const user = await prisma.user.findUnique({
          where: { email: subscription.customer.email },
          include: {
            organizationMemberships: {
              where: { role: "owner" },
              include: { organization: true },
            },
          },
        });

        if (user?.organizationMemberships?.[0]?.organization) {
          organization = user.organizationMemberships[0].organization;
        }
      }

      if (organization) {
        await syncSubscriptionFromPolar(subscription.id, organization.id);
      }
    } catch (error) {
      console.error("Webhook: Error in onSubscriptionUpdated:", error);
    }
  },

  async onOrderCreated(payload: WebhookPayload) {
    console.log("Webhook: OrderCreatedEvent (RAW PAYLOAD) received", payload);
    const order = payload.data; // Access actual order data via payload.data
    if (!order) {
      console.warn("onOrderCreated: payload.data is undefined!");
      return;
    }
    // Handle one-time purchase orders if you have them
  },

  async onOrderUpdated(payload: WebhookPayload) {
    console.log("Webhook: OrderUpdatedEvent (RAW PAYLOAD) received", payload);
    const order = payload.data; // Access actual order data via payload.data
    if (!order) {
      console.warn("onOrderUpdated: payload.data is undefined!");
      return;
    }

    if (order.status === "succeeded" && order.customer_email) {
      // Logic for one-time purchases
    }
  },

  // Fallback for any other event types not explicitly handled above
  async onPayload(payload: WebhookPayload) {
    console.log("Webhook: Generic onPayload received (via SDK util):", payload);
    // You could add a switch(payload.type) here if you want to handle
    // other specific events without dedicated handlers.
  },
});
