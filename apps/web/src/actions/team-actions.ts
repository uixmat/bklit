"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth/next";
import { z } from "zod";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import type { TeamFormState } from "@/types/user";

export type { TeamFormState };

// ============================================================================
// CREATE TEAM ACTION
// ============================================================================

const createTeamSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Team name must be at least 2 characters long." })
    .max(50, { message: "Team name must be 50 characters or less." }),
  description: z
    .string()
    .max(200, { message: "Description must be 200 characters or less." })
    .optional(),
});

export async function createTeamAction(
  _prevState: TeamFormState,
  formData: FormData,
): Promise<TeamFormState> {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return {
      success: false,
      message: "User not authenticated.",
    };
  }

  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = createTeamSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // Generate a URL-friendly slug from the team name
    const slug = validatedFields.data.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    // Check if slug already exists
    const existingTeam = await prisma.team.findUnique({
      where: { slug },
    });

    if (existingTeam) {
      return {
        success: false,
        message:
          "A team with this name already exists. Please choose a different name.",
      };
    }

    // Create team and add user as owner in a transaction
    const result = await prisma.$transaction(async (tx) => {
      const team = await tx.team.create({
        data: {
          name: validatedFields.data.name,
          slug,
          description: validatedFields.data.description || null,
        },
      });

      await tx.teamMember.create({
        data: {
          userId: session.user.id,
          teamId: team.id,
          role: "owner",
        },
      });

      return team;
    });

    revalidatePath("/");
    return {
      success: true,
      message: "Team created successfully!",
      newTeamId: result.id,
    };
  } catch (error) {
    console.error("Error creating team:", error);
    return {
      success: false,
      message: "Failed to create team. Please try again.",
    };
  }
}

// ============================================================================
// DELETE TEAM ACTION
// ============================================================================

export async function deleteTeamAction(
  _prevState: TeamFormState,
  formData: FormData,
): Promise<TeamFormState> {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return {
      success: false,
      message: "User not authenticated.",
    };
  }

  const teamId = formData.get("teamId") as string;
  const confirmedTeamName = formData.get("confirmedTeamName") as string;

  if (!teamId || !confirmedTeamName) {
    return {
      success: false,
      message: "Missing team ID or team name for confirmation.",
    };
  }

  try {
    // Check if user is the owner of the team
    const teamMembership = await prisma.teamMember.findFirst({
      where: {
        teamId: teamId,
        userId: session.user.id,
        role: "owner",
      },
      include: {
        team: true,
      },
    });

    if (!teamMembership || !teamMembership.team) {
      return {
        success: false,
        message: "Team not found or you do not have permission to delete it.",
      };
    }

    if (teamMembership.team.name !== confirmedTeamName) {
      return {
        success: false,
        message: "The entered team name does not match. Deletion cancelled.",
      };
    }

    // Delete the team (this will cascade delete all related data)
    await prisma.team.delete({
      where: {
        id: teamId,
      },
    });

    revalidatePath("/");

    return {
      success: true,
      message: `Team "${teamMembership.team.name}" deleted successfully.`,
    };
  } catch (error) {
    console.error("Error deleting team:", error);
    return {
      success: false,
      message: "Failed to delete team. Please try again.",
    };
  }
}

// ============================================================================
// GET USER TEAMS WITH PAGINATION
// ============================================================================

const getUserTeamsSchema = z.object({
  userId: z.string(),
  limit: z.number().min(1).max(100).default(20),
  offset: z.number().min(0).default(0),
  cursor: z.string().optional(),
});

export async function getUserTeams(params: z.infer<typeof getUserTeamsSchema>) {
  const validation = getUserTeamsSchema.safeParse(params);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const { userId, limit, offset, cursor } = validation.data;

  try {
    // Cursor-based pagination for better performance
    const whereClause = cursor
      ? {
          userId,
          team: {
            createdAt: { lt: new Date(cursor) },
          },
        }
      : { userId };

    const [teamMemberships, totalCount] = await Promise.all([
      prisma.teamMember.findMany({
        where: whereClause,
        include: {
          team: {
            include: {
              _count: {
                select: {
                  members: true,
                  sites: true,
                },
              },
            },
          },
        },
        orderBy: {
          team: {
            createdAt: "desc",
          },
        },
        take: limit,
      }),
      prisma.teamMember.count({
        where: { userId },
      }),
    ]);

    return {
      data: teamMemberships,
      pagination: {
        total: totalCount,
        limit,
        offset,
        hasMore: teamMemberships.length === limit,
        nextCursor:
          teamMemberships.length > 0
            ? teamMemberships[
                teamMemberships.length - 1
              ].team.createdAt.toISOString()
            : null,
      },
    };
  } catch (error) {
    console.error("Error getting user teams:", error);
    throw error;
  }
}

// ============================================================================
// GET TEAM MEMBERS WITH PAGINATION
// ============================================================================

const getTeamMembersSchema = z.object({
  teamId: z.string(),
  limit: z.number().min(1).max(100).default(20),
  offset: z.number().min(0).default(0),
  cursor: z.string().optional(),
});

export async function getTeamMembers(
  params: z.infer<typeof getTeamMembersSchema>,
) {
  const validation = getTeamMembersSchema.safeParse(params);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const { teamId, limit, offset, cursor } = validation.data;

  try {
    // Cursor-based pagination for better performance
    const whereClause = cursor
      ? {
          teamId,
          joinedAt: { lt: new Date(cursor) },
        }
      : { teamId };

    const [members, totalCount] = await Promise.all([
      prisma.teamMember.findMany({
        where: whereClause,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
            },
          },
        },
        orderBy: {
          joinedAt: "desc",
        },
        take: limit,
      }),
      prisma.teamMember.count({
        where: { teamId },
      }),
    ]);

    return {
      data: members,
      pagination: {
        total: totalCount,
        limit,
        offset,
        hasMore: members.length === limit,
        nextCursor:
          members.length > 0
            ? members[members.length - 1].joinedAt.toISOString()
            : null,
      },
    };
  } catch (error) {
    console.error("Error getting team members:", error);
    throw error;
  }
}

// ============================================================================
// GET TEAM STATISTICS WITH AGGREGATION
// ============================================================================

export async function getTeamStatistics(teamId: string) {
  try {
    const [memberStats, siteStats, teamInfo] = await Promise.all([
      // Get member statistics
      prisma.teamMember.groupBy({
        by: ["role"],
        where: { teamId },
        _count: { id: true },
      }),
      // Get site statistics
      prisma.site.aggregate({
        where: { teamId },
        _count: { id: true },
      }),
      // Get team information
      prisma.team.findUnique({
        where: { id: teamId },
        select: {
          id: true,
          name: true,
          slug: true,
          description: true,
          plan: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
    ]);

    return {
      team: teamInfo,
      memberStats,
      siteStats,
    };
  } catch (error) {
    console.error("Error getting team statistics:", error);
    throw error;
  }
}
