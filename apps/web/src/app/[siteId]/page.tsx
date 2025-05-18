"use client";

import { useProject } from "@/contexts/project-context";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUserPlanStatus } from "@/hooks/use-user-plan-status";
import { PlanType } from "@/lib/plans";
import { PageHeader } from "@/components/page-header";
import { DeleteProjectForm } from "@/components/forms/delete-project-form";
import { Button } from "@/components/ui/button";

export default function ProjectDashboardPage() {
  const { activeProject, isLoadingSites, currentSiteId } = useProject();
  const {
    planId,
    planDetails,
    hasReachedLimit,
    isLoading: isLoadingPlanStatus,
  } = useUserPlanStatus();

  if (isLoadingSites || isLoadingPlanStatus) {
    return <div>Loading project details...</div>;
  }

  if (!activeProject) {
    return (
      <div>
        <p>No project selected or found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 prose dark:prose-invert max-w-none">
      {hasReachedLimit && (
        <div
          className="mb-6 p-4 border rounded-md bg-yellow-50 border-yellow-300 text-yellow-700 dark:bg-yellow-900/30 dark:border-yellow-700 dark:text-yellow-300"
          role="alert"
        >
          <h4 className="font-bold text-yellow-700 dark:text-yellow-300">
            Project Limit Reached
          </h4>
          <p className="text-sm">
            You have reached the maximum of {planDetails.projectLimit}{" "}
            project(s) allowed for the {planDetails.name} plan.{" "}
            {planId.toLowerCase() === PlanType.FREE && (
              <>
                Please{" "}
                <Link
                  href={`/${currentSiteId}/billing`}
                  className="font-semibold underline hover:text-yellow-600 dark:hover:text-yellow-200"
                >
                  upgrade your plan
                </Link>{" "}
                to add more projects.
              </>
            )}
          </p>
        </div>
      )}

      <PageHeader
        title={`${activeProject.name} - Dashboard`}
        description="Overview of your project and analytics."
      />

      <Card className="card">
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
          <CardDescription>Details for your selected project.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            <strong>Project Name:</strong> {activeProject.name}
          </p>
          <p className="text-muted-foreground">
            <strong>Project ID:</strong> {activeProject.id}
          </p>
          {activeProject.domain && (
            <p className="text-muted-foreground">
              <strong>Domain:</strong> {activeProject.domain}
            </p>
          )}
          <p className="text-sm text-gray-500 mt-2">
            Created: {new Date(activeProject.createdAt).toLocaleDateString()}
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="card">
          <CardHeader>
            <CardTitle>View Analytics</CardTitle>
            <CardDescription>
              See tracking data for this project.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href={`/${currentSiteId}/analytics`}>
              <Button>Go to Analytics</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="card">
          <CardHeader>
            <CardTitle>Tracking Setup</CardTitle>
            <CardDescription>
              Get instructions to integrate tracking.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href={`/${currentSiteId}/setup`}>
              <Button>Go to Setup</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="pt-6 mt-6 border-t">
        <DeleteProjectForm
          siteId={activeProject.id}
          projectName={activeProject.name}
        />
      </div>
    </div>
  );
}
