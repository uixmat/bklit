import { type NextRequest, NextResponse } from "next/server";
import { getLocalSubscriptionPlans } from "@/lib/polar/products";

export async function GET(_request: NextRequest) {
  try {
    const plans = await getLocalSubscriptionPlans();
    return NextResponse.json(plans);
  } catch (error) {
    console.error("Error fetching subscription plans:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
