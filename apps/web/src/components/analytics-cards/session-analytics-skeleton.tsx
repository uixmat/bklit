import { Skeleton } from "@/components/ui/skeleton";

export function SessionAnalyticsSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 5 }).map((_, i) => {
        const key = `skeleton-${i}`;
        return (
          <div
            key={key}
            className="flex items-center justify-between p-3 rounded-lg border bg-card"
          >
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
            <Skeleton className="h-4 w-12" />
          </div>
        );
      })}
    </div>
  );
}
