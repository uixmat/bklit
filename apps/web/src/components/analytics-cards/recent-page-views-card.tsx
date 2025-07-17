import { getTopPages } from "@/actions/analytics-actions";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface RecentPageViewsCardProps {
  siteId: string;
  userId: string;
}

export async function RecentPageViewsCard({ siteId, userId }: RecentPageViewsCardProps) {
  const topPages = await getTopPages({
    siteId,
    userId,
    limit: 5,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Pages</CardTitle>
        <CardDescription>The most popular pages by views.</CardDescription>
      </CardHeader>
      <CardContent>
        {topPages.length > 0 ? (
          <div className="flex flex-col gap-1">
            {topPages.map((page, index) => (
              <div
                key={index}
                className="border-b border-border text-sm flex gap-2 h-6 items-center justify-between last-of-type:border-none "
              >
                <div className="text-muted-foreground text-xs font-mono whitespace-nowrap overflow-hidden text-ellipsis">
                  {page.path}
                </div>
                <Badge variant="secondary">
                  {page.count} view{page.count !== 1 ? "s" : ""}
                </Badge>
              </div>
            ))}
          </div>
        ) : (
          <p>No page views yet for this project.</p>
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
        <CardDescription>A list of the most recent page views captured.</CardDescription>
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
