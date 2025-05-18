"use client";

import React from "react";
import Link from "next/link";
import { useUserPlanStatus } from "@/hooks/use-user-plan-status";
import { useProject } from "@/contexts/project-context";
import { PlanType } from "@/lib/plans";

export function ProjectLimitBanner() {
  const {
    planId,
    hasReachedLimit,
    isLoading: isLoadingPlanStatus,
  } = useUserPlanStatus();
  const { currentSiteId, isLoadingSites } = useProject();

  if (isLoadingPlanStatus || isLoadingSites || !hasReachedLimit) {
    return null;
  }

  return (
    <div
      className="p-1 px-2 text-xs border rounded-sm bg-yellow-50 border-yellow-300 text-yellow-700 dark:bg-yellow-900/30 dark:border-yellow-700 dark:text-yellow-300"
      role="alert"
    >
      Max projects allowed.
      {planId.toLowerCase() === PlanType.FREE.toLowerCase() &&
        currentSiteId && (
          <Link
            href={`/${currentSiteId}/billing`}
            className="font-semibold underline hover:text-yellow-600 dark:hover:text-yellow-200"
          >
            Upgrade
          </Link>
        )}
    </div>
  );
}
