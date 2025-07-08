import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      <CardHeader>
        <CardTitle>Total Page Views</CardTitle>
        <CardDescription>All-time recorded page views</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{stats.totalViews}</div>
      </CardContent>
    </Card>
  );
}

export function TotalViewsCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Page Views</CardTitle>
        <Skeleton className="size-4 rounded" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-1/2 rounded" />
        <Skeleton className="h-4 w-3/4 mt-1 rounded" />
      </CardContent>
    </Card>
  );
}
