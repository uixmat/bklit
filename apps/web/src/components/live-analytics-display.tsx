"use client";

import React, { useEffect, useState, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProject } from "@/contexts/project-context";
import { TopCountriesCardSkeleton } from "./analytics-cards/top-countries-card";
import { TotalViewsCardSkeleton } from "./analytics-cards/total-views-card";

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
    <Card className="card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Live Users</CardTitle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="size-4 text-muted-foreground"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{liveUsers}</div>
        <p className="text-xs text-muted-foreground">
          Currently viewing &quot;{activeProject?.name}&quot;
        </p>
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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card className="card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Live Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
          </CardContent>
        </Card>
        <TopCountriesCardSkeleton />
        <TotalViewsCardSkeleton />
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
