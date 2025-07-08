import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Suspense } from "react";
import {
  RecentPageViewsCard,
  RecentPageViewsCardSkeleton,
} from "@/components/analytics-cards/recent-page-views-card";
import { LiveAnalyticsDisplay } from "@/components/live-analytics-display";
import {
  TopCountriesCard,
  TopCountriesCardSkeleton,
} from "@/components/analytics-cards/top-countries-card";
import {
  TotalViewsCard,
  TotalViewsCardSkeleton,
} from "@/components/analytics-cards/total-views-card";

async function getSiteDetails(siteId: string, userId: string) {
  const site = await prisma.site.findUnique({
    where: {
      id: siteId,
      userId: userId,
    },
  });
  return site;
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
    redirect("/");
  }
  const userId = session.user.id;

  const { siteId } = params;
  const site = await getSiteDetails(siteId, userId);

  if (!site) {
    redirect(`/?error=site_not_found_or_unauthorized`);
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={`${site.name} - Analytics`}
        description="Review captured page views and live data for your project."
      />

      <LiveAnalyticsDisplay
        analyticsCards={
          <>
            <Suspense fallback={<TopCountriesCardSkeleton />}>
              <TopCountriesCard siteId={siteId} userId={userId} />
            </Suspense>
            <Suspense fallback={<TotalViewsCardSkeleton />}>
              <TotalViewsCard siteId={siteId} userId={userId} />
            </Suspense>
          </>
        }
      />

      <Suspense fallback={<RecentPageViewsCardSkeleton />}>
        <RecentPageViewsCard siteId={siteId} userId={userId} />
      </Suspense>
    </div>
  );
}
