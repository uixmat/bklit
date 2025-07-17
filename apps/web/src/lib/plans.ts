export const enum PlanType {
  FREE = "free",
  PRO = "pro",
}

export interface PlanDetails {
  name: string;
  projectLimit: number;
  teamMemberLimit: number;
  // Add other plan-specific features here in the future, e.g.:
  // featureAccess: string[];
  // priceId?: string; // For linking to subscription products
}

export const PLAN_DETAILS: Record<PlanType, PlanDetails> = {
  [PlanType.FREE]: {
    name: "Free",
    projectLimit: 1,
    teamMemberLimit: 1,
  },
  [PlanType.PRO]: {
    name: "Pro",
    projectLimit: 5,
    teamMemberLimit: 5,
  },
};

// Helper function to get plan details by plan ID string
export function getPlanDetails(planId?: string | null): PlanDetails {
  if (planId === PlanType.PRO) {
    return PLAN_DETAILS[PlanType.PRO];
  }
  // Default to free plan if planId is null, undefined, or not 'pro'
  return PLAN_DETAILS[PlanType.FREE];
}
