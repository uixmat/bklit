import { type NextRequest, NextResponse } from "next/server";
import { getSessionAnalytics } from "@/actions/session-actions";

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const siteId = searchParams.get("siteId");
	const days = Number(searchParams.get("days") || 30);

	if (!siteId) {
		return NextResponse.json({ error: "Missing siteId" }, { status: 400 });
	}

	const data = await getSessionAnalytics(siteId, days);
	return NextResponse.json(data);
}
