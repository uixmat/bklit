import { type NextRequest, NextResponse } from "next/server";
import { getSessionAnalytics } from "@/actions/session-actions";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const projectId = searchParams.get("projectId");
  const days = Number(searchParams.get("days") || 30);

  if (!projectId) {
    return NextResponse.json({ error: "Missing projectId" }, { status: 400 });
  }

  const data = await getSessionAnalytics(projectId, days);
  return NextResponse.json(data);
}
