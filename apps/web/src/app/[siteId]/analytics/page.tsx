import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/db";
import redis from "@/lib/redis";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PageView {
  url: string;
  timestamp: string;
  siteId: string;
}

async function getSiteDetails(siteId: string, userId: string) {
  const site = await prisma.site.findUnique({
    where: {
      id: siteId,
      userId: userId,
    },
  });
  return site;
}

async function getSiteTrackingData(siteId: string): Promise<PageView[]> {
  try {
    const redisKey = `events:${siteId}`;
    const data = await redis.lrange(redisKey, 0, -1);
    return data
      .map((item) => {
        try {
          return JSON.parse(item) as PageView;
        } catch (e) {
          console.error(
            `Failed to parse tracking event item from ${redisKey}:`,
            item,
            e
          );
          return null;
        }
      })
      .filter(Boolean) as PageView[];
  } catch (error) {
    console.error(`Error fetching data from Redis for site ${siteId}:`, error);
    return [];
  }
}

interface SiteAnalyticsPageProps {
  params: {
    siteId: string;
  };
}

export default async function SiteAnalyticsPage({
  params,
}: SiteAnalyticsPageProps) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    redirect("/");
  }

  const { siteId } = params;
  const site = await getSiteDetails(siteId, session.user.id);

  if (!site) {
    // The main [siteId]/layout.tsx should already handle redirects for invalid siteIds.
    // This is an additional safeguard.
    redirect(`/?error=site_not_found_or_unauthorized`);
  }

  const trackingData = await getSiteTrackingData(siteId);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{site.name} - Analytics</h1>
          <p className="text-muted-foreground">
            Review captured page views for your project.
          </p>
        </div>
        <Link href={`/${site.id}`}>
          {" "}
          {/* Updated back link */}
          <Button variant="outline">← Back to Project Dashboard</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tracked Page Views</CardTitle>
          <CardDescription>
            A list of page views captured by the tracking script for &quot;
            {site.name}&quot;.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {trackingData.length > 0 ? (
            <ul className="space-y-2">
              {trackingData.map((event: PageView, index: number) => (
                <li
                  key={index}
                  className="p-3 border rounded-md bg-muted/50 text-sm"
                >
                  <p>
                    <strong>URL:</strong> {event.url}
                  </p>
                  <p>
                    <strong>Timestamp:</strong>{" "}
                    {new Date(event.timestamp).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No tracking data yet for this project.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
