import { type NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { syncPolarProductsToDatabase } from "@/lib/polar/products";
import { syncAllActiveSubscriptions } from "@/lib/polar/subscriptions";

export async function POST(_request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Sync products first
    await syncPolarProductsToDatabase();

    // Then sync subscriptions
    await syncAllActiveSubscriptions();

    return NextResponse.json({
      success: true,
      message: "Polar data synced successfully",
    });
  } catch (error) {
    console.error("Error syncing Polar data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
