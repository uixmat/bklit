import { NextRequest, NextResponse } from "next/server";
import redis from "@/lib/redis"; // Corrected path assuming redis.ts is in apps/web/src/lib
import { getIoServer } from "@/lib/socketio-server"; // Import getIoServer
import { prisma } from "@/lib/db"; // Import Prisma client
import { getLocationFromIP, extractClientIP } from "@/lib/ip-geolocation";
import { createOrUpdateSession } from "@/actions/session-actions";

interface TrackingPayload {
  url: string;
  timestamp: string;
  siteId: string; // Added siteId
  userAgent?: string; // Add user agent to payload
  sessionId?: string; // Session identifier
  referrer?: string; // Where they came from
  // other potential fields
}

// Helper function to create a response with CORS headers
function createCorsResponse(
  body: Record<string, unknown> | { message: string; error?: string },
  status: number
) {
  const response = NextResponse.json(body, { status });
  response.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
  return createCorsResponse({ message: "CORS preflight OK" }, 200);
}

export async function POST(request: NextRequest) {
  try {
    const payload: TrackingPayload = await request.json();
    console.log("📊 API: Page view tracking request received", {
      url: payload.url,
      siteId: payload.siteId,
      sessionId: payload.sessionId,
      timestamp: payload.timestamp,
    });

    if (!payload.siteId) {
      return createCorsResponse({ message: "siteId is required" }, 400);
    }

    // Extract client IP and get location data
    const clientIP = extractClientIP(request);
    let locationData = null;

    if (clientIP) {
      try {
        locationData = await getLocationFromIP(clientIP);
        if (locationData) {
          console.log(
            `Location data retrieved for IP ${clientIP}: ${locationData.city}, ${locationData.country}`
          );
        }
      } catch (locationError) {
        console.warn("Error fetching location data:", locationError);
        // Continue without location data
      }
    }

    // Store data in Redis for real-time features
    const redisKey = `events:${payload.siteId}`;
    const eventData = {
      ...payload,
      location: locationData,
    };
    await redis.rpush(redisKey, JSON.stringify(eventData)); // Store the whole payload with location
    console.log(`Data pushed to Redis list: ${redisKey}`);

    // Handle session tracking if sessionId is provided
    if (payload.sessionId) {
      try {
        console.log("🔄 API: Updating session...", {
          sessionId: payload.sessionId,
          siteId: payload.siteId,
          url: payload.url,
        });

        await createOrUpdateSession({
          sessionId: payload.sessionId,
          siteId: payload.siteId,
          url: payload.url,
          userAgent: payload.userAgent,
          country: locationData?.country,
          city: locationData?.city,
        });
        console.log("✅ API: Session updated successfully", {
          sessionId: payload.sessionId,
          siteId: payload.siteId,
        });
      } catch (sessionError) {
        console.error("❌ API: Error updating session:", sessionError);
        // Continue execution - session tracking failed but page view tracking should still work
      }
    }

    // Save page view to database for historical persistence
    try {
      console.log("💾 API: Saving page view to database...", {
        url: payload.url,
        siteId: payload.siteId,
        sessionId: payload.sessionId,
      });

      await prisma.pageViewEvent.create({
        data: {
          url: payload.url,
          timestamp: new Date(payload.timestamp),
          siteId: payload.siteId,
          userAgent: payload.userAgent,
          // Location data
          ip: locationData?.ip,
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
          // Link to session if available
          sessionId: payload.sessionId || null,
        },
      });
      console.log("✅ API: Page view saved to database successfully", {
        siteId: payload.siteId,
        sessionId: payload.sessionId,
      });
    } catch (dbError) {
      console.error("❌ API: Error saving page view to database:", dbError);
      // Continue execution - Redis storage succeeded, so real-time features still work
    }

    // Emit event via Socket.IO
    const io = getIoServer();
    if (io) {
      // We don't have the live user count here directly from siteViewers map without more complex state sharing.
      // For now, let's just signal that a new event happened for that siteId.
      // The client can then re-fetch or the server could push the new total if it calculated it.
      // However, our socketio-server already updates live_users on join/leave.
      // Let's emit a generic event, or perhaps we can make track endpoint also update the count.
      // For simplicity, let's assume the existing join/leave in socketio-server is the primary source for live_users count.
      // This emission can be for other real-time updates like "new_page_view".
      io.to(payload.siteId).emit("new_page_view", payload); // Emit the new page view data
      console.log(
        `Socket event 'new_page_view' emitted to room: ${payload.siteId}`
      );
    } else {
      console.warn("Socket.IO server instance not found. Cannot emit event.");
    }

    console.log("✅ API: Page view tracking completed successfully", {
      siteId: payload.siteId,
      sessionId: payload.sessionId,
    });

    return createCorsResponse({ message: "Data received and stored" }, 200);
  } catch (error) {
    console.error("Error processing tracking data:", error);
    // Check if the error is from Redis or JSON parsing etc.
    let errorMessage = "Error processing request";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return createCorsResponse(
      { message: "Error processing request", error: errorMessage },
      500
    );
  }
}
