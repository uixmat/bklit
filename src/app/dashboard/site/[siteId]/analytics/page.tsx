import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/lib/db";
import redis from "@/lib/redis"; // Assuming redis client is at @/lib/redis.ts
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
  siteId: string; // Though redundant if fetched for a specific site, good to have from original data
  // Add any other properties from your tracking data if needed
}

async function getSiteDetails(siteId: string, userId: string) {
  const site = await db.site.findUnique({
    where: {
      id: siteId,
      userId: userId, // Ensure the site belongs to the logged-in user
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
  const { siteId } = params;
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    redirect("/"); // Redirect to home/login if not authenticated
  }

  const site = await getSiteDetails(siteId, session.user.id);

  if (!site) {
    // Optionally, redirect to dashboard or show a specific "not found or not authorized" page
    redirect("/dashboard?error=site_not_found");
  }

  const trackingData = await getSiteTrackingData(siteId);

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Link href="/dashboard">
          <Button variant="outline">← Back to Dashboard</Button>
        </Link>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            <strong>Project Name:</strong> {site.name}
          </p>
          <p className="text-muted-foreground">
            <strong>Project ID:</strong> {site.id}
          </p>
          {site.domain && (
            <p className="text-muted-foreground">
              <strong>Domain:</strong> {site.domain}
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tracked Page Views for: {site.name}</CardTitle>
          <CardDescription>
            A list of page views captured by the tracking script.
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
