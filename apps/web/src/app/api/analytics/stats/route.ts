import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const siteId = searchParams.get("siteId");
    const days = parseInt(searchParams.get("days") || "7"); // Default to last 7 days

    if (!siteId) {
      return NextResponse.json(
        { error: "siteId is required" },
        { status: 400 }
      );
    }

    // Verify the user owns this site
    const site = await prisma.site.findFirst({
      where: {
        id: siteId,
        userId: session.user.id,
      },
    });

    if (!site) {
      return NextResponse.json(
        { error: "Site not found or access denied" },
        { status: 404 }
      );
    }

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Get basic stats
    const [totalViews, recentViews, uniquePages, topCountries] =
      await Promise.all([
        // Total page views for this site
        prisma.pageViewEvent.count({
          where: { siteId },
        }),

        // Page views in the specified time period
        prisma.pageViewEvent.count({
          where: {
            siteId,
            timestamp: {
              gte: startDate,
            },
          },
        }),

        // Unique pages visited
        prisma.pageViewEvent.findMany({
          where: { siteId },
          distinct: ["url"],
          select: { url: true },
        }),

        // Top countries by page views
        prisma.pageViewEvent.groupBy({
          by: ["country"],
          where: {
            siteId,
            country: { not: null },
            timestamp: {
              gte: startDate,
            },
          },
          _count: {
            country: true,
          },
          orderBy: {
            _count: {
              country: "desc",
            },
          },
          take: 10,
        }),
      ]);

    // Get top pages (most visited)
    const topPages = await prisma.pageViewEvent.groupBy({
      by: ["url"],
      where: {
        siteId,
        timestamp: {
          gte: startDate,
        },
      },
      _count: {
        url: true,
      },
      orderBy: {
        _count: {
          url: "desc",
        },
      },
      take: 10,
    });

    // Get daily page views for the time period
    const dailyViews = (await prisma.$queryRaw`
      SELECT 
        DATE(timestamp) as date,
        COUNT(*) as views
      FROM "PageViewEvent"
      WHERE "siteId" = ${siteId}
        AND timestamp >= ${startDate}
      GROUP BY DATE(timestamp)
      ORDER BY DATE(timestamp) ASC
    `) as Array<{ date: string; views: bigint }>;

    // Convert bigint to number for JSON serialization
    const formattedDailyViews = dailyViews.map((day) => ({
      date: day.date,
      views: Number(day.views),
    }));

    const formattedTopPages = topPages.map((page) => ({
      url: page.url,
      views: page._count.url,
    }));

    const formattedTopCountries = topCountries.map((country) => ({
      country: country.country,
      views: country._count.country,
    }));

    return NextResponse.json({
      totalViews,
      recentViews,
      uniquePages: uniquePages.length,
      topPages: formattedTopPages,
      topCountries: formattedTopCountries,
      dailyViews: formattedDailyViews,
      period: {
        days,
        startDate: startDate.toISOString(),
        endDate: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Error fetching analytics stats:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
