export enum PlanType {
  FREE = "free",
  PRO = "pro",
}

export interface PlanDetails {
  name: string;
  description: string;
  projectLimit: number;
  teamMemberLimit: number;
  price: number;
  currency: string;
  interval: "month" | "year";
  features: string[];
  popular?: boolean;
  polarProductId?: string; // For linking to Polar subscription products
}

export const PLAN_DETAILS: Record<PlanType, PlanDetails> = {
  [PlanType.FREE]: {
    name: "Free Team",
    description: "Perfect for small teams getting started",
    projectLimit: 1,
    teamMemberLimit: 1,
    price: 0,
    currency: "USD",
    interval: "month",
    features: [
      "1 project per team",
      "1 team member",
      "Basic analytics dashboard",
      "Page view tracking",
      "Community support",
      "Standard data retention",
    ],
  },
  [PlanType.PRO]: {
    name: "Pro Team",
    description: "For growing teams that need more power",
    projectLimit: 5,
    teamMemberLimit: 5,
    price: 0, // Price comes from Polar
    currency: "USD", // Currency comes from Polar
    interval: "month",
    features: [
      "5 projects per team",
      "5 team members",
      "Advanced analytics dashboard",
      "Custom event tracking",
      "Session recordings",
      "Priority support",
      "Extended data retention",
      "Custom domains",
      "API access",
      "Export capabilities",
    ],
    popular: true,
    polarProductId:
      process.env.POLAR_PRO_PLAN_PRODUCT_ID ||
      process.env.NEXT_PUBLIC_POLAR_PRO_PLAN_PRODUCT_ID ||
      "9fb16a1d-6922-4d4d-9c4a-deb3caa97712",
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

// Helper function to get plan type by Polar product ID
export function getPlanTypeByPolarProductId(polarProductId: string): PlanType {
  if (polarProductId === PLAN_DETAILS[PlanType.PRO].polarProductId) {
    return PlanType.PRO;
  }
  return PlanType.FREE;
}
