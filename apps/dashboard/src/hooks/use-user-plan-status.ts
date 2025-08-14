"use client";

import { useQuery } from "@tanstack/react-query";
import { getUserProjectCount } from "@/actions/user-actions";
import { authClient } from "@/auth/client";
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
  const { data: session, isPending: sessionStatus } = authClient.useSession();
  const userId = session?.user?.id;

  let calculatedIsLoadingPlanDetails = false;
  if (sessionStatus) {
    if (!session) {
      calculatedIsLoadingPlanDetails = true;
    }
  } else if (!session) {
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

  // For now, default to free plan since this hook seems to be for user-level plan checking
  // In the future, this might need to be updated to work with team-based plans
  const currentPlanId = PlanType.FREE;
  const currentPlanDetails = getPlanDetails(currentPlanId);

  const finalProjectCount = projectCountData ?? 0;
  const hasReachedLimit = finalProjectCount >= currentPlanDetails.projectLimit;

  const errorMessage = projectCountError?.message;

  const initialSessionTrulyLoading = sessionStatus === "loading" && !session;
  const projectCountIsInitiallyLoading =
    isLoadingProjectCount && projectCountData === undefined;
  const combinedIsLoading =
    initialSessionTrulyLoading || projectCountIsInitiallyLoading;

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
