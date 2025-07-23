"use server";

import { syncPolarProductsToDatabase } from "@/lib/polar/products";
import { syncAllActiveSubscriptions } from "@/lib/polar/subscriptions";

export async function syncPolarData() {
  try {
    // Sync products first
    await syncPolarProductsToDatabase();

    // Then sync subscriptions
    await syncAllActiveSubscriptions();

    return { success: true, message: "Polar data synced successfully" };
  } catch (error) {
    console.error("Error syncing Polar data:", error);
    return { success: false, error: "Failed to sync Polar data" };
  }
}

export async function syncPolarProducts() {
  try {
    await syncPolarProductsToDatabase();
    return { success: true, message: "Polar products synced successfully" };
  } catch (error) {
    console.error("Error syncing Polar products:", error);
    return { success: false, error: "Failed to sync Polar products" };
  }
}

export async function syncPolarSubscriptions() {
  try {
    await syncAllActiveSubscriptions();
    return {
      success: true,
      message: "Polar subscriptions synced successfully",
    };
  } catch (error) {
    console.error("Error syncing Polar subscriptions:", error);
    return { success: false, error: "Failed to sync Polar subscriptions" };
  }
}
