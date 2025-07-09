"use server";

import { prisma } from "@/lib/db";
import { unstable_cache as cache } from "next/cache";
import { z } from "zod";
import { findCountryCoordinates } from "@/lib/maps/country-coordinates";

const getTopCountriesSchema = z.object({
  siteId: z.string(),
  userId: z.string(),
});

export async function getTopCountries(
  params: z.infer<typeof getTopCountriesSchema>
) {
  const validation = getTopCountriesSchema.safeParse(params);

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
        take: 5,
      });

      return topCountries.map((c) => ({
        country: c.country,
        countryCode: c.countryCode,
        views: c._count.country,
      }));
    },
    [`${siteId}-top-countries`],
    {
      revalidate: 300, // 5 minutes
      tags: [`${siteId}-analytics`],
    }
  )();
}

const getAnalyticsStatsSchema = z.object({
  siteId: z.string(),
  userId: z.string(),
  days: z.number().default(7),
});

export async function getAnalyticsStats(
  params: z.input<typeof getAnalyticsStatsSchema>
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

      const [totalViews, recentViews, uniquePages, uniqueVisits] =
        await Promise.all([
          prisma.pageViewEvent.count({
            where: { siteId },
          }),
          prisma.pageViewEvent.count({
            where: {
              siteId,
              timestamp: {
                gte: startDate,
              },
            },
          }),
          prisma.pageViewEvent.findMany({
            where: { siteId },
            distinct: ["url"],
            select: { url: true },
          }),
          prisma.pageViewEvent.findMany({
            where: {
              siteId,
              ip: { not: null },
            },
            distinct: ["ip"],
            select: { ip: true },
          }),
        ]);

      return {
        totalViews,
        recentViews,
        uniquePages: uniquePages.length,
        uniqueVisits: uniqueVisits.length,
      };
    },
    [`${siteId}-analytics-stats`],
    {
      revalidate: 300, // 5 minutes
      tags: [`${siteId}-analytics`],
    }
  )();
}

const getRecentPageViewsSchema = z.object({
  siteId: z.string(),
  userId: z.string(),
  limit: z.number().default(5),
});

export async function getRecentPageViews(
  params: z.input<typeof getRecentPageViewsSchema>
) {
  const validation = getRecentPageViewsSchema.safeParse(params);

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

      const recentViews = await prisma.pageViewEvent.findMany({
        where: {
          siteId,
        },
        orderBy: {
          timestamp: "desc",
        },
        take: limit,
      });

      return recentViews;
    },
    [`${siteId}-recent-page-views`],
    {
      revalidate: 60, // 1 minute
      tags: [`${siteId}-analytics`],
    }
  )();
}

const getVisitsByCountrySchema = z.object({
  siteId: z.string(),
  userId: z.string(),
});

export async function getVisitsByCountry(
  params: z.infer<typeof getVisitsByCountrySchema>
) {
  const validation = getVisitsByCountrySchema.safeParse(params);

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

      // Get all countries with visits
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
      });

      // Get city breakdown for each country
      const countriesWithCities = await Promise.all(
        countriesWithVisits.map(async (country) => {
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
          });

          return {
            country: country.country!,
            countryCode: country.countryCode!,
            totalVisits: country._count.country,
            coordinates:
              country.lat && country.lon
                ? ([country.lon, country.lat] as [number, number])
                : null,
            cities: cities.map((city) => ({
              name: city.city!,
              visits: city._count.city,
            })),
          };
        })
      );

      return countriesWithCities.filter(
        (country) => country.coordinates !== null
      );
    },
    [`${siteId}-visits-by-country`],
    {
      revalidate: 300, // 5 minutes
      tags: [`${siteId}-analytics`],
    }
  )();
}

const getCountryVisitStatsSchema = z.object({
  siteId: z.string(),
  userId: z.string(),
});

export async function getCountryVisitStats(
  params: z.infer<typeof getCountryVisitStatsSchema>
) {
  const validation = getCountryVisitStatsSchema.safeParse(params);

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

      // Get all countries with visits, grouped by country
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
      });

      // Get detailed stats for each country
      const countriesWithStats = await Promise.all(
        countriesWithVisits.map(async (country) => {
          const countryCode = country.countryCode!;
          const coordinates = findCountryCoordinates(countryCode);

          // Debug logging to see what country codes we're getting
          if (!coordinates) {
            console.log(
              `No coordinates found for country code: ${countryCode}, country: ${country.country}`
            );
          }

          // Get mobile vs desktop breakdown
          const mobileVisits = await prisma.pageViewEvent.count({
            where: {
              siteId,
              country: country.country,
              mobile: true,
            },
          });

          const desktopVisits = await prisma.pageViewEvent.count({
            where: {
              siteId,
              country: country.country,
              mobile: false,
            },
          });

          // Get unique visits by IP
          const uniqueVisits = await prisma.pageViewEvent.groupBy({
            by: ["ip"],
            where: {
              siteId,
              country: country.country,
              ip: { not: null },
            },
            _count: {
              ip: true,
            },
          });

          return {
            country: country.country!,
            countryCode,
            totalVisits: country._count.country,
            mobileVisits,
            desktopVisits,
            uniqueVisits: uniqueVisits.length,
            coordinates: coordinates
              ? ([coordinates.longitude, coordinates.latitude] as [
                  number,
                  number
                ])
              : null,
          };
        })
      );

      // Debug: Log all countries and their coordinate status
      console.log(
        "Countries with visits:",
        countriesWithStats.map((c) => ({
          country: c.country,
          countryCode: c.countryCode,
          hasCoordinates: c.coordinates !== null,
          totalVisits: c.totalVisits,
        }))
      );

      // Temporarily return all countries to debug (including those without coordinates)
      const result = countriesWithStats.sort(
        (a, b) => b.totalVisits - a.totalVisits
      );

      console.log(
        "Final result:",
        result.map((c) => ({
          country: c.country,
          countryCode: c.countryCode,
          hasCoordinates: c.coordinates !== null,
          totalVisits: c.totalVisits,
        }))
      );

      return result;
    },
    [`${siteId}-country-visit-stats`],
    {
      revalidate: 300, // 5 minutes
      tags: [`${siteId}-analytics`],
    }
  )();
}

export async function debugCountryCodes(
  params: z.infer<typeof getCountryVisitStatsSchema>
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

  // Get all unique country codes from the database
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

  console.log(
    "Unique country codes in database:",
    uniqueCountryCodes.map((c) => ({
      country: c.country,
      countryCode: c.countryCode,
      count: c._count.countryCode,
    }))
  );

  return uniqueCountryCodes;
}

const getMobileDesktopStatsSchema = z.object({
  siteId: z.string(),
  userId: z.string(),
});

export async function getMobileDesktopStats(
  params: z.infer<typeof getMobileDesktopStatsSchema>
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

      // Get unique mobile visits by IP
      const uniqueMobileVisits = await prisma.pageViewEvent.groupBy({
        by: ["ip"],
        where: {
          siteId,
          mobile: true,
          ip: { not: null },
        },
        _count: {
          ip: true,
        },
      });

      // Get unique desktop visits by IP
      const uniqueDesktopVisits = await prisma.pageViewEvent.groupBy({
        by: ["ip"],
        where: {
          siteId,
          mobile: false,
          ip: { not: null },
        },
        _count: {
          ip: true,
        },
      });

      return {
        mobile: uniqueMobileVisits.length,
        desktop: uniqueDesktopVisits.length,
      };
    },
    [`${siteId}-mobile-desktop-stats`],
    {
      revalidate: 300, // 5 minutes
      tags: [`${siteId}-analytics`],
    }
  )();
}
