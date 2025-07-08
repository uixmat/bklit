import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTopCountries } from "@/actions/analytics-actions";
import { Skeleton } from "@/components/ui/skeleton";

interface TopCountriesCardProps {
  siteId: string;
  userId: string;
}

export async function TopCountriesCard({
  siteId,
  userId,
}: TopCountriesCardProps) {
  const topCountries = await getTopCountries({ siteId, userId });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Countries</CardTitle>
        <CardDescription>Top countries by page views.</CardDescription>
      </CardHeader>
      <CardContent>
        {topCountries.length > 0 ? (
          <div className="flex flex-col gap-2">
            {topCountries.map((country, i) => (
              <div
                key={i}
                className="flex flex-row justify-between items-center h-6"
              >
                <span className="font-medium">
                  {country.country || "Unknown"}
                </span>
                <span className="text-xs text-muted-foreground">
                  {country.views}
                </span>
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
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-6 w-full rounded" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
