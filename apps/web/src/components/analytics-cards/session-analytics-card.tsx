import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRecentSessions } from "@/actions/session-actions";
import { Suspense } from "react";
import { SessionAnalyticsSkeleton } from "./skeletons";
import { formatDistanceToNow } from "date-fns";

interface SessionAnalyticsCardProps {
  siteId: string;
}

function formatDuration(seconds: number | null): string {
  if (!seconds) return "0s";

  if (seconds < 60) {
    return `${seconds}s`;
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if (remainingSeconds === 0) {
    return `${minutes}m`;
  }

  return `${minutes}m ${remainingSeconds}s`;
}

async function SessionAnalyticsContent({ siteId }: SessionAnalyticsCardProps) {
  const sessions = await getRecentSessions(siteId, 5);

  return (
    <div className="space-y-3">
      {sessions.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-4">
          No sessions found
        </p>
      ) : (
        sessions.map((session) => (
          <div
            key={session.id}
            className="flex items-center justify-between p-3 rounded-lg border bg-card"
          >
            <div className="flex-1">
              <div className="text-sm font-medium">
                {formatDistanceToNow(new Date(session.startedAt), {
                  addSuffix: true,
                })}
              </div>
              <div className="text-xs text-muted-foreground">
                {session.pageViewEvents.length} pages
              </div>
            </div>
            <div className="text-sm font-medium">
              {formatDuration(session.duration)}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export function SessionAnalyticsCard(props: SessionAnalyticsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sessions</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<SessionAnalyticsSkeleton />}>
          <SessionAnalyticsContent {...props} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
