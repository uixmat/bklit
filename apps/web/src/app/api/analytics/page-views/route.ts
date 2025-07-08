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
    const limit = parseInt(searchParams.get("limit") || "100");
    const offset = parseInt(searchParams.get("offset") || "0");

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

    // Get historical page views
    const pageViews = await prisma.pageViewEvent.findMany({
      where: {
        siteId: siteId,
      },
      orderBy: {
        timestamp: "desc",
      },
      take: limit,
      skip: offset,
      select: {
        id: true,
        url: true,
        timestamp: true,
        createdAt: true,
        // Location data
        ip: true,
        country: true,
        countryCode: true,
        region: true,
        regionName: true,
        city: true,
        zip: true,
        lat: true,
        lon: true,
        timezone: true,
        isp: true,
        mobile: true,
      },
    });

    // Get total count for pagination
    const totalCount = await prisma.pageViewEvent.count({
      where: {
        siteId: siteId,
      },
    });

    return NextResponse.json({
      pageViews,
      totalCount,
      limit,
      offset,
      hasMore: offset + limit < totalCount,
    });
  } catch (error) {
    console.error("Error fetching page views:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
