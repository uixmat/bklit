"use server";

import { getServerSession } from "next-auth/next";
import { z } from "zod";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import type { TeamMembershipWithTeam, UserTeamData } from "@/types/user";

// ============================================================================
// GET USER PROJECT COUNT
// ============================================================================

export async function getUserProjectCount(): Promise<number | null> {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
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
    return null;
  }
}

// ============================================================================
// GET USER SITES WITH PAGINATION
// ============================================================================

const getUserSitesSchema = z.object({
  limit: z.number().min(1).max(100).default(20),
  offset: z.number().min(0).default(0),
  cursor: z.string().optional(),
});

export async function getUserSites(
  params?: z.infer<typeof getUserSitesSchema>,
) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return null;
  }

  try {
    // If no params provided, return all sites (backward compatibility)
    if (!params) {
      const sites = await prisma.site.findMany({
        where: {
          userId: session.user.id,
        },
        orderBy: {
          createdAt: "asc",
        },
      });
      return sites;
    }

    const validation = getUserSitesSchema.safeParse(params);

    if (!validation.success) {
      throw new Error(validation.error.message);
    }

    const { limit, offset, cursor } = validation.data;

    // Cursor-based pagination for better performance
    const whereClause = cursor
      ? {
          userId: session.user.id,
          createdAt: { lt: new Date(cursor) },
        }
      : { userId: session.user.id };

    const [sites, totalCount] = await Promise.all([
      prisma.site.findMany({
        where: whereClause,
        include: {
          _count: {
            select: {
              pageViewEvents: true,
              trackedEvents: true,
              trackedSessions: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        take: limit,
      }),
      prisma.site.count({
        where: { userId: session.user.id },
      }),
    ]);

    return {
      data: sites,
      pagination: {
        total: totalCount,
        limit,
        offset,
        hasMore: sites.length === limit,
        nextCursor:
          sites.length > 0
            ? sites[sites.length - 1].createdAt.toISOString()
            : null,
      },
    };
  } catch (error) {
    console.error("Error fetching user sites:", error);
    return null;
  }
}

// ============================================================================
// GET USER FIRST TEAM
// ============================================================================

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
        joinedAt: "asc",
      },
    });

    return teamMembership?.team || null;
  } catch (error) {
    console.error("Error fetching user's first team:", error);
    return null;
  }
}

// ============================================================================
// GET USER TEAMS WITH PAGINATION
// ============================================================================

const getUserTeamsSchema = z.object({
  limit: z.number().min(1).max(100).default(20),
  offset: z.number().min(0).default(0),
  cursor: z.string().optional(),
});

export async function getUserTeams(
  params?: z.infer<typeof getUserTeamsSchema>,
) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return null;
  }

  try {
    // If no params provided, return all teams (backward compatibility)
    if (!params) {
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
    }

    const validation = getUserTeamsSchema.safeParse(params);

    if (!validation.success) {
      throw new Error(validation.error.message);
    }

    const { limit, offset, cursor } = validation.data;

    // Cursor-based pagination for better performance
    const whereClause = cursor
      ? {
          userId: session.user.id,
          joinedAt: { lt: new Date(cursor) },
        }
      : { userId: session.user.id };

    const [teamMemberships, totalCount] = await Promise.all([
      prisma.teamMember.findMany({
        where: whereClause,
        include: {
          team: {
            include: {
              _count: {
                select: {
                  sites: true,
                  members: true,
                },
              },
            },
          },
        },
        orderBy: { joinedAt: "desc" },
        take: limit,
      }),
      prisma.teamMember.count({
        where: { userId: session.user.id },
      }),
    ]);

    const teams = teamMemberships.map(
      (membership): UserTeamData => ({
        id: membership.team.id,
        name: membership.team.name,
        slug: membership.team.slug,
        description: membership.team.description,
        plan: membership.team.plan,
        role: membership.role,
        siteCount: membership.team._count.sites,
        sites: [], // Not included in paginated version for performance
      }),
    );

    return {
      data: teams,
      pagination: {
        total: totalCount,
        limit,
        offset,
        hasMore: teamMemberships.length === limit,
        nextCursor:
          teamMemberships.length > 0
            ? teamMemberships[teamMemberships.length - 1].joinedAt.toISOString()
            : null,
      },
    };
  } catch (error) {
    console.error("Error fetching user teams:", error);
    return null;
  }
}

// ============================================================================
// GET USER STATISTICS WITH AGGREGATION
// ============================================================================

export async function getUserStatistics() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return null;
  }

  try {
    const [projectStats, teamStats, userInfo] = await Promise.all([
      // Get project statistics
      prisma.site.aggregate({
        where: { userId: session.user.id },
        _count: { id: true },
      }),
      // Get team statistics
      prisma.teamMember.aggregate({
        where: { userId: session.user.id },
        _count: { id: true },
      }),
      // Get user information
      prisma.user.findUnique({
        where: { id: session.user.id },
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
          plan: true,
        },
      }),
    ]);

    return {
      user: userInfo,
      projectStats,
      teamStats,
    };
  } catch (error) {
    console.error("Error fetching user statistics:", error);
    return null;
  }
}

// ============================================================================
// GET USER ACTIVITY WITH PAGINATION
// ============================================================================

const getUserActivitySchema = z.object({
  limit: z.number().min(1).max(100).default(20),
  offset: z.number().min(0).default(0),
  cursor: z.string().optional(),
});

export async function getUserActivity(
  params: z.infer<typeof getUserActivitySchema>,
) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return null;
  }

  try {
    const validation = getUserActivitySchema.safeParse(params);

    if (!validation.success) {
      throw new Error(validation.error.message);
    }

    const { limit, offset, cursor } = validation.data;

    // Cursor-based pagination for better performance
    const whereClause = cursor
      ? {
          userId: session.user.id,
          createdAt: { lt: new Date(cursor) },
        }
      : { userId: session.user.id };

    const [sites, totalCount] = await Promise.all([
      prisma.site.findMany({
        where: whereClause,
        include: {
          _count: {
            select: {
              pageViewEvents: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        take: limit,
      }),
      prisma.site.count({
        where: { userId: session.user.id },
      }),
    ]);

    return {
      data: sites,
      pagination: {
        total: totalCount,
        limit,
        offset,
        hasMore: sites.length === limit,
        nextCursor:
          sites.length > 0
            ? sites[sites.length - 1].createdAt.toISOString()
            : null,
      },
    };
  } catch (error) {
    console.error("Error fetching user activity:", error);
    return null;
  }
}
