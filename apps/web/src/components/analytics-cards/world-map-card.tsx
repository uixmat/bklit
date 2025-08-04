"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@bklit/ui/components/card";
import { authClient } from "@/auth/client";
import { useProject } from "@/contexts/project-context";
import { WorldMap } from "../maps/world-map";
import { Skeleton } from "../ui/skeleton";

export function WorldMapCard() {
  const { currentSiteId } = useProject();
  const { data: session } = authClient.useSession();

  if (!currentSiteId || !session?.user?.id) {
    return <WorldMapCardSkeleton />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>World Map</CardTitle>
        <CardDescription>
          A map of the world with the number of page views per country.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[400px] w-full">
        <WorldMap siteId={currentSiteId} userId={session.user.id} />
      </CardContent>
    </Card>
  );
}

export function WorldMapCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>World Map</CardTitle>
        <CardDescription>
          A map of the world with the number of page views per country.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[400px] w-full">
        <Skeleton className="h-[400px] w-full" />
      </CardContent>
    </Card>
  );
}
