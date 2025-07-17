import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { Suspense } from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { BounceRateCard } from "@/components/analytics-cards/bounce-rate-card";
import { BrowserStatsCard } from "@/components/analytics-cards/browser-stats-card";
import { MobileDesktopCard } from "@/components/analytics-cards/mobile-desktop-card";
import { RecentPageViewsCard } from "@/components/analytics-cards/recent-page-views-card";
import { SessionAnalyticsCard } from "@/components/analytics-cards/session-analytics-card";
import {
  MobileDesktopCardSkeleton,
  RecentPageViewsCardSkeleton,
  TopCountriesCardSkeleton,
  WorldMapCardSkeleton,
} from "@/components/analytics-cards/skeletons";
import { TopCountriesCard } from "@/components/analytics-cards/top-countries-card";
import { ViewsCard } from "@/components/analytics-cards/views-card";
import { WorldMapCard } from "@/components/analytics-cards/world-map-card";

export default async function AnalyticsPage({
  params,
}: {
  params: Promise<{ teamId: string; siteId: string }>;
}) {
  const { teamId, siteId } = await params;
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/signin");
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        className="grid gap-4 
      md:grid-cols-2 lg:grid-cols-3"
      >
        <ViewsCard userId={session.user.id} />
        <Suspense fallback={<TopCountriesCardSkeleton />}>
          <TopCountriesCard siteId={siteId} userId={session.user.id} />
        </Suspense>
        <Suspense fallback={<RecentPageViewsCardSkeleton />}>
          <RecentPageViewsCard siteId={siteId} userId={session.user.id} />
        </Suspense>

        <Suspense fallback={<MobileDesktopCardSkeleton />}>
          <MobileDesktopCard />
        </Suspense>
        <BrowserStatsCard />
        <BounceRateCard />
      </div>
      <div className="grid gap-4">
        <Suspense fallback={<WorldMapCardSkeleton />}>
          <WorldMapCard />
        </Suspense>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <SessionAnalyticsCard siteId={siteId} teamId={teamId} />
      </div>
    </div>
  );
}
