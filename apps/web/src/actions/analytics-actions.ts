"use server";

import { unstable_cache as cache } from "next/cache";
import { z } from "zod";
import { cleanupStaleSessions } from "@/actions/session-actions";
import { prisma } from "@/lib/db";
import { findCountryCoordinates } from "@/lib/maps/country-coordinates";
import type { BrowserStats, TopPageData } from "@/types/analytics";
import type {
  CityResult,
  CountryCodeResult,
  CountryStats,
  CountryWithCities,
  CountryWithVisits,
  TopCountryData,
  TopCountryResult,
} from "@/types/geo";

// ============================================================================
// ANALYTICS STATS - OPTIMIZED WITH AGGREGATION
// ============================================================================

const getAnalyticsStatsSchema = z.object({
  siteId: z.string(),
  userId: z.string(),
  days: z.number().default(7),
});

export async function getAnalyticsStats(
  params: z.input<typeof getAnalyticsStatsSchema>,
) {
  const validation = getAnalyticsStatsSchema.safeParse(params);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const { siteId, userId, days } = validation.data;

  return await cache(
    async () => {
      const site = await prisma.site.findFirst({
        where: {
          id: siteId,
          userId: userId,
        },
      });

      if (!site) {
        throw new Error("Site not found or access denied");
      }

      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      // Use aggregation queries instead of multiple distinct queries
      const [totalViews, recentViews, uniquePages, uniqueVisits] =
        await Promise.all([
          prisma.pageViewEvent.count({
            where: { siteId },
          }),
          prisma.pageViewEvent.count({
            where: {
              siteId,
              timestamp: { gte: startDate },
            },
          }),
          // Use groupBy with _count instead of distinct
          prisma.pageViewEvent
            .groupBy({
              by: ["url"],
              where: { siteId },
              _count: { url: true },
            })
            .then((groups) => groups.length),
          // Use groupBy with _count instead of distinct
          prisma.pageViewEvent
            .groupBy({
              by: ["ip"],
              where: {
                siteId,
                ip: { not: null },
              },
              _count: { ip: true },
            })
            .then((groups) => groups.length),
        ]);

      return {
        totalViews,
        recentViews,
        uniquePages,
        uniqueVisits,
      };
    },
    [`${siteId}-analytics-stats-${days}`],
    {
      revalidate: 300,
      tags: [`${siteId}-analytics`],
    },
  )();
}

// ============================================================================
// RECENT PAGE VIEWS - OPTIMIZED WITH PAGINATION
// ============================================================================

const getRecentPageViewsSchema = z.object({
  siteId: z.string(),
  userId: z.string(),
  limit: z.number().min(1).max(100).default(10),
  offset: z.number().min(0).default(0),
  cursor: z.string().optional(),
});

export async function getRecentPageViews(
  params: z.input<typeof getRecentPageViewsSchema>,
) {
  const validation = getRecentPageViewsSchema.safeParse(params);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const { siteId, userId, limit, offset, cursor } = validation.data;

  return await cache(
    async () => {
      const site = await prisma.site.findFirst({
        where: {
          id: siteId,
          userId: userId,
        },
      });

      if (!site) {
        throw new Error("Site not found or access denied");
      }

      // Cursor-based pagination (more efficient than offset)
      const whereClause = cursor
        ? {
            siteId,
            timestamp: { lt: new Date(cursor) },
          }
        : { siteId };

      const [recentViews, totalCount] = await Promise.all([
        prisma.pageViewEvent.findMany({
          where: whereClause,
          orderBy: { timestamp: "desc" },
          take: limit,
          select: {
            id: true,
            url: true,
            timestamp: true,
            country: true,
            city: true,
            userAgent: true,
          },
        }),
        prisma.pageViewEvent.count({
          where: { siteId },
        }),
      ]);

      return {
        data: recentViews,
        pagination: {
          total: totalCount,
          limit,
          offset,
          hasMore: recentViews.length === limit,
          nextCursor:
            recentViews.length > 0
              ? recentViews[recentViews.length - 1].timestamp.toISOString()
              : null,
        },
      };
    },
    [`${siteId}-recent-page-views-${limit}-${offset}-${cursor || "initial"}`],
    {
      revalidate: 300,
      tags: [`${siteId}-analytics`],
    },
  )();
}

// ============================================================================
// TOP COUNTRIES - OPTIMIZED WITH AGGREGATION
// ============================================================================

const getTopCountriesSchema = z.object({
  siteId: z.string(),
  userId: z.string(),
  limit: z.number().min(1).max(50).default(5),
});

