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
import { TopCountriesCardSkeleton } from "./analytics-cards/top-countries-card";
import { TotalViewsCardSkeleton } from "./analytics-cards/total-views-card";
import { RecentPageViewsCardSkeleton } from "./analytics-cards/recent-page-views-card";

interface LiveAnalyticsDisplayProps {
  analyticsCards: React.ReactNode;
}

function LiveUsersCard() {
  const { currentSiteId, activeProject } = useProject();
  const [liveUsers, setLiveUsers] = useState(0);
  const socketRef = useRef<Socket | null>(null);
  const previousLiveUsersRef = useRef<number>(0);

  useEffect(() => {
    previousLiveUsersRef.current = liveUsers;
  }, [liveUsers]);

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
        toast.info(
          `A new user is viewing ${activeProject?.name || "the site"}!`
        );
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
  }, [currentSiteId, activeProject?.name]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Users</CardTitle>
        <CardDescription>
          Currently viewing &quot;{activeProject?.name}&quot;
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{liveUsers}</div>
      </CardContent>
    </Card>
  );
}

export function LiveAnalyticsDisplay({
  analyticsCards,
}: LiveAnalyticsDisplayProps) {
  const { currentSiteId, activeProject } = useProject();

  if (!activeProject || !currentSiteId) {
    return (
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Live Users</CardTitle>
            <CardDescription>
              Currently viewing &quot;{activeProject?.name}&quot;
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
          </CardContent>
        </Card>
        <TopCountriesCardSkeleton />
        <TotalViewsCardSkeleton />
        <RecentPageViewsCardSkeleton />
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      <LiveUsersCard />
      {analyticsCards}
    </div>
  );
}
