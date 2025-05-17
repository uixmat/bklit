import { NextRequest, NextResponse } from "next/server";
import redis from "../../../lib/redis"; // Adjusted import path

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

    // We will add real-time updates (Socket.IO) here later.

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
