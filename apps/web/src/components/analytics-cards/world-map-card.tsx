"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";
import { WorldMap } from "../maps/world-map";
import { useProject } from "@/contexts/project-context";
import { useSession } from "next-auth/react";

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
