import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getRecentPageViews } from "@/actions/analytics-actions";
import { Skeleton } from "@/components/ui/skeleton";

interface RecentPageViewsCardProps {
  siteId: string;
  userId: string;
}

export async function RecentPageViewsCard({
  siteId,
  userId,
}: RecentPageViewsCardProps) {
  const recentViews = await getRecentPageViews({
    siteId,
    userId,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Page Views</CardTitle>
        <CardDescription>
          A list of the most recent page views captured.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {recentViews.length > 0 ? (
          <div className="flex flex-col gap-1">
            {recentViews.map((event, index) => (
              <div
                key={index}
                className="border-b border-border text-sm flex gap-2 h-6 items-center last-of-type:border-none "
              >
                <div className="text-muted-foreground text-xs font-mono whitespace-nowrap overflow-hidden text-ellipsis">
                  {event.url}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No recent page views yet for this project.</p>
        )}
      </CardContent>
    </Card>
  );
}

export function RecentPageViewsCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Page Views</CardTitle>
        <CardDescription>
          A list of the most recent page views captured.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-12 w-full rounded-md" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
