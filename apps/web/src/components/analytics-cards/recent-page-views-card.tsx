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
          <ul className="space-y-2">
            {recentViews.map((event, index) => (
              <li
                key={index}
                className="p-3 border rounded-md bg-muted/50 text-sm flex justify-between"
              >
                <div>
                  <strong>URL:</strong> {event.url}
                </div>
                <div>
                  <strong>Timestamp:</strong>{" "}
                  {new Date(event.timestamp).toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
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
