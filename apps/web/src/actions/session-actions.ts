"use server";

import { prisma } from "@/lib/db";
import type { SessionData } from "@/types/geo";

// Generate a simple visitor ID for returning user detection
function generateVisitorId(userAgent: string): string {
  // Simple hash of user agent for anonymous visitor tracking
  let hash = 0;
  for (let i = 0; i < userAgent.length; i++) {
    const char = userAgent.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36);
}

// Create or update a session (accepts a Prisma client for transaction support)
export async function createOrUpdateSession(
  data: SessionData,
  prismaClient: typeof prisma = prisma,
) {
  const { sessionId, siteId, url, userAgent, country, city } = data;

  try {
    // Check if session exists
    const existingSession = await prismaClient.trackedSession.findUnique({
      where: { sessionId },
    });

    if (existingSession) {
      // Update existing session
      return await prismaClient.trackedSession.update({
        where: { sessionId },
        data: {
          exitPage: url,
        },
      });
    } else {
      // Upsert session (create if not exists, update if exists)
      const visitorId = userAgent ? generateVisitorId(userAgent) : null;
      return await prismaClient.trackedSession.upsert({
        where: { sessionId },
        update: {
          exitPage: url,
        },
        create: {
          sessionId,
          siteId,
          entryPage: url,
          exitPage: url,
          userAgent,
          country,
          city,
          visitorId,
        },
      });
    }
  } catch (error) {
    console.error("Error creating/updating session:", error);
    throw error;
  }
}

// End a session (called when user leaves)
export async function endSession(sessionId: string) {
  try {
    const session = await prisma.trackedSession.findUnique({
      where: { sessionId },
    });

    if (!session) {
      throw new Error("Session not found");
    }

    const duration = Math.floor(
      (Date.now() - session.startedAt.getTime()) / 1000,
    );

    const didBounce = duration < 10; // 10 second bounce threshold

    return await prisma.trackedSession.update({
      where: { sessionId },
      data: {
        endedAt: new Date(),
        duration,
        didBounce,
      },
    });
  } catch (error) {
    console.error("Error ending session:", error);
    throw error;
  }
}

// Get session analytics for a site with aggregation
export async function getSessionAnalytics(siteId: string, days: number = 30) {
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Use aggregation for better performance
    const [sessionStats, recentSessions] = await Promise.all([
      // Get aggregated session statistics
      prisma.trackedSession.groupBy({
        by: ["didBounce"],
        where: {
          siteId,
          startedAt: { gte: startDate },
        },
        _count: { id: true },
        _avg: { duration: true },
      }),
      // Get recent sessions with pagination
      prisma.trackedSession.findMany({
        where: {
          siteId,
          startedAt: { gte: startDate },
        },
        include: {
          pageViewEvents: {
            orderBy: { timestamp: "asc" },
          },
        },
        orderBy: {
          startedAt: "desc",
        },
        take: 10, // Limit to 10 sessions
      }),
    ]);

    // Calculate statistics from aggregated data
    const totalSessions = sessionStats.reduce(
      (sum, stat) => sum + stat._count.id,
      0,
    );
    const bouncedSessions =
      sessionStats.find((stat) => stat.didBounce)?._count.id || 0;
    const bounceRate =
      totalSessions > 0 ? (bouncedSessions / totalSessions) * 100 : 0;

    // Calculate average session duration
    const avgSessionDuration =
      sessionStats.reduce((sum, stat) => {
        return sum + (stat._avg.duration || 0) * stat._count.id;
      }, 0) / totalSessions || 0;

    // Calculate average page views per session
    const totalPageViews = recentSessions.reduce(
      (sum, session) => sum + session.pageViewEvents.length,
      0,
    );
    const avgPageViews =
      recentSessions.length > 0 ? totalPageViews / recentSessions.length : 0;

    return {
      totalSessions,
      bouncedSessions,
      bounceRate: Math.round(bounceRate * 100) / 100,
      avgSessionDuration: Math.round(avgSessionDuration),
      avgPageViews: Math.round(avgPageViews * 100) / 100,
      sessions: recentSessions,
    };
  } catch (error) {
    console.error("Error getting session analytics:", error);
    throw error;
  }
}

