"use server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import type { TeamMembershipWithTeam, UserTeamData } from "@/types/user";

export async function getUserProjectCount(): Promise<number | null> {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    // Or throw new Error("User not authenticated");
    return null;
  }

  try {
    const count = await prisma.site.count({
      where: {
        userId: session.user.id,
      },
    });
    return count;
  } catch (error) {
    console.error("Error fetching project count:", error);
    return null; // Or throw error
  }
}

export async function getUserSites() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return null;
  }

  try {
    const sites = await prisma.site.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "asc", // Get the first (oldest) site as default
      },
    });
    return sites;
  } catch (error) {
    console.error("Error fetching user sites:", error);
    return null;
  }
}

export async function getUserFirstTeam() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return null;
  }

  try {
    const teamMembership = await prisma.teamMember.findFirst({
      where: {
        userId: session.user.id,
      },
      include: {
        team: true,
      },
      orderBy: {
        joinedAt: "asc", // Get the first (oldest) team membership
      },
    });

    return teamMembership?.team || null;
  } catch (error) {
    console.error("Error fetching user's first team:", error);
    // Don't throw the error, just return null so the dashboard can handle it gracefully
    return null;
  }
}

export async function getUserTeams() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return null;
  }

  try {
    // Get user's team memberships with team data
    const teamMemberships = await prisma.teamMember.findMany({
      where: { userId: session.user.id },
      include: {
        team: {
          include: {
            sites: true,
          },
        },
      },
      orderBy: { joinedAt: "desc" },
    });

    // Transform to return teams with site counts
    const teams = teamMemberships.map(
      (membership: TeamMembershipWithTeam): UserTeamData => ({
        id: membership.team.id,
        name: membership.team.name,
        slug: membership.team.slug,
        description: membership.team.description,
        plan: membership.team.plan,
        role: membership.role,
        siteCount: membership.team.sites.length,
        sites: membership.team.sites,
      }),
    );

    return teams;
  } catch (error) {
    console.error("Error fetching user teams:", error);
    return null;
  }
}
