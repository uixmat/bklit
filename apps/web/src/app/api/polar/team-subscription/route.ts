import { type NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@bklit/db";
import { getTeamSubscription } from "@/lib/polar/subscriptions";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const { searchParams } = new URL(request.url);
    const teamId = searchParams.get("teamId");

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!teamId) {
      return NextResponse.json(
        { error: "Team ID is required" },
        { status: 400 },
      );
    }

    // Check if user is a member of this team
    const teamMembership = await prisma.teamMember.findFirst({
      where: {
        teamId,
        userId: session.user.id,
      },
    });

    if (!teamMembership) {
      return NextResponse.json({ error: "Team not found" }, { status: 404 });
    }

    const subscription = await getTeamSubscription(teamId);

    return NextResponse.json(subscription);
  } catch (error) {
    console.error("Error fetching team subscription:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
