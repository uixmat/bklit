import { prisma } from "@/lib/db";
import { getLocationFromIP } from "@/lib/ip-geolocation";

interface SessionData {
  sessionId: string;
  siteId: string;
  url: string;
  timestamp: string;
  userAgent: string;
  referrer?: string;
  ip?: string;
}

interface UTMData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export async function createOrUpdateSession(data: SessionData) {
  try {
    const { sessionId, siteId, url, timestamp, userAgent, referrer, ip } = data;

    // Get location data if IP is provided
    let locationData = null;
    if (ip) {
      locationData = await getLocationFromIP(ip);
    }

    // Extract UTM parameters from URL
    const urlObj = new URL(url);
    const utmData: UTMData = {};
    [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ].forEach((param) => {
      const value = urlObj.searchParams.get(param);
      if (value) {
        utmData[param as keyof UTMData] = value;
      }
    });

    // Extract referrer domain
    let referrerDomain = null;
    if (referrer) {
      try {
        const referrerUrl = new URL(referrer);
        referrerDomain = referrerUrl.hostname;
      } catch {
        // Invalid referrer URL, keep as null
      }
    }

    // Check if this is a returning visitor
    const visitorId = generateVisitorId(userAgent, ip);
    const isReturning = await checkIfReturningVisitor(siteId, visitorId);

    // Check if session exists
    const existingSession = await prisma.trackedSession.findUnique({
      where: { sessionId },
    });

    if (existingSession) {
      // Update existing session
      const updatedSession = await prisma.trackedSession.update({
        where: { sessionId },
        data: {
          pageViews: { increment: 1 },
          uniquePages: await calculateUniquePages(sessionId, url),
          exitPage: url,
          exitTime: new Date(timestamp),
          duration: Math.floor(
            (new Date(timestamp).getTime() -
              existingSession.entryTime.getTime()) /
              1000
          ),
          updatedAt: new Date(),
        },
      });

      // Create page view event linked to session
      await prisma.pageViewEvent.create({
        data: {
          url,
          timestamp: new Date(timestamp),
          userAgent,
          ip,
          country: locationData?.country,
          countryCode: locationData?.countryCode,
          region: locationData?.region,
          regionName: locationData?.regionName,
          city: locationData?.city,
          zip: locationData?.zip,
          lat: locationData?.lat,
          lon: locationData?.lon,
          timezone: locationData?.timezone,
          isp: locationData?.isp,
          mobile: locationData?.mobile,
          siteId,
          sessionId,
        },
      });

      return updatedSession;
    } else {
      // Create new session
      const newSession = await prisma.trackedSession.create({
        data: {
          sessionId,
          entryPage: url,
          entryTime: new Date(timestamp),
          exitPage: url,
          exitTime: new Date(timestamp),
          duration: 0,
          pageViews: 1,
          uniquePages: 1,
          didBounce: false,
          isReturning,
          visitorId,
          utmSource: utmData.utm_source,
          utmMedium: utmData.utm_medium,
          utmCampaign: utmData.utm_campaign,
          utmTerm: utmData.utm_term,
          utmContent: utmData.utm_content,
          referrer,
          referrerDomain,
          userAgent,
          isMobile: locationData?.mobile,
          browser: extractBrowser(userAgent),
          os: extractOS(userAgent),
          country: locationData?.country,
          countryCode: locationData?.countryCode,
          region: locationData?.region,
          city: locationData?.city,
          siteId,
        },
      });

      // Create page view event linked to session
      await prisma.pageViewEvent.create({
        data: {
          url,
          timestamp: new Date(timestamp),
          userAgent,
          ip,
          country: locationData?.country,
          countryCode: locationData?.countryCode,
          region: locationData?.region,
          regionName: locationData?.regionName,
          city: locationData?.city,
          zip: locationData?.zip,
          lat: locationData?.lat,
          lon: locationData?.lon,
          timezone: locationData?.timezone,
          isp: locationData?.isp,
          mobile: locationData?.mobile,
          siteId,
          sessionId,
        },
      });

      return newSession;
    }
  } catch (error) {
    console.error("Error creating/updating session:", error);
    throw error;
  }
}

