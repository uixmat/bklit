"use server";

import { prisma } from "@/lib/db";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

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

export async function getUserTeams(userId: string) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return null;
  }

  try {
    return await prisma.teamMember.findMany({
      where: { userId },
      include: {
        team: {
          include: {
            sites: true,
            members: {
              include: {
                user: {
                  select: { name: true, email: true, image: true },
                },
              },
            },
          },
        },
      },
      orderBy: { joinedAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching user teams:", error);
    return null;
  }
}

export async function getUserDirectSites(userId: string) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return null;
  }

  try {
    return await prisma.site.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching user direct sites:", error);
    return null;
  }
}