export async function getTopCountries(
  params: z.infer<typeof getTopCountriesSchema>,
) {
  const validation = getTopCountriesSchema.safeParse(params);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const { siteId, userId, limit } = validation.data;

  return await cache(
    async () => {
      const site = await prisma.site.findFirst({
        where: {
          id: siteId,
          userId: userId,
        },
      });

      if (!site) {
        throw new Error("Site not found or access denied");
      }

      // Use aggregation with groupBy and _count
      const topCountries = await prisma.pageViewEvent.groupBy({
        by: ["country", "countryCode"],
        where: {
          siteId,
          country: { not: null },
          countryCode: { not: null },
        },
        _count: {
          country: true,
        },
        orderBy: {
          _count: {
            country: "desc",
          },
        },
        take: limit,
      });

      return topCountries.map(
        (c: TopCountryResult): TopCountryData => ({
          country: c.country || "",
          countryCode: c.countryCode || "",
          views: Number(c._count.country) || 0,
        }),
      );
    },
    [`${siteId}-top-countries-${limit}`],
    {
      revalidate: 300,
      tags: [`${siteId}-analytics`],
    },
  )();
}

// ============================================================================
// VISITS BY COUNTRY - OPTIMIZED WITH AGGREGATION
// ============================================================================

const getVisitsByCountrySchema = z.object({
  siteId: z.string(),
  userId: z.string(),
  limit: z.number().min(1).max(100).default(20),
});

export async function getVisitsByCountry(
  params: z.infer<typeof getVisitsByCountrySchema>,
) {
  const validation = getVisitsByCountrySchema.safeParse(params);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const { siteId, userId, limit } = validation.data;

  return await cache(
    async () => {
      const site = await prisma.site.findFirst({
        where: {
          id: siteId,
          userId: userId,
        },
      });

      if (!site) {
        throw new Error("Site not found or access denied");
      }

      // Get countries with visits using aggregation
      const countriesWithVisits = await prisma.pageViewEvent.groupBy({
        by: ["country", "countryCode", "lat", "lon"],
        where: {
          siteId,
          country: { not: null },
          countryCode: { not: null },
        },
        _count: {
          country: true,
        },
        orderBy: {
          _count: {
            country: "desc",
          },
        },
        take: limit,
      });

      // Get city breakdown for each country using aggregation
      const countriesWithCities = await Promise.all(
        countriesWithVisits.map(
          async (country: CountryWithVisits): Promise<CountryWithCities> => {
            const cities = await prisma.pageViewEvent.groupBy({
              by: ["city"],
              where: {
                siteId,
                country: country.country,
                city: { not: null },
              },
              _count: {
                city: true,
              },
              orderBy: {
                _count: {
                  city: "desc",
                },
              },
              take: 10, // Limit cities per country
            });

            return {
              country: country.country || "",
              countryCode: country.countryCode || "",
              totalVisits: country._count.country,
              coordinates:
                country.lat && country.lon
                  ? ([country.lon, country.lat] as [number, number])
                  : null,
              cities: cities.map((city: CityResult) => ({
                name: city.city || "",
                visits: city._count.city,
              })),
            };
          },
        ),
      );

      return countriesWithCities.filter(
        (country) => country.coordinates !== null,
      );
    },
    [`${siteId}-visits-by-country-${limit}`],
    {
      revalidate: 300,
      tags: [`${siteId}-analytics`],
    },
  )();
}

// ============================================================================
// COUNTRY VISIT STATS - OPTIMIZED WITH AGGREGATION
// ============================================================================

const getCountryVisitStatsSchema = z.object({
  siteId: z.string(),
  userId: z.string(),
  limit: z.number().min(1).max(100).default(20),
});

