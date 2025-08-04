"use client";

import { Badge } from "@bklit/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@bklit/ui/components/card";
import { Skeleton } from "@bklit/ui/components/skeleton";
import { useTeamPlanStatusWithSubscription } from "@/hooks/polar-hooks";

interface TeamSubscriptionStatusProps {
  teamId: string;
}

export function TeamSubscriptionStatus({
  teamId,
}: TeamSubscriptionStatusProps) {
  const {
    planDetails,
    subscription,
    isLoading,
    hasActiveSubscription,
    subscriptionEndDate,
    isCanceled,
  } = useTeamPlanStatusWithSubscription(teamId);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Subscription Status</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-32 mb-2" />
          <Skeleton className="h-4 w-48" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscription Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Current Plan:</span>
          <Badge variant={hasActiveSubscription ? "default" : "secondary"}>
            {planDetails.name}
          </Badge>
        </div>

        {hasActiveSubscription && subscription && (
          <div className="space-y-2">
            <div className="text-sm">
              <span className="text-muted-foreground">Status: </span>
              <Badge variant="outline" className="ml-1">
                {subscription.status}
              </Badge>
            </div>

            {subscriptionEndDate && (
              <div className="text-sm">
                <span className="text-muted-foreground">Renews: </span>
                {new Date(subscriptionEndDate).toLocaleDateString()}
              </div>
            )}

            {isCanceled && (
              <div className="text-sm text-amber-600 dark:text-amber-400">
                ⚠️ Subscription will cancel at the end of the current period
              </div>
            )}
          </div>
        )}

        {!hasActiveSubscription && (
          <div className="text-sm text-muted-foreground">
            No active subscription found
          </div>
        )}
      </CardContent>
    </Card>
  );
}
