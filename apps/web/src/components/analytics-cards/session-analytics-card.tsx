"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { getSessionAnalytics } from "@/actions/session-actions";
import { useProject } from "@/contexts/project-context";
import { Skeleton } from "@/components/ui/skeleton";

export function SessionAnalyticsCard() {
  const { currentSiteId } = useProject();

  const { data: analytics, isLoading } = useQuery({
    queryKey: ["session-analytics", currentSiteId],
    queryFn: () => getSessionAnalytics(currentSiteId!, 30),
    enabled: !!currentSiteId,
  });

  if (isLoading || !analytics) {
    return <SessionAnalyticsCardSkeleton />;
  }

  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Session Analytics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{analytics.totalSessions}</div>
            <div className="text-sm text-muted-foreground">Total Sessions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{analytics.bounceRate}%</div>
            <div className="text-sm text-muted-foreground">Bounce Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">
              {formatDuration(analytics.avgSessionDuration)}
            </div>
            <div className="text-sm text-muted-foreground">Avg Duration</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{analytics.avgPageViews}</div>
            <div className="text-sm text-muted-foreground">Avg Page Views</div>
          </div>
        </div>

        {/* Visitor Types */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Visitor Types</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {analytics.newVisitors}
              </div>
              <div className="text-sm text-muted-foreground">New Visitors</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {analytics.returningVisitors}
              </div>
              <div className="text-sm text-muted-foreground">
                Returning Visitors
              </div>
            </div>
          </div>
        </div>

        {/* Recent Sessions */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Recent Sessions</h3>
          <div className="space-y-3">
            {analytics.sessions.map((session) => (
              <div
                key={session.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{session.entryPage}</span>
                    {session.didBounce && (
                      <Badge variant="destructive" className="text-xs">
                        Bounced
                      </Badge>
                    )}
                    {session.isReturning && (
                      <Badge variant="secondary" className="text-xs">
                        Returning
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {session.pageViews} pages • {session.uniquePages} unique
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">
                    {session.duration
                      ? formatDuration(session.duration)
                      : "Ongoing"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {formatDate(session.entryTime)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function SessionAnalyticsCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Session Analytics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="text-center">
              <Skeleton className="h-8 w-16 mx-auto mb-2" />
              <Skeleton className="h-4 w-20 mx-auto" />
            </div>
          ))}
        </div>
        <div>
          <Skeleton className="h-6 w-32 mb-3" />
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <Skeleton key={i} className="h-20 w-full" />
            ))}
          </div>
        </div>
        <div>
          <Skeleton className="h-6 w-32 mb-3" />
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-16 w-full" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
