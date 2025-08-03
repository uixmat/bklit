"use client";

import { Check, X } from "lucide-react";
import { PLAN_DETAILS, type PlanType } from "@/lib/plans";

interface PricingComparisonProps {
  currentPlan?: PlanType;
}

export function PricingComparison({ currentPlan }: PricingComparisonProps) {
  const plans = Object.values(PLAN_DETAILS);

  // Define all features for comparison
  const allFeatures = [
    { name: "Projects", key: "projectLimit" },  
    { name: "Organization Members", key: "organizationMemberLimit" },
    { name: "Page View Tracking", key: "pageViews" },
    { name: "Custom Event Tracking", key: "customEvents" },
    { name: "Session Recordings", key: "sessionRecordings" },
    { name: "Advanced Analytics", key: "advancedAnalytics" },
    { name: "Custom Domains", key: "customDomains" },
    { name: "API Access", key: "apiAccess" },
    { name: "Export Capabilities", key: "export" },
    { name: "Priority Support", key: "prioritySupport" },
    { name: "Extended Data Retention", key: "dataRetention" },
  ];

  const getFeatureValue = (plan: (typeof plans)[0], featureKey: string) => {
    switch (featureKey) {
      case "projectLimit":
        return plan.projectLimit;
      case "organizationMemberLimit":
        return plan.organizationMemberLimit;
      case "pageViews":
        return true; // Both plans have this
      case "customEvents":
        return plan.name.includes("Pro");
      case "sessionRecordings":
        return plan.name.includes("Pro");
      case "advancedAnalytics":
        return plan.name.includes("Pro");
      case "customDomains":
        return plan.name.includes("Pro");
      case "apiAccess":
        return plan.name.includes("Pro");
      case "export":
        return plan.name.includes("Pro");
      case "prioritySupport":
        return plan.name.includes("Pro");
      case "dataRetention":
        return plan.name.includes("Pro");
      default:
        return false;
    }
  };

  const formatFeatureValue = (value: boolean | number, _featureKey: string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <X className="w-4 h-4 text-red-500" />
      );
    }

    if (typeof value === "number") {
      return <span className="font-semibold">{value}</span>;
    }

    return value;
  };

  const isCurrentPlan = (planName: string) => {
    if (!currentPlan) return false;
    return planName.toLowerCase().includes(currentPlan.toLowerCase());
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4 font-semibold">Features</th>
            {plans.map((plan) => (
              <th key={plan.name} className="text-center p-4 font-semibold">
                <div className="space-y-2">
                  <div className="text-lg font-bold">{plan.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {plan.price === 0 ? "Free" : `$${plan.price}/month`}
                  </div>
                  {isCurrentPlan(plan.name) && (
                    <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      Current Plan
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map((feature) => (
            <tr key={feature.key} className="border-b hover:bg-muted/50">
              <td className="p-4 font-medium">{feature.name}</td>
              {plans.map((plan) => (
                <td
                  key={`${plan.name}-${feature.key}`}
                  className="text-center p-4"
                >
                  {formatFeatureValue(
                    getFeatureValue(plan, feature.key),
                    feature.key,
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
