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

    // Get recent page views with location data (last 5 minutes for "live" users)
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);

    const recentPageViews = await prisma.pageViewEvent.findMany({
      where: {
        siteId,
        timestamp: {
          gte: fiveMinutesAgo,
        },
        // Only include views with location data
        country: { not: null },
      },
      select: {
        id: true,
        url: true,
        timestamp: true,
        country: true,
        countryCode: true,
        region: true,
        regionName: true,
        city: true,
        lat: true,
        lon: true,
        timezone: true,
        isp: true,
        mobile: true,
      },
      orderBy: {
        timestamp: "desc",
      },
      take: 50, // Limit to recent 50 views
    });

    // Group by location to show unique visitors per location
    const locationMap = new Map();

    recentPageViews.forEach((view) => {
      const locationKey = `${view.country}-${view.region}-${view.city}`;
      if (!locationMap.has(locationKey)) {
        locationMap.set(locationKey, {
          country: view.country,
          countryCode: view.countryCode,
          region: view.region,
          regionName: view.regionName,
          city: view.city,
          lat: view.lat,
          lon: view.lon,
          timezone: view.timezone,
          isp: view.isp,
          mobile: view.mobile,
          lastSeen: view.timestamp,
          viewCount: 1,
        });
      } else {
        const existing = locationMap.get(locationKey);
        existing.viewCount++;
        if (view.timestamp > existing.lastSeen) {
          existing.lastSeen = view.timestamp;
        }
      }
    });

    const liveUsers = Array.from(locationMap.values());

    return NextResponse.json({
      liveUsers,
      totalLocations: liveUsers.length,
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching live users:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