export async function getCountryVisitStats(
  params: z.infer<typeof getCountryVisitStatsSchema>,
) {
  const validation = getCountryVisitStatsSchema.safeParse(params);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const { siteId, userId, limit } = validation.data;

  return await cache(
    async () => {
      const site = await prisma.site.findFirst({
        where: {
          id: siteId,
          userId: userId,
        },
      });

      if (!site) {
        throw new Error("Site not found or access denied");
      }

      // Get countries with visits using aggregation
      const countriesWithVisits = await prisma.pageViewEvent.groupBy({
        by: ["country", "countryCode"],
        where: {
          siteId,
          country: { not: null },
          countryCode: { not: null },
        },
        _count: {
          country: true,
        },
        orderBy: {
          _count: {
            country: "desc",
          },
        },
        take: limit,
      });

      // Get detailed stats for each country using aggregation
      const countriesWithStats = await Promise.all(
        countriesWithVisits.map(
          async (country: TopCountryResult): Promise<CountryStats> => {
            const countryCode = country.countryCode || "";
            const coordinates = findCountryCoordinates(countryCode);

            if (!coordinates) {
              throw new Error(
                `No coordinates found for country code: ${countryCode}, country: ${country.country}`,
              );
            }

            // Get mobile vs desktop breakdown using aggregation
            const [mobileVisits, desktopVisits, uniqueVisits] =
              await Promise.all([
                prisma.pageViewEvent.count({
                  where: {
                    siteId,
                    country: country.country,
                    mobile: true,
                  },
                }),
                prisma.pageViewEvent.count({
                  where: {
                    siteId,
                    country: country.country,
                    mobile: false,
                  },
                }),
                // Use groupBy instead of distinct
                prisma.pageViewEvent
                  .groupBy({
                    by: ["ip"],
                    where: {
                      siteId,
                      country: country.country,
                      ip: { not: null },
                    },
                    _count: { ip: true },
                  })
                  .then((groups) => groups.length),
              ]);

            return {
              country: country.country || "",
              countryCode,
              totalVisits: Number(country._count.country) || 0,
              mobileVisits: Number(mobileVisits) || 0,
              desktopVisits: Number(desktopVisits) || 0,
              uniqueVisits: Number(uniqueVisits) || 0,
              coordinates: coordinates
                ? ([coordinates.longitude, coordinates.latitude] as [
                    number,
                    number,
                  ])
                : null,
            };
          },
        ),
      );

      return countriesWithStats.sort((a, b) => b.totalVisits - a.totalVisits);
    },
    [`${siteId}-country-visit-stats-${limit}`],
    {
      revalidate: 300,
      tags: [`${siteId}-analytics`],
    },
  )();
}

// ============================================================================
// MOBILE DESKTOP STATS - OPTIMIZED WITH AGGREGATION
// ============================================================================

const getMobileDesktopStatsSchema = z.object({
  siteId: z.string(),
  userId: z.string(),
});

export async function getMobileDesktopStats(
  params: z.infer<typeof getMobileDesktopStatsSchema>,
) {
  const validation = getMobileDesktopStatsSchema.safeParse(params);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const { siteId, userId } = validation.data;

  return await cache(
    async () => {
      const site = await prisma.site.findFirst({
        where: {
          id: siteId,
          userId: userId,
        },
      });

      if (!site) {
        throw new Error("Site not found or access denied");
      }

      // Use aggregation instead of distinct queries
      const [uniqueMobileVisits, uniqueDesktopVisits] = await Promise.all([
        prisma.pageViewEvent
          .groupBy({
            by: ["ip"],
            where: {
              siteId,
              mobile: true,
              ip: { not: null },
            },
            _count: { ip: true },
          })
          .then((groups) => groups.length),
        prisma.pageViewEvent
          .groupBy({
            by: ["ip"],
            where: {
              siteId,
              mobile: false,
              ip: { not: null },
            },
            _count: { ip: true },
          })
          .then((groups) => groups.length),
      ]);

      return {
        mobile: uniqueMobileVisits,
        desktop: uniqueDesktopVisits,
      };
    },
    [`${siteId}-mobile-desktop-stats`],
    {
      revalidate: 300,
      tags: [`${siteId}-analytics`],
    },
  )();
}

// ============================================================================
// TOP PAGES - OPTIMIZED WITH AGGREGATION
// ============================================================================

const getTopPagesSchema = z.object({
  siteId: z.string(),
  userId: z.string(),
  limit: z.number().min(1).max(100).default(10),
});

export async function getTopPages(params: z.input<typeof getTopPagesSchema>) {
  const validation = getTopPagesSchema.safeParse(params);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const { siteId, userId, limit } = validation.data;

  return await cache(
    async () => {
      const site = await prisma.site.findFirst({
        where: {
          id: siteId,
          userId: userId,
        },
      });

      if (!site) {
        throw new Error("Site not found or access denied");
      }

      // Use aggregation to get page counts
      const pageCounts = await prisma.pageViewEvent.groupBy({
        by: ["url"],
        where: { siteId },
        _count: { url: true },
        orderBy: {
          _count: { url: "desc" },
        },
        take: limit,
      });

      // Process URLs to extract pathnames
      const topPages = pageCounts.map((page): TopPageData => {
        let path = page.url;
        try {
          path = new URL(page.url).pathname;
        } catch {
          // Keep original URL if parsing fails
        }
        return {
          path,
          count: page._count.url,
        };
      });

      return topPages;
    },
    [`${siteId}-top-pages-${limit}`],
    {
      revalidate: 300,
      tags: [`${siteId}-analytics`],
    },
  )();
}

// ============================================================================
// BROWSER STATS - OPTIMIZED WITH AGGREGATION
// ============================================================================

const getBrowserStatsSchema = z.object({
  siteId: z.string(),
  userId: z.string(),
  limit: z.number().min(1).max(20).default(10),
});

