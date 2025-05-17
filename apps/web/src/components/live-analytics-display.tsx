"use client";

import React, { useEffect, useState, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProject } from "@/contexts/project-context"; // To get currentSiteId

interface LiveAnalyticsDisplayProps {
  totalHistoricalViews: number;
}

export function LiveAnalyticsDisplay({
  totalHistoricalViews,
}: LiveAnalyticsDisplayProps) {
  const { currentSiteId, activeProject } = useProject();
  const [liveUsers, setLiveUsers] = useState(0);
  const socketRef = useRef<Socket | null>(null);
  const previousLiveUsersRef = useRef<number>(0);

  useEffect(() => {
    previousLiveUsersRef.current = liveUsers; // Update previous count whenever liveUsers changes
  }, [liveUsers]);

  useEffect(() => {
    if (!currentSiteId) return;

    // Initialize socket connection
    // The path option is crucial and must match the server-side path.
    // If your pages API route is at /api/socketio.ts, then the path for the client is usually just /api/socketio
    // However, our initializeSocketIO explicitly sets path: '/api/socketio' for the server instance.
    socketRef.current = io({
      path: "/api/socketio",
      addTrailingSlash: false,
    });
    const socket = socketRef.current;

    socket.on("connect", () => {
      console.log("Socket connected to server:", socket.id);
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
      // Optionally, handle user leaving toast if desired, e.g.:
      // else if (newDisplayCount < previousLiveUsersRef.current) {
      //   toast.info(`A user left ${activeProject?.name || 'the site'}.`);
      // }
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected from server");
    });

    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    // Cleanup on component unmount
    return () => {
      if (socket) {
        socket.emit("leave_site_room", currentSiteId);
        socket.disconnect();
        socketRef.current = null;
      }
    };
  }, [currentSiteId]);

  if (!activeProject) {
    return <p>Loading project...</p>; // Or some other placeholder
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      <Card>
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
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{liveUsers}</div>
          <p className="text-xs text-muted-foreground">
            Currently viewing &quot;{activeProject.name}&quot;
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Location Info</CardTitle>
          {/* Placeholder Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">[N/A]</div>
          <p className="text-xs text-muted-foreground">
            Top regions by live users
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Placeholder Card
          </CardTitle>
          {/* Placeholder Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">[Data]</div>
          <p className="text-xs text-muted-foreground">
            Details for placeholder
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Page Views
          </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 20V10" />
            <path d="M18 20V4" />
            <path d="M6 20V16" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalHistoricalViews}</div>
          <p className="text-xs text-muted-foreground">
            All-time recorded page views
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
