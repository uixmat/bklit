"use client";
import { useSession } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProject } from "@/contexts/project-context";
import { WorldMap } from "../maps/world-map";
import { Skeleton } from "../ui/skeleton";

export function WorldMapCard() {
  const { currentSiteId } = useProject();
  const { data: session } = useSession();

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
