import { NextRequest, NextResponse } from "next/server";
import redis from "@/lib/redis"; // Corrected path assuming redis.ts is in apps/web/src/lib
import { getIoServer } from "@/lib/socketio-server"; // Import getIoServer

interface TrackingPayload {
  url: string;
  timestamp: string;
  siteId: string; // Added siteId
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
export async function OPTIONS(_request: NextRequest) {
  return createCorsResponse({ message: "CORS preflight OK" }, 200);
}

export async function POST(request: NextRequest) {
  try {
    const payload: TrackingPayload = await request.json();
    console.log("Tracking data received:", payload);

    if (!payload.siteId) {
      return createCorsResponse({ message: "siteId is required" }, 400);
    }

    // Store data in Redis, using siteId in the key
    const redisKey = `events:${payload.siteId}`;
    await redis.rpush(redisKey, JSON.stringify(payload)); // Store the whole payload
    console.log(`Data pushed to Redis list: ${redisKey}`);

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
