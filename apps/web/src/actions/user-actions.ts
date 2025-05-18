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
