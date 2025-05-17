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
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    redirect("/"); // Redirect to home/login if not authenticated
  }

  // Explicitly get siteId after session check
  const { siteId } = params;

  const site = await getSiteDetails(siteId, session.user.id);

  if (!site) {
    // Optionally, redirect to dashboard or show a specific "not found or not authorized" page
    redirect("/dashboard?error=site_not_found");
  }

  const trackingData = await getSiteTrackingData(siteId);

  // --- New/Updated Tracking Setup Information ---
  const siteIdForDisplay = site.id;
  const defaultApiHost = "http://localhost:3000/api/track"; // Used for placeholders

  const npmInstallCommand = "pnpm add bklit"; // or: npm install bklit / yarn add bklit
  const npmUsageExample = `\
import { initBklit } from 'bklit';

// In your application client-side code (e.g., main component or layout effects):
initBklit({
  siteId: "${siteIdForDisplay}",
  // By default, the SDK will try to send data to '${defaultApiHost}'.
  // If your Bklit instance gets deployed elsewhere, provide the correct apiHost:
  // apiHost: "https://your-bklit-instance.com/api/track"
});`;

  // --- End New/Updated Tracking Setup Information ---

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

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Tracking Setup</CardTitle>
          <CardDescription>
            Integrate Bklit into your website using the recommended NPM package
            method.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Setup Instructions</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Install the Bklit SDK into your project:
            </p>
            <pre className="p-3 bg-muted rounded-md text-sm overflow-x-auto">
              <code>{npmInstallCommand}</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-3 mb-2">
              Then, initialize it in your application&apos;s client-side
              JavaScript:
            </p>
            <pre className="p-3 bg-muted rounded-md text-sm overflow-x-auto">
              <code>{npmUsageExample}</code>
            </pre>
          </div>

          <div className="pt-4 border-t">
            <h4 className="text-md font-semibold mb-1">
              Important: API Endpoint Configuration
            </h4>
            <p className="text-sm text-muted-foreground">
              The Bklit SDK defaults to sending data to{" "}
              <code>{defaultApiHost}</code>. If your Bklit analytics server
              (this application) is deployed to a different URL, ensure you
              configure the <code>apiHost</code> in the SDK when initializing it
              to point to your production Bklit instance (e.g.,{" "}
              <code>https://your-bklit-app.com/api/track</code>).
            </p>
          </div>

          <div className="pt-4">
            <p className="text-sm font-medium">Your Project ID (Site ID):</p>
            <p className="text-lg font-mono p-2 bg-muted rounded-md inline-block">
              {siteIdForDisplay}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
