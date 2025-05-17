"use client";

import { useProject } from "@/contexts/project-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectSetupPage() {
  const { activeProject, isLoadingSites, currentSiteId } = useProject();

  if (isLoadingSites) {
    return <div>Loading project details...</div>;
  }

  if (!activeProject) {
    return <div>Project not found or you do not have access.</div>;
  }

  const siteIdForDisplay = activeProject.id;
  const defaultApiHost = "http://localhost:3000/api/track"; // Adjust if your API route changes
  const npmInstallCommand = "pnpm add bklit"; // or: npm install bklit / yarn add bklit

  const npmUsageExample = `\
import { initBklit } from 'bklit';

// In your application client-side code (e.g., main component or layout effects):
initBklit({
  siteId: "${siteIdForDisplay}",
  // By default, the SDK will try to send data to '${defaultApiHost}'.
  // If your Bklit instance gets deployed elsewhere, provide the correct apiHost:
  // apiHost: "https://your-bklit-instance.com/api/track"
});`;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            {activeProject.name} - Tracking Setup
          </h1>
          <p className="text-muted-foreground">
            Integrate Bklit into your website.
          </p>
        </div>
        <Link href={`/${currentSiteId}`}>
          <Button variant="outline">← Back to Project Dashboard</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Setup Instructions</CardTitle>
          <CardDescription>
            Install the Bklit SDK into your project and initialize it.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              1. Install the Bklit SDK into your project:
            </p>
            <pre className="p-3 bg-muted rounded-md text-sm overflow-x-auto">
              <code>{npmInstallCommand}</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-3 mb-2">
              2. Then, initialize it in your application&apos;s client-side
              JavaScript:
            </p>
            <pre className="p-3 bg-muted rounded-md text-sm overflow-x-auto">
              <code>{npmUsageExample}</code>
            </pre>
          </div>

          <div className="pt-4 border-t">
            <h4 className="text-md font-semibold mb-1">
              Important: API Endpoint Configuration
            </h4>
            <p className="text-sm text-muted-foreground">
              The Bklit SDK defaults to sending data to{" "}
              <code>{defaultApiHost}</code>. If your Bklit analytics server
              (this application) is deployed to a different URL, ensure you
              configure the <code>apiHost</code> in the SDK when initializing it
              to point to your production Bklit instance (e.g.,{" "}
              <code>https://your-bklit-app.com/api/track</code>).
            </p>
          </div>

          <div className="pt-4">
            <p className="text-sm font-medium">Your Project ID (Site ID):</p>
            <p className="text-lg font-mono p-2 bg-muted rounded-md inline-block">
              {siteIdForDisplay}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
