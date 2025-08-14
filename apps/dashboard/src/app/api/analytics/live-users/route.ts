import { prisma } from "@bklit/db/client";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get("projectId");

    if (!projectId) {
      return NextResponse.json(
        { error: "projectId parameter is required" },
        { status: 400 },
      );
    }

    // Count active sessions (sessions that haven't ended)
    const liveUsers = await prisma.trackedSession.count({
      where: {
        projectId: projectId,
        endedAt: null, // Active sessions only
      },
    });

    return NextResponse.json({ liveUsers });
  } catch (error) {
    console.error("Error getting live users count:", error);
    return NextResponse.json(
      { error: "Failed to get live users count" },
      { status: 500 },
    );
  }
}
