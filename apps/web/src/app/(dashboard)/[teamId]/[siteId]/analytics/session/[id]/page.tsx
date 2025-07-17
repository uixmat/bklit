import { format, formatDistanceToNow } from "date-fns";
import { ArrowLeft, Clock, Globe, MapPin, Monitor } from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { getSessionById } from "@/actions/session-actions";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserSession } from "@/components/reactflow/user-session";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SessionPageProps {
  params: Promise<{ teamId: string; siteId: string; id: string }>;
}

function formatDuration(seconds: number | null): string {
  if (!seconds) return "0s";

  if (seconds < 60) {
    return `${seconds}s`;
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if (remainingSeconds === 0) {
    return `${minutes}m`;
  }

  return `${minutes}m ${remainingSeconds}s`;
}

function getBrowserFromUserAgent(userAgent: string | null): string {
  if (!userAgent) return "Unknown";

  if (userAgent.includes("Chrome")) return "Chrome";
  if (userAgent.includes("Firefox")) return "Firefox";
  if (userAgent.includes("Safari")) return "Safari";
  if (userAgent.includes("Edge")) return "Edge";

  return "Other";
}

function getDeviceType(userAgent: string | null): string {
  if (!userAgent) return "Unknown";

  if (userAgent.includes("Mobile")) return "Mobile";
  if (userAgent.includes("Tablet")) return "Tablet";

  return "Desktop";
}

export default async function SessionPage({ params }: SessionPageProps) {
  const { teamId, siteId, id } = await params;
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/signin");
  }

  let sessionData;
  try {
    sessionData = await getSessionById(id);
  } catch {
    notFound();
  }

  const browser = getBrowserFromUserAgent(sessionData.userAgent);
  const deviceType = getDeviceType(sessionData.userAgent);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href={`/${teamId}/${siteId}/analytics`}
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Analytics</span>
          </Link>
        </div>
        <div className="text-right">
          <h1 className="text-2xl font-bold">Session Details</h1>
          <p className="text-sm text-muted-foreground">
            {sessionData.site.name} • {sessionData.site.domain}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Session Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Session Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Started</span>
                <span className="text-sm font-medium">
                  {formatDistanceToNow(new Date(sessionData.startedAt), {
                    addSuffix: true,
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Duration</span>
                <span className="text-sm font-medium">{formatDuration(sessionData.duration)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Pages Viewed</span>
                <span className="text-sm font-medium">{sessionData.pageViewEvents.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <Badge variant={sessionData.didBounce ? "destructive" : "default"}>
                  {sessionData.didBounce ? "Bounced" : "Engaged"}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Device & Browser */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Monitor className="h-5 w-5" />
              <span>Device & Browser</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Browser</span>
                <span className="text-sm font-medium">{browser}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Device</span>
                <span className="text-sm font-medium">{deviceType}</span>
              </div>
              {sessionData.visitorId && (
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Visitor ID</span>
                  <span className="text-sm font-mono text-xs">{sessionData.visitorId}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Location */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Location</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              {sessionData.country ? (
                <>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Country</span>
                    <span className="text-sm font-medium">{sessionData.country}</span>
                  </div>
                  {sessionData.city && (
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">City</span>
                      <span className="text-sm font-medium">{sessionData.city}</span>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-sm text-muted-foreground">Location data not available</div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Page Flow */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Page Flow</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {sessionData.pageViewEvents.map(
                (
                  pageView: {
                    id: string;
                    url: string;
                    timestamp: Date;
                    country: string | null;
                    city: string | null;
                  },
                  index: number
                ) => (
                  <div key={pageView.id} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{pageView.url}</div>
                      <div className="text-xs text-muted-foreground">
                        {format(new Date(pageView.timestamp), "HH:mm:ss")}
                        {pageView.country && ` • ${pageView.country}`}
                        {pageView.city && `, ${pageView.city}`}
                      </div>
                    </div>
                    {index === 0 && (
                      <Badge variant="secondary" className="text-xs">
                        Entry
                      </Badge>
                    )}
                    {index === sessionData.pageViewEvents.length - 1 && (
                      <Badge variant="secondary" className="text-xs">
                        Exit
                      </Badge>
                    )}
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Page Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <UserSession session={sessionData} />
        </CardContent>
      </Card>
    </div>
  );
}
