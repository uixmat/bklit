"use client";

import React, { useEffect, useState, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProject } from "@/contexts/project-context";
import { getAnalyticsStats } from "@/actions/analytics-actions";
import { Skeleton } from "@/components/ui/skeleton";

interface AnalyticsStats {
  totalViews: number;
  recentViews: number;
  uniquePages: number;
  uniqueVisits: number;
}

export function ViewsCard({ userId }: { userId: string }) {
  const { currentSiteId } = useProject();
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [liveUsers, setLiveUsers] = useState(0);
  const socketRef = useRef<Socket | null>(null);
  const previousLiveUsersRef = useRef<number>(0);

  useEffect(() => {
    previousLiveUsersRef.current = liveUsers;
  }, [liveUsers]);

  useEffect(() => {
    if (!currentSiteId) return;

    const fetchStats = async () => {
      try {
        setLoading(true);
        const data = await getAnalyticsStats({ siteId: currentSiteId, userId });
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch analytics stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [currentSiteId, userId]);

  useEffect(() => {
    if (!currentSiteId) return;

    socketRef.current = io({
      path: "/api/socketio",
      addTrailingSlash: false,
    });
    const socket = socketRef.current;

    socket.on("connect", () => {
      socket.emit("join_site_room", currentSiteId);
    });

    socket.on("update_live_users", (count: number) => {
      const newDisplayCount = Math.max(0, count - 1);
      setLiveUsers(newDisplayCount);

      if (newDisplayCount > previousLiveUsersRef.current) {
        toast.info("A new user is viewing the site!");
      }
    });

    socket.on("disconnect", () => {});

    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    return () => {
      if (socket) {
        socket.emit("leave_site_room", currentSiteId);
        socket.disconnect();
        socketRef.current = null;
      }
    };
  }, [currentSiteId]);

  if (loading || !stats) {
    return <ViewsCardSkeleton />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Stats</CardTitle>
        <CardDescription>A quick overview of your app.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold">
                {stats.totalViews.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                {stats.uniqueVisits.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">
                Unique Visitors
              </div>
            </div>
          </div>
          <div className="pt-2 border-t">
            <div className="text-2xl font-bold">{liveUsers}</div>
            <div className="text-sm text-muted-foreground">Live Users</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ViewsCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Stats</CardTitle>
        <CardDescription>A quick overview of your app.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <Skeleton className="h-8 w-20 rounded" />
              <Skeleton className="h-4 w-16 mt-1 rounded" />
            </div>
            <div>
              <Skeleton className="h-8 w-20 rounded" />
              <Skeleton className="h-4 w-20 mt-1 rounded" />
            </div>
          </div>
          <div className="pt-2 border-t">
            <Skeleton className="h-4 w-24 rounded" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
