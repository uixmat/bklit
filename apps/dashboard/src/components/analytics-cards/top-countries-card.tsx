import { Badge } from "@bklit/ui/components/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@bklit/ui/components/card";
import { Skeleton } from "@bklit/ui/components/skeleton";
import { CircleFlag } from "react-circle-flags";
import { getTopCountries } from "@/actions/analytics-actions";
import type { AnalyticsCardProps } from "@/types/analytics-cards";

type TopCountriesCardProps = AnalyticsCardProps;

export async function TopCountriesCard({
  projectId,
  userId,
}: TopCountriesCardProps) {
  const topCountries = await getTopCountries({ projectId, userId });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Countries</CardTitle>
        <CardDescription>Top countries by page views.</CardDescription>
      </CardHeader>
      <CardContent>
        {topCountries.length > 0 ? (
          <div className="flex flex-col gap-2">
            {topCountries.map((country) => (
              <div
                key={country.countryCode}
                className="flex flex-row justify-between items-center"
              >
                <div className="flex items-center gap-2">
                  <CircleFlag
                    countryCode={country.countryCode?.toLowerCase() || "us"}
                    className="size-4"
                  />
                  <span className="font-medium text-xs">
                    {country.country || "Unknown"}
                  </span>
                </div>
                <Badge variant="secondary">{country.views}</Badge>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No data yet.</p>
        )}
      </CardContent>
    </Card>
  );
}

export function TopCountriesCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Countries</CardTitle>
        <CardDescription>Top countries by page views.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {[...Array(5)].map((_, index) => {
            const key = `skeleton-${index}`;
            return <Skeleton key={key} className="h-6 w-full rounded" />;
          })}
        </div>
      </CardContent>
    </Card>
  );
}
