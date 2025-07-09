import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { TotalViewsCard } from "@/components/analytics-cards/total-views-card";
import { TopCountriesCard } from "@/components/analytics-cards/top-countries-card";
import { RecentPageViewsCard } from "@/components/analytics-cards/recent-page-views-card";
import { Suspense } from "react";
import {
  TopCountriesCardSkeleton,
  TotalViewsCardSkeleton,
  RecentPageViewsCardSkeleton,
  WorldMapCardSkeleton,
} from "@/components/analytics-cards/skeletons";
import { WorldMapCard } from "@/components/analytics-cards/world-map-card";

export default async function AnalyticsPage({
  params,
}: {
  params: { siteId: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/signin");
  }

  return (
    <>
      <PageHeader
        title="Analytics"
        description="Here are your site's analytics."
      />
      <div
        className="grid gap-4 
      md:grid-cols-2 lg:grid-cols-3"
      >
        <Suspense fallback={<TotalViewsCardSkeleton />}>
          <TotalViewsCard siteId={params.siteId} userId={session.user.id} />
        </Suspense>
        <Suspense fallback={<TopCountriesCardSkeleton />}>
          <TopCountriesCard siteId={params.siteId} userId={session.user.id} />
        </Suspense>
        <Suspense fallback={<RecentPageViewsCardSkeleton />}>
          <RecentPageViewsCard
            siteId={params.siteId}
            userId={session.user.id}
          />
        </Suspense>
      </div>
      <div className="grid gap-4 mt-4">
        <Suspense fallback={<WorldMapCardSkeleton />}>
          <WorldMapCard />
        </Suspense>
      </div>
    </>
  );
}
