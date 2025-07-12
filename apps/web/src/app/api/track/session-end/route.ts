import { NextRequest, NextResponse } from "next/server";
import { endSession } from "@/actions/session-actions";

interface SessionEndPayload {
  sessionId: string;
  siteId: string;
}

// Helper function to create a response with CORS headers
function createCorsResponse(
  body: Record<string, unknown> | { message: string; error?: string },
  status: number
) {
  const response = NextResponse.json(body, { status });
  response.headers.set("Access-Control-Allow-Origin", "*");
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
    const payload: SessionEndPayload = await request.json();
    console.log("🔄 API: Session end request received", {
      sessionId: payload.sessionId,
      siteId: payload.siteId,
    });

    if (!payload.sessionId || !payload.siteId) {
      return createCorsResponse(
        { message: "sessionId and siteId are required" },
        400
      );
    }

    // End the session
    console.log("🔄 API: Ending session...", {
      sessionId: payload.sessionId,
      siteId: payload.siteId,
    });

    await endSession(payload.sessionId);
    console.log("✅ API: Session ended successfully", {
      sessionId: payload.sessionId,
      siteId: payload.siteId,
    });

    return createCorsResponse({ message: "Session ended successfully" }, 200);
  } catch (error) {
    console.error("Error ending session:", error);
    let errorMessage = "Error ending session";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return createCorsResponse(
      { message: "Error ending session", error: errorMessage },
      500
    );
  }
}
