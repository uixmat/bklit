"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { getUserProjectCount } from "@/actions/user-actions";
import { getPlanDetails, type PlanDetails, PlanType } from "@/lib/plans";

interface UserPlanStatus {
  planId: PlanType;
  planDetails: PlanDetails;
  projectCount: number;
  isLoading: boolean;
  isLoadingPlanDetails: boolean;
  hasReachedLimit: boolean;
  error?: string;
}

export function useUserPlanStatus(): UserPlanStatus {
  const { data: session, status: sessionStatus } = useSession();
  const userId = session?.user?.id;

  console.log(
    "[useUserPlanStatus] Hook called. Session status:",
    sessionStatus,
    "User ID:",
    userId,
  );

  let calculatedIsLoadingPlanDetails = false;
  if (sessionStatus === "loading") {
    if (!session) {
      calculatedIsLoadingPlanDetails = true;
    }
  } else if (sessionStatus === "unauthenticated") {
    calculatedIsLoadingPlanDetails = true;
  }

  const {
    data: projectCountData,
    isLoading: isLoadingProjectCount,
    error: projectCountError,
  } = useQuery<number | null, Error>({
    queryKey: ["userProjectCount", userId],
    queryFn: async () => {
      if (!userId) return 0;
      const count = await getUserProjectCount();
      if (count === null) {
        return 0;
      }
      return count;
    },
    enabled: !!userId && sessionStatus === "authenticated",
    staleTime: 1000 * 60 * 5,
    refetchOnMount: "always",
  });

  console.log(
    "[useUserPlanStatus] Project count query: data:",
    projectCountData,
    "isLoading:",
    isLoadingProjectCount,
    "error:",
    projectCountError,
  );

  const currentPlanId = (session?.user?.plan as PlanType) || PlanType.FREE;
  const currentPlanDetails = getPlanDetails(currentPlanId);

  const finalProjectCount = projectCountData ?? 0;
  const hasReachedLimit = finalProjectCount >= currentPlanDetails.projectLimit;

  const errorMessage = projectCountError?.message;

  const initialSessionTrulyLoading = sessionStatus === "loading" && !session;
  const projectCountIsInitiallyLoading =
    isLoadingProjectCount && projectCountData === undefined;
  const combinedIsLoading =
    initialSessionTrulyLoading || projectCountIsInitiallyLoading;

  console.log(
    "[useUserPlanStatus] Returning: projectCount:",
    finalProjectCount,
    "hasReachedLimit:",
    hasReachedLimit,
    "isLoading (combined):",
    combinedIsLoading,
    "isLoadingPlanDetails:",
    calculatedIsLoadingPlanDetails,
    "planId:",
    currentPlanId,
  );

  return {
    planId: currentPlanId,
    planDetails: currentPlanDetails,
    projectCount: finalProjectCount,
    isLoading: combinedIsLoading,
    isLoadingPlanDetails: calculatedIsLoadingPlanDetails,
    hasReachedLimit,
    error: errorMessage,
  };
}
