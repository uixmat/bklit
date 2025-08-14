"use client";

import { Button } from "@bklit/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@bklit/ui/components/card";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { useTRPC } from "@/trpc/react";

export const ProjectDashboard = ({
  id,
  organizationId,
}: {
  id: string;
  organizationId: string;
}) => {
  const trpc = useTRPC();
  const { data: project } = useSuspenseQuery(
    trpc.project.fetch.queryOptions({
      id,
      organizationId,
    }),
  );

  return (
    <div className="space-y-6 prose dark:prose-invert max-w-none">
      <PageHeader
        title={`${project.name} - Dashboard`}
        description="Overview of your project and analytics."
      />

      <Card className="card">
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
          <CardDescription>Details for your selected project.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            <strong>Project Name:</strong> {project.name}
          </p>
          <p className="text-muted-foreground">
            <strong>Project ID:</strong> {project.id}
          </p>
          {project.domain && (
            <p className="text-muted-foreground">
              <strong>Domain:</strong> {project.domain}
            </p>
          )}
          <p className="text-sm text-gray-500 mt-2">
            Created: {new Date(project.createdAt).toLocaleDateString()}
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
            <Link href={`/${organizationId}/${project.id}/analytics`}>
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
            <Link href={`/${organizationId}/${project.id}/setup`}>
              <Button>Go to Setup</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