// Get recent sessions with page flow and pagination
export async function getRecentSessions(
  siteId: string,
  limit: number = 10,
  offset: number = 0,
  cursor?: string,
) {
  try {
    // Cursor-based pagination for better performance
    const whereClause = cursor
      ? {
          siteId,
          startedAt: { lt: new Date(cursor) },
        }
      : { siteId };

    const [sessions, totalCount] = await Promise.all([
      prisma.trackedSession.findMany({
        where: whereClause,
        include: {
          pageViewEvents: {
            orderBy: { timestamp: "asc" },
          },
        },
        orderBy: {
          startedAt: "desc",
        },
        take: limit,
      }),
      prisma.trackedSession.count({
        where: { siteId },
      }),
    ]);

    return {
      data: sessions,
      pagination: {
        total: totalCount,
        limit,
        offset,
        hasMore: sessions.length === limit,
        nextCursor:
          sessions.length > 0
            ? sessions[sessions.length - 1].startedAt.toISOString()
            : null,
      },
    };
  } catch (error) {
    console.error("Error getting recent sessions:", error);
    throw error;
  }
}

// Clean up stale sessions (sessions older than 30 minutes that haven't ended)
export async function cleanupStaleSessions() {
  try {
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);

    const result = await prisma.trackedSession.updateMany({
      where: {
        endedAt: null, // Sessions that haven't ended
        startedAt: {
          lt: thirtyMinutesAgo, // Started more than 30 minutes ago
        },
      },
      data: {
        endedAt: new Date(),
        duration: 1800, // 30 minutes in seconds
        didBounce: false,
      },
    });

    return result.count;
  } catch (error) {
    console.error("Error cleaning up stale sessions:", error);
    return 0;
  }
}

// Get a single session by ID with all related data
export async function getSessionById(sessionId: string) {
  try {
    const session = await prisma.trackedSession.findUnique({
      where: { id: sessionId },
      include: {
        pageViewEvents: {
          orderBy: { timestamp: "asc" },
        },
        site: {
          select: {
            name: true,
            domain: true,
          },
        },
      },
    });

    if (!session) {
      throw new Error("Session not found");
    }

    return session;
  } catch (error) {
    console.error("Error getting session by ID:", error);
    throw error;
  }
}

// Get sessions by visitor ID for returning user analysis
export async function getSessionsByVisitorId(
  visitorId: string,
  siteId: string,
  limit: number = 10,
) {
  try {
    return await prisma.trackedSession.findMany({
      where: {
        visitorId,
        siteId,
      },
      include: {
        pageViewEvents: {
          orderBy: { timestamp: "asc" },
        },
      },
      orderBy: {
        startedAt: "desc",
      },
      take: limit,
    });
  } catch (error) {
    console.error("Error getting sessions by visitor ID:", error);
    throw error;
  }
}

// Get session statistics with aggregation
export async function getSessionStatistics(siteId: string, days: number = 30) {
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Use aggregation for comprehensive statistics
    const [dailyStats, bounceStats, durationStats] = await Promise.all([
      // Daily session counts
      prisma.trackedSession.groupBy({
        by: ["startedAt"],
        where: {
          siteId,
          startedAt: { gte: startDate },
        },
        _count: { id: true },
        orderBy: { startedAt: "asc" },
      }),
      // Bounce rate statistics
      prisma.trackedSession.groupBy({
        by: ["didBounce"],
        where: {
          siteId,
          startedAt: { gte: startDate },
        },
        _count: { id: true },
      }),
      // Duration statistics
      prisma.trackedSession.aggregate({
        where: {
          siteId,
          startedAt: { gte: startDate },
          duration: { not: null },
        },
        _avg: { duration: true },
        _min: { duration: true },
        _max: { duration: true },
      }),
    ]);

    return {
      dailyStats,
      bounceStats,
      durationStats,
    };
  } catch (error) {
    console.error("Error getting session statistics:", error);
    throw error;
  }
}
