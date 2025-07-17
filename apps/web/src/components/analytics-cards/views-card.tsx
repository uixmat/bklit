"use client";

import { useEffect, useRef, useState } from "react";
import { io, type Socket } from "socket.io-client";
import { toast } from "sonner";
import {
	getAnalyticsStats,
	getLiveUsers,
	getSessionAnalytics,
} from "@/actions/analytics-actions";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useProject } from "@/contexts/project-context";

interface AnalyticsStats {
	totalViews: number;
	recentViews: number;
	uniquePages: number;
	uniqueVisits: number;
}

interface SessionAnalytics {
	totalSessions: number;
	bounceRate: number;
}

export function ViewsCard({ userId }: { userId: string }) {
	const { currentSiteId } = useProject();
	const [stats, setStats] = useState<AnalyticsStats | null>(null);
	const [sessionStats, setSessionStats] = useState<SessionAnalytics | null>(
		null,
	);
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
				const [data, sessionData, liveUsersData] = await Promise.all([
					getAnalyticsStats({ siteId: currentSiteId, userId }),
					getSessionAnalytics({ siteId: currentSiteId, userId }),
					getLiveUsers({ siteId: currentSiteId, userId }),
				]);
				setStats(data);
				setSessionStats({
					totalSessions: sessionData.totalSessions,
					bounceRate: sessionData.bounceRate,
				});
				setLiveUsers(liveUsersData);
			} catch (error) {
				console.error("Failed to fetch analytics stats:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchStats();

		// Set up periodic refresh for live users count (every 30 seconds)
		const interval = setInterval(() => {
			getLiveUsers({ siteId: currentSiteId, userId }).then(setLiveUsers);
		}, 30000);

		return () => clearInterval(interval);
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

		socket.on("new_page_view", () => {
			// Show notification when new page view is tracked
			toast.info("A new page view was tracked!");

			// Optionally refresh live users count
			getLiveUsers({ siteId: currentSiteId, userId }).then(setLiveUsers);
		});

		socket.on("disconnect", () => {});

		return () => {
			if (socket) {
				socket.emit("leave_site_room", currentSiteId);
				socket.disconnect();
				socketRef.current = null;
			}
		};
	}, [currentSiteId, userId]);

	if (loading || !stats || !sessionStats) {
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
								{sessionStats.totalSessions.toLocaleString()}
							</div>
							<div className="text-sm text-muted-foreground">
								Total Sessions
							</div>
						</div>
						<div>
							<div className="text-2xl font-bold">
								{sessionStats.bounceRate}%
							</div>
							<div className="text-sm text-muted-foreground">Bounce Rate</div>
						</div>
					</div>
					<div className="flex justify-between items-center pt-2 border-t">
						<div>
							<div className="text-2xl font-bold">
								{stats.uniqueVisits.toLocaleString()}
							</div>
							<div className="text-sm text-muted-foreground">
								Unique Visitors
							</div>
						</div>
						<div>
							<div className="text-2xl font-bold">{liveUsers}</div>
							<div className="text-sm text-muted-foreground">Live Users</div>
						</div>
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
						<div>
							<Skeleton className="h-8 w-20 rounded" />
							<Skeleton className="h-4 w-20 mt-1 rounded" />
						</div>
					</div>
					<div className="flex justify-between items-center pt-2 border-t">
						<div>
							<Skeleton className="h-8 w-20 rounded" />
							<Skeleton className="h-4 w-20 mt-1 rounded" />
						</div>
						<div>
							<Skeleton className="h-8 w-20 rounded" />
							<Skeleton className="h-4 w-20 mt-1 rounded" />
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
