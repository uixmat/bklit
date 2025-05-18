"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getPlanDetails, PlanDetails, PlanType } from "@/lib/plans";
import { getUserProjectCount } from "@/actions/user-actions"; // Server action to fetch count

interface UserPlanStatus {
  planId: PlanType; // e.g., PlanType.FREE or PlanType.PRO
  planDetails: PlanDetails; // The detailed object for the plan
  projectCount: number;
  isLoading: boolean;
  hasReachedLimit: boolean;
  error?: string;
}

export function useUserPlanStatus(): UserPlanStatus {
  const { data: session, status } = useSession();
  const [projectCount, setProjectCount] = useState<number>(0);
  const [isLoadingDetails, setIsLoadingDetails] = useState<boolean>(true); // Renamed for clarity
  const [error, setError] = useState<string | undefined>();

  // Determine planId from session, default to FREE
  const currentPlanId = (session?.user?.plan as PlanType) || PlanType.FREE;
  const currentPlanDetails = getPlanDetails(currentPlanId);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      setIsLoadingDetails(true);
      getUserProjectCount()
        .then((count) => {
          if (count !== null) {
            setProjectCount(count);
          } else {
            setError("Could not fetch project count.");
          }
        })
        .catch(() => {
          setError("Error fetching project count.");
        })
        .finally(() => {
          setIsLoadingDetails(false);
        });
    } else if (status === "unauthenticated") {
      setIsLoadingDetails(false);
      setProjectCount(0); // Reset project count if unauthenticated
    }
    // For "loading" status of session, overall isLoading will cover it
  }, [session, status]);

  const hasReachedLimit = projectCount >= currentPlanDetails.projectLimit;

  return {
    planId: currentPlanId,
    planDetails: currentPlanDetails,
    projectCount,
    isLoading: status === "loading" || isLoadingDetails,
    hasReachedLimit,
    error,
  };
}
