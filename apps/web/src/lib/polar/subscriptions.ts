import { prisma } from "@/lib/db";
import type { SubscriptionData } from "./types";

// TODO: Fix Polar API integration - need to check correct API structure
export async function syncSubscriptionFromPolar(
  polarSubscriptionId: string,
  teamId: string,
): Promise<void> {
  console.log(
    `TODO: Implement subscription sync for ${polarSubscriptionId} for team ${teamId}`,
  );
  // This function needs to be updated once we verify the correct Polar API structure
}

export async function getTeamSubscription(
  teamId: string,
): Promise<SubscriptionData | null> {
  try {
    const subscription = await prisma.subscription.findFirst({
      where: {
        teamId,
        status: "active",
      },
      include: {
        plan: {
          include: {
            benefits: true,
          },
        },
      },
    });

    if (!subscription) return null;

    return {
      id: subscription.id,
      polarSubscriptionId: subscription.polarSubscriptionId,
      polarCustomerId: subscription.polarCustomerId,
      status: subscription.status,
      currentPeriodStart: subscription.currentPeriodStart,
      currentPeriodEnd: subscription.currentPeriodEnd,
      cancelAtPeriodEnd: subscription.cancelAtPeriodEnd,
      canceledAt: subscription.canceledAt,
      endedAt: subscription.endedAt,
      planId: subscription.planId,
      teamId: subscription.teamId,
    };
  } catch (error) {
    console.error("Error fetching team subscription:", error);
    return null;
  }
}

export async function syncAllActiveSubscriptions(): Promise<void> {
  try {
    // Get all active subscriptions from our database
    const localSubscriptions = await prisma.subscription.findMany({
      where: { status: "active" },
      select: { polarSubscriptionId: true, teamId: true },
    });

    // Sync each subscription
    for (const subscription of localSubscriptions) {
      await syncSubscriptionFromPolar(
        subscription.polarSubscriptionId,
        subscription.teamId,
      );
    }

    console.log("Successfully synced all active subscriptions");
  } catch (error) {
    console.error("Error syncing all subscriptions:", error);
    throw error;
  }
}
