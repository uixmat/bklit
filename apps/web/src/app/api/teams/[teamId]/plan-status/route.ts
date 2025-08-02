import { type NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@bklit/db";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ teamId: string }> },
) {
  try {
    const { teamId } = await params;
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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

    // Get team with counts
    const team = await prisma.team.findUnique({
      where: { id: teamId },
      include: {
        _count: {
          select: {
            sites: true,
            members: true,
          },
        },
      },
    });

    if (!team) {
      return NextResponse.json({ error: "Team not found" }, { status: 404 });
    }

    return NextResponse.json({
      plan: team.plan,
      projectCount: team._count.sites,
      memberCount: team._count.members,
    });
  } catch (error) {
    console.error("Error fetching team plan status:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