export async function getBrowserStats(
  params: z.infer<typeof getBrowserStatsSchema>,
) {
  const validation = getBrowserStatsSchema.safeParse(params);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const { siteId, userId, limit } = validation.data;

  return await cache(
    async () => {
      const site = await prisma.site.findFirst({
        where: {
          id: siteId,
          userId: userId,
        },
      });

      if (!site) {
        throw new Error("Site not found or access denied");
      }

      // Get all page views with user agent data
      const pageViews = await prisma.pageViewEvent.findMany({
        where: {
          siteId,
          userAgent: { not: null },
        },
        select: {
          userAgent: true,
        },
        take: 1000, // Limit to prevent memory issues
      });

      // Parse user agents to extract browser information
      const browserStats: Record<string, number> = {};

      pageViews.forEach((view: { userAgent: string | null }) => {
        const userAgent = view.userAgent || "";
        let browser = "Unknown";

        // Simple browser detection logic
        if (userAgent.includes("Chrome")) {
          browser = "Chrome";
        } else if (userAgent.includes("Firefox")) {
          browser = "Firefox";
        } else if (
          userAgent.includes("Safari") &&
          !userAgent.includes("Chrome")
        ) {
          browser = "Safari";
        } else if (userAgent.includes("Edge")) {
          browser = "Edge";
        } else if (userAgent.includes("Opera")) {
          browser = "Opera";
        } else if (
          userAgent.includes("MSIE") ||
          userAgent.includes("Trident")
        ) {
          browser = "Internet Explorer";
        }

        browserStats[browser] = (browserStats[browser] || 0) + 1;
      });

      // Convert to array format and limit results
      const browserData = Object.entries(browserStats)
        .map(([browser, count]): BrowserStats => ({ browser, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, limit);

      return browserData;
    },
    [`${siteId}-browser-stats-${limit}`],
    {
      revalidate: 300,
      tags: [`${siteId}-analytics`],
    },
  )();
}

// ============================================================================
// SESSION ANALYTICS - OPTIMIZED WITH AGGREGATION
// ============================================================================

const getSessionAnalyticsSchema = z.object({
  siteId: z.string(),
  userId: z.string(),
  days: z.number().default(30),
  limit: z.number().min(1).max(50).default(5),
});

export async function getSessionAnalytics(
  params: z.input<typeof getSessionAnalyticsSchema>,
) {
  const validation = getSessionAnalyticsSchema.safeParse(params);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const { siteId, userId, days, limit } = validation.data;

  return await cache(
    async () => {
      const site = await prisma.site.findFirst({
        where: {
          id: siteId,
          userId: userId,
        },
      });

      if (!site) {
        throw new Error("Site not found or access denied");
      }

      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      // Use aggregation for session statistics
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
          take: limit,
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
        recentSessions,
      };
    },
    [`${siteId}-session-analytics-${days}-${limit}`],
    {
      revalidate: 300,
      tags: [`${siteId}-analytics`],
    },
  )();
}

// ============================================================================
// LIVE USERS - OPTIMIZED
// ============================================================================

const getLiveUsersSchema = z.object({
  siteId: z.string(),
  userId: z.string(),
});

export async function getLiveUsers(params: z.infer<typeof getLiveUsersSchema>) {
  const validation = getLiveUsersSchema.safeParse(params);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const { siteId, userId } = validation.data;

  return await cache(
    async () => {
      const site = await prisma.site.findFirst({
        where: {
          id: siteId,
          userId: userId,
        },
      });

      if (!site) {
        throw new Error("Site not found or access denied");
      }

      // Clean up stale sessions first
      await cleanupStaleSessions();

      // Count active sessions using aggregation
      const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);

      const liveUsers = await prisma.trackedSession.count({
        where: {
          siteId,
          endedAt: null, // Active sessions only
          startedAt: {
            gte: thirtyMinutesAgo, // Only count sessions started in last 30 minutes
          },
        },
      });

      return liveUsers;
    },
    [`${siteId}-live-users`],
    {
      revalidate: 30, // 30 seconds - more frequent updates for live data
      tags: [`${siteId}-analytics`],
    },
  )();
}

// ============================================================================
// DEBUG FUNCTION - KEPT FOR DEVELOPMENT
// ============================================================================

export async function debugCountryCodes(
  params: z.infer<typeof getCountryVisitStatsSchema>,
) {
  const validation = getCountryVisitStatsSchema.safeParse(params);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const { siteId, userId } = validation.data;

  const site = await prisma.site.findFirst({
    where: {
      id: siteId,
      userId: userId,
    },
  });

  if (!site) {
    throw new Error("Site not found or access denied");
  }

  // Get all unique country codes using aggregation
  const uniqueCountryCodes = await prisma.pageViewEvent.groupBy({
    by: ["country", "countryCode"],
    where: {
      siteId,
      country: { not: null },
      countryCode: { not: null },
    },
    _count: {
      countryCode: true,
    },
  });

  return uniqueCountryCodes;
}
