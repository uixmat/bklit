import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSessionAnalytics } from "@/actions/analytics-actions";
import { Suspense } from "react";
import { SessionAnalyticsSkeleton } from "./skeletons";

interface SessionAnalyticsCardProps {
  siteId: string;
  userId: string;
  days?: number;
}

async function SessionAnalyticsContent({
  siteId,
  userId,
  days = 30,
}: SessionAnalyticsCardProps) {
  const analytics = await getSessionAnalytics({ siteId, userId, days });

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{analytics.totalSessions}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{analytics.bounceRate}%</div>
          <p className="text-xs text-muted-foreground">
            {analytics.bouncedSessions} of {analytics.totalSessions} sessions
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Avg Session Duration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {analytics.avgSessionDuration > 60
              ? `${Math.floor(analytics.avgSessionDuration / 60)}m ${
                  analytics.avgSessionDuration % 60
                }s`
              : `${analytics.avgSessionDuration}s`}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg Page Views</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{analytics.avgPageViews}</div>
          <p className="text-xs text-muted-foreground">per session</p>
        </CardContent>
      </Card>
    </div>
  );
}

export function SessionAnalyticsCard(props: SessionAnalyticsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Session Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<SessionAnalyticsSkeleton />}>
          <SessionAnalyticsContent {...props} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
