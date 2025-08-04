"use server";

import { prisma } from "@bklit/db";
import { auth } from "@/auth/server";
import { authenticated } from "@/lib/auth";

export async function getUserProjectCount(): Promise<number | null> {
  const session = await authenticated();

  if (!session || !session.user || !session.user.id) {
    // Or throw new Error("User not authenticated");
    return null;
  }

  try {
    const count = await prisma.project.count({
      // where: {
      //   organizationId: session.user.activeOrganizationId,
      // },
    });
    return count;
  } catch (error) {
    console.error("Error fetching project count:", error);
    return null; // Or throw error
  }
}

export async function getUserSites() {
  const session = await authenticated();

  if (!session || !session.user || !session.user.id) {
    return null;
  }

  try {
    const sites = await prisma.project.findMany({
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

export async function getUserTeams() {
  const session = await authenticated();

  if (!session || !session.user || !session.user.id) {
    return null;
  }

  try {
    return auth.api.listOrganizations();
  } catch (error) {
    console.error("Error fetching user organizations:", error);
    return null;
  }
}
