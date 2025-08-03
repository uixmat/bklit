import { prisma } from "@bklit/db";
import { type NextRequest, NextResponse } from "next/server";
import { authenticated } from "@/lib/auth";
import { getOrganizationSubscription } from "@/lib/polar/subscriptions";

export async function GET(request: NextRequest) {
  try {
    const session = await authenticated({ redirect: false });
    const { searchParams } = new URL(request.url);
    const organizationId = searchParams.get("organizationId");

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!organizationId) {
      return NextResponse.json(
        { error: "Organization ID is required" },
        { status: 400 },
      );
    }

    // Check if user is a member of this organization
    const organizationMembership = await prisma.organizationMember.findFirst({
      where: {
        organizationId,
        userId: session.user.id,
      },
    });

    if (!organizationMembership) {
      return NextResponse.json({ error: "Organization not found" }, { status: 404 });
    }

    const subscription = await getOrganizationSubscription(organizationId);

    return NextResponse.json(subscription);
  } catch (error) { 
    console.error("Error fetching organization subscription:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
