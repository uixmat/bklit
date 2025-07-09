"use server";

import { prisma } from "@/lib/db";
import { unstable_cache as cache } from "next/cache";
import { z } from "zod";

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

      const [totalViews, recentViews, uniquePages] = await Promise.all([
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
      ]);

      return {
        totalViews,
        recentViews,
        uniquePages: uniquePages.length,
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