export async function endSession(sessionId: string) {
  try {
    const session = await prisma.trackedSession.findUnique({
      where: { sessionId },
    });

    if (!session) {
      throw new Error("Session not found");
    }

    const duration = Math.floor(
      (new Date().getTime() - session.entryTime.getTime()) / 1000
    );
    const didBounce = duration < 7.5; // 7.5 seconds bounce threshold

    const updatedSession = await prisma.trackedSession.update({
      where: { sessionId },
      data: {
        exitTime: new Date(),
        duration,
        didBounce,
        bounceTime: didBounce ? duration : null,
        updatedAt: new Date(),
      },
    });

    return updatedSession;
  } catch (error) {
    console.error("Error ending session:", error);
    throw error;
  }
}

export async function getSessionAnalytics(siteId: string, days: number = 30) {
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const sessions = await prisma.trackedSession.findMany({
      where: {
        siteId,
        entryTime: {
          gte: startDate,
        },
      },
      orderBy: {
        entryTime: "desc",
      },
    });

    const totalSessions = sessions.length;
    const bouncedSessions = sessions.filter((s) => s.didBounce).length;
    const bounceRate =
      totalSessions > 0 ? (bouncedSessions / totalSessions) * 100 : 0;

    const avgSessionDuration =
      sessions.length > 0
        ? sessions.reduce((sum, s) => sum + (s.duration || 0), 0) /
          sessions.length
        : 0;

    const avgPageViews =
      sessions.length > 0
        ? sessions.reduce((sum, s) => sum + s.pageViews, 0) / sessions.length
        : 0;

    const returningVisitors = sessions.filter((s) => s.isReturning).length;
    const newVisitors = totalSessions - returningVisitors;

    return {
      totalSessions,
      bouncedSessions,
      bounceRate: Math.round(bounceRate * 100) / 100,
      avgSessionDuration: Math.round(avgSessionDuration),
      avgPageViews: Math.round(avgPageViews * 100) / 100,
      returningVisitors,
      newVisitors,
      sessions: sessions.slice(0, 10), // Return last 10 sessions for detailed view
    };
  } catch (error) {
    console.error("Error getting session analytics:", error);
    throw error;
  }
}

// Helper functions
function generateVisitorId(userAgent: string, ip?: string): string {
  // Simple visitor ID generation - in production you might want something more sophisticated
  const data = `${userAgent}${ip || ""}`;
  return btoa(data).slice(0, 16); // Base64 encode and take first 16 chars
}

async function checkIfReturningVisitor(
  siteId: string,
  visitorId: string
): Promise<boolean> {
  const existingSession = await prisma.trackedSession.findFirst({
    where: {
      siteId,
      visitorId,
      entryTime: {
        lt: new Date(), // Any session before now
      },
    },
  });
  return !!existingSession;
}

async function calculateUniquePages(
  sessionId: string,
  currentUrl: string
): Promise<number> {
  const session = await prisma.trackedSession.findUnique({
    where: { sessionId },
    include: {
      pageViewEvents: true,
    },
  });

  if (!session) return 1;

  const uniqueUrls = new Set([
    session.entryPage,
    ...session.pageViewEvents.map((pv) => pv.url),
    currentUrl,
  ]);

  return uniqueUrls.size;
}

function extractBrowser(userAgent: string): string {
  if (userAgent.includes("Chrome")) return "Chrome";
  if (userAgent.includes("Firefox")) return "Firefox";
  if (userAgent.includes("Safari")) return "Safari";
  if (userAgent.includes("Edge")) return "Edge";
  if (userAgent.includes("Opera")) return "Opera";
  return "Other";
}

function extractOS(userAgent: string): string {
  if (userAgent.includes("Windows")) return "Windows";
  if (userAgent.includes("Mac")) return "macOS";
  if (userAgent.includes("Linux")) return "Linux";
  if (userAgent.includes("Android")) return "Android";
  if (userAgent.includes("iOS")) return "iOS";
  return "Other";
}
