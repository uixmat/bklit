"use server";

import { prisma } from "@/lib/db";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export async function getTeamBillingData(teamId: string) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return null;
  }

  try {
    // Check if user is a member of this team
    const teamMembership = await prisma.teamMember.findFirst({
      where: {
        teamId,
        userId: session.user.id,
      },
    });

    if (!teamMembership) {
      return null;
    }

    const team = await prisma.team.findUnique({
      where: { id: teamId },
      select: { plan: true, name: true },
    });

    return team || { plan: "free", name: "Unknown Team" };
  } catch (error) {
    console.error("Error fetching team billing data:", error);
    return null;
  }
}
