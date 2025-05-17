"use client";

import { useProject } from "@/contexts/project-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import AddProjectForm from "@/components/forms/add-project-form"; // For now, this page assumes a project is selected.
// Logic for creating a project should ideally be on a separate page e.g. /create-project

export default function ProjectDashboardPage() {
  const { activeProject, isLoadingSites, currentSiteId } = useProject();

  if (isLoadingSites) {
    return <div>Loading project details...</div>;
  }

  if (!activeProject) {
    // This case should ideally be handled by layout redirects if a siteId is in the URL but invalid,
    // or if user has no projects and is redirected to a create page.
    return (
      <div>
        <p>No project selected or found.</p>
        {/* Consider a link to a project creation page if appropriate */}
        {/* <Link href="/create-project"><Button>Create a New Project</Button></Link> */}
      </div>
    );
  }

  // The SignOutButton and Welcome message might be better placed in the layout or a header component
  // For now, keeping it simple here.

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{activeProject.name} - Dashboard</h1>
        {/* <SignOutButton /> */}
        {/* Consider moving to NavUser or a shared header */}
      </div>

      <Card className="mb-6">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
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
        <Card>
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

      {/* 
        If you still need a way to add projects, consider a dedicated page or modal 
        accessible from your new project switcher dropdown or a button in the UI.
        <div className="mt-8">
          <AddProjectForm /> 
        </div>
      */}
    </div>
  );
}
