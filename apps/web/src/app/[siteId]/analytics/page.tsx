import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { ViewsCard } from "@/components/analytics-cards/views-card";
import { TopCountriesCard } from "@/components/analytics-cards/top-countries-card";
import { RecentPageViewsCard } from "@/components/analytics-cards/recent-page-views-card";
import { Suspense } from "react";
import {
  TopCountriesCardSkeleton,
  RecentPageViewsCardSkeleton,
  WorldMapCardSkeleton,
  MobileDesktopCardSkeleton,
} from "@/components/analytics-cards/skeletons";
import { WorldMapCard } from "@/components/analytics-cards/world-map-card";
import { MobileDesktopCard } from "@/components/analytics-cards/mobile-desktop-card";
import { BrowserStatsCard } from "@/components/analytics-cards/browser-stats-card";

export default async function AnalyticsPage({
  params,
}: {
  params: Promise<{ siteId: string }>;
}) {
  const { siteId } = await params;
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/signin");
  }

  return (
    <>
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
      </div>
      <div
        className="grid gap-4 
      md:grid-cols-2 lg:grid-cols-3"
      >
        <Suspense fallback={<MobileDesktopCardSkeleton />}>
          <MobileDesktopCard />
        </Suspense>
        <BrowserStatsCard />
      </div>
      <div className="grid gap-4">
        <Suspense fallback={<WorldMapCardSkeleton />}>
          <WorldMapCard />
        </Suspense>
      </div>
    </>
  );
}
