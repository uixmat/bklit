import { Webhooks } from "@polar-sh/nextjs";
import { prisma } from "@/lib/db"; // Your Prisma client

// Removed problematic import for webhook types - to be investigated later.

export const POST = Webhooks({
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET!,

  // Assuming payload is the 'data' part of the event, or the event object itself
  async onCheckoutUpdated(payload: any) {
    console.log("Webhook: CheckoutUpdatedEvent (RAW PAYLOAD) received", payload);
    // Access actual checkout data via payload.data
    const checkout = payload.data;
    if (!checkout) {
      console.warn("onCheckoutUpdated: payload.data is undefined!");
      return;
    }

    if (checkout.status === "succeeded" && checkout.customer_email) {
      console.log(
        `Webhook: Checkout succeeded for ${checkout.customer_email}. Subscription ID in this event: ${checkout.subscription_id}. Product ID: ${checkout.productId}`
      );
      // If you absolutely need to do something with checkout *before* subscription events,
      // you could attempt a user lookup by email here, but avoid setting plan/subId
      // if subscription_id is null, as the subscription.updated event is more reliable.
      // Example:
      // const user = await prisma.user.findUnique({ where: { email: checkout.customer_email } });
      // if (user) { console.log("User found during checkout.updated:", user.id); }
    }
  },

  async onSubscriptionCreated(payload: any) {
    console.log("Webhook: SubscriptionCreatedEvent (RAW PAYLOAD) received", payload);
    // Access actual subscription data via payload.data
    const subscription = payload.data;
    if (!subscription) {
      console.warn("onSubscriptionCreated: payload.data is undefined!");
      return;
    }

    if (
      subscription && // This check is now on payload.data
      subscription.id &&
      subscription.customer?.email &&
      subscription.status === "active"
    ) {
      console.log(
        "onSubscriptionCreated: Entered main logic block. About to try Prisma operations."
      );
      try {
        const user = await prisma.user.findUnique({
          where: { email: subscription.customer.email },
        });

        if (user) {
          if (user.plan !== "pro" || user.polarSubscriptionId !== subscription.id) {
            await prisma.user.update({
              where: { id: user.id },
              data: {
                plan: "pro",
                polarSubscriptionId: subscription.id,
              },
            });
            console.log(
              `User ${user.email} DB updated from onSubscriptionCreated: plan='pro', polarSubscriptionId='${subscription.id}'.`
            );
          } else {
            console.log(`User ${user.email} already up-to-date during onSubscriptionCreated.`);
          }
        } else {
          console.warn(
            `Webhook (onSubscriptionCreated): User with email ${subscription.customer.email} (from subscription ${subscription.id}) not found.`
          );
        }
      } catch (error) {
        console.error("Webhook: Error in onSubscriptionCreated:", error, subscription);
      }
    }
  },

  async onSubscriptionUpdated(payload: any) {
    console.log("Webhook: SubscriptionUpdatedEvent (RAW PAYLOAD) received", payload);
    // Access actual subscription data via payload.data
    const subscription = payload.data;
    if (!subscription) {
      console.warn("onSubscriptionUpdated: payload.data is undefined!");
      return;
    }

    // Debugging the guard clause (now on subscription which is payload.data)
    const subExists = !!subscription;
    const subIdExists = !!(subscription && subscription.id);
    const customerExists = !!(subscription && subscription.customer);
    const customerEmailExists = !!(
      subscription &&
      subscription.customer &&
      subscription.customer.email
    );

    console.log("onSubscriptionUpdated - Guard Debug (on payload.data):", {
      subExists,
      subIdExists,
      customerExists,
      customerEmailExists,
      rawCustomerObject: subscription ? subscription.customer : "subscription is null",
      rawCustomerEmail:
        subscription && subscription.customer
          ? subscription.customer.email
          : "customer or subscription is null",
    });

    if (
      !subscription || // This check is now on payload.data
      !subscription.id ||
      !subscription.customer ||
      !subscription.customer.email
    ) {
      console.warn(
        "Webhook: SubscriptionUpdated event missing critical data (id, customer, or customer.email) - POST-DEBUGGING",
        subscription
      );
      return;
    }
    console.log("onSubscriptionUpdated: Guard clause passed. Proceeding to try block.");

    try {
      let user = await prisma.user.findFirst({
        where: { polarSubscriptionId: subscription.id },
      });

      if (!user) {
        console.log(
          `Webhook (onSubscriptionUpdated): User not found by polarSubscriptionId ${subscription.id}, trying email ${subscription.customer.email}`
        );
        user = await prisma.user.findUnique({
          where: { email: subscription.customer.email },
        });
      }

      if (user) {
        let newPlan = user.plan;
        let newPolarSubscriptionId = user.polarSubscriptionId;

        if (subscription.status === "active") {
          newPlan = "pro";
          newPolarSubscriptionId = subscription.id;
          console.log(
            `Webhook: Subscription ${subscription.id} is active for user ${user.email}. Setting plan to pro.`
          );
        } else if (["canceled", "ended", "past_due", "unpaid"].includes(subscription.status)) {
          newPlan = "free";
          // newPolarSubscriptionId = null; // Decide if you want to clear this or keep for history
          console.log(
            `Webhook: Subscription ${subscription.id} is ${subscription.status} for user ${user.email}. Setting plan to free.`
          );
        }

        if (newPlan !== user.plan || newPolarSubscriptionId !== user.polarSubscriptionId) {
          await prisma.user.update({
            where: { id: user.id },
            data: {
              plan: newPlan,
              polarSubscriptionId: newPolarSubscriptionId,
            },
          });
          console.log(
            `User ${
              user.email
            } DB updated from onSubscriptionUpdated: plan='${newPlan}', polarSubscriptionId='${
              newPolarSubscriptionId || "cleared"
            }'.`
          );
        } else {
          console.log(
            `User ${user.email} plan and subscriptionId already up-to-date (onSubscriptionUpdated).`
          );
        }
      } else {
        console.warn(
          `Webhook (onSubscriptionUpdated): User with email ${subscription.customer.email} (from subscription ${subscription.id}) not found.`
        );
      }
    } catch (error) {
      console.error("Webhook: Error in onSubscriptionUpdated:", error, subscription);
    }
  },

  async onOrderCreated(payload: any) {
    console.log("Webhook: OrderCreatedEvent (RAW PAYLOAD) received", payload);
    const order = payload.data; // Access actual order data via payload.data
    if (!order) {
      console.warn("onOrderCreated: payload.data is undefined!");
      return;
    }
    // Handle one-time purchase orders if you have them
  },

  async onOrderUpdated(payload: any) {
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
  async onPayload(payload: any) {
    console.log("Webhook: Generic onPayload received (via SDK util):", payload);
    // You could add a switch(payload.type) here if you want to handle
    // other specific events without dedicated handlers.
  },
});
