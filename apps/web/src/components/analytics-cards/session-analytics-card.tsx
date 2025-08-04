import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@bklit/ui/components/card";
import { formatDistanceToNow } from "date-fns";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { getRecentSessions } from "@/actions/session-actions";
import type { SessionAnalyticsCardProps } from "@/types/analytics-cards";
import { SessionAnalyticsSkeleton } from "./skeletons";

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

async function SessionAnalyticsContent({
  siteId,
  organizationId,
}: SessionAnalyticsCardProps) {
  const sessions = await getRecentSessions(siteId, 5);

  return (
    <div className="space-y-3">
      {sessions.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-4">
          No sessions found
        </p>
      ) : (
        sessions.map((session) => (
          <Link
            key={session.id}
            href={`/${organizationId || ""}/${siteId}/analytics/session/${session.id}`}
            className="block"
          >
            <div className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors group">
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
              <div className="flex items-center space-x-2">
                <div className="text-sm font-medium">
                  {formatDuration(session.duration)}
                </div>
                <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export function SessionAnalyticsCard(props: SessionAnalyticsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Recent Sessions</CardTitle>
        <Link
          href={`/${props.organizationId || ""}/${props.siteId}/analytics/sessions`}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View All
        </Link>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<SessionAnalyticsSkeleton />}>
          <SessionAnalyticsContent {...props} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
