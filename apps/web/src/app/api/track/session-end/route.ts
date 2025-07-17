import { type NextRequest, NextResponse } from "next/server";
import { endSession } from "@/actions/session-actions";

// Helper function to create a response with CORS headers
function createCorsResponse(
	body: Record<string, unknown> | { message: string; error?: string },
	status: number,
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
		const { sessionId } = await request.json();

		// Use the shared endSession logic
		const updatedSession = await endSession(sessionId);

		return createCorsResponse(
			{
				message: "Session ended",
				endedAt: updatedSession.endedAt,
				duration: updatedSession.duration,
				didBounce: updatedSession.didBounce,
			},
			200,
		);
	} catch (error) {
		console.error("Error ending session:", error);
		return createCorsResponse(
			{
				message: "Error ending session",
				error: error instanceof Error ? error.message : String(error),
			},
			500,
		);
	}
}
