"use client";

import { useQuery } from "@tanstack/react-query";
import { getPlanDetails, type PlanDetails, PlanType } from "@/lib/plans";

interface TeamPlanStatus {
	planId: PlanType;
	planDetails: PlanDetails;
	projectCount: number;
	memberCount: number;
	isLoading: boolean;
	hasReachedProjectLimit: boolean;
	hasReachedMemberLimit: boolean;
	error?: string;
}

export function useTeamPlanStatus(teamId: string): TeamPlanStatus {
	const {
		data: teamData,
		isLoading: isLoadingTeam,
		error: teamError,
	} = useQuery({
		queryKey: ["teamPlanStatus", teamId],
		queryFn: async () => {
			const response = await fetch(`/api/teams/${teamId}/plan-status`);
			if (!response.ok) {
				throw new Error("Failed to fetch team plan status");
			}
			return response.json();
		},
		enabled: !!teamId,
		staleTime: 1000 * 60 * 5, // 5 minutes
	});

	const currentPlanId = (teamData?.plan as PlanType) || PlanType.FREE;
	const currentPlanDetails = getPlanDetails(currentPlanId);

	const projectCount = teamData?.projectCount ?? 0;
	const memberCount = teamData?.memberCount ?? 0;

	const hasReachedProjectLimit =
		projectCount >= currentPlanDetails.projectLimit;
	const hasReachedMemberLimit =
		memberCount >= currentPlanDetails.teamMemberLimit;

	return {
		planId: currentPlanId,
		planDetails: currentPlanDetails,
		projectCount,
		memberCount,
		isLoading: isLoadingTeam,
		hasReachedProjectLimit,
		hasReachedMemberLimit,
		error: teamError?.message,
	};
}
