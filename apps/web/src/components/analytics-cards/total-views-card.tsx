import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAnalyticsStats } from "@/actions/analytics-actions";
import { Skeleton } from "@/components/ui/skeleton";

interface TotalViewsCardProps {
  siteId: string;
  userId: string;
}

export async function TotalViewsCard({ siteId, userId }: TotalViewsCardProps) {
  const stats = await getAnalyticsStats({ siteId, userId });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Page Views</CardTitle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="size-4 text-muted-foreground"
        >
          <path d="M12 20V10" />
          <path d="M18 20V4" />
          <path d="M6 20V16" />
        </svg>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{stats.totalViews}</div>
        <p className="text-xs text-muted-foreground">
          All-time recorded page views
        </p>
      </CardContent>
    </Card>
  );
}

export function TotalViewsCardSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Page Views</CardTitle>
        <Skeleton className="size-4 rounded" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-1/2 rounded" />
        <Skeleton className="h-4 w-3/4 mt-1 rounded" />
      </CardContent>
    </Card>
  );
}
