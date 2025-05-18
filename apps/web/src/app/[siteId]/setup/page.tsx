"use client";

import { useProject } from "@/contexts/project-context";
import { useEffect, useState, type JSX } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NPM_INSTALL_COMMAND } from "@/lib/setup-snippets/npm-install";
import { getSdkUsageSnippet } from "@/lib/setup-snippets/sdk-usage";
import { highlightCode } from "@/lib/shiki-highlighter";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectSetupPage() {
  const { activeProject, isLoadingSites } = useProject();
  const [highlightedInstallCmd, setHighlightedInstallCmd] =
    useState<JSX.Element | null>(null);
  const [highlightedUsageSnippet, setHighlightedUsageSnippet] =
    useState<JSX.Element | null>(null);
  const [highlightedSiteId, setHighlightedSiteId] =
    useState<JSX.Element | null>(null);
  const [isLoadingSnippets, setIsLoadingSnippets] = useState(true);

  const siteIdForDisplay = activeProject?.id;
  const defaultApiHost =
    typeof window !== "undefined"
      ? `${window.location.origin}/api/track`
      : "/api/track";

  useEffect(() => {
    if (siteIdForDisplay) {
      setIsLoadingSnippets(true);
      const usageSnippet = getSdkUsageSnippet(siteIdForDisplay, defaultApiHost);
      Promise.all([
        highlightCode(NPM_INSTALL_COMMAND, "bash"),
        highlightCode(usageSnippet, "javascript"),
        highlightCode(siteIdForDisplay, "bash"),
      ])
        .then(([installCmdHtml, usageSnippetHtml, siteIdHtml]) => {
          setHighlightedInstallCmd(installCmdHtml);
          setHighlightedUsageSnippet(usageSnippetHtml);
          setHighlightedSiteId(siteIdHtml);
        })
        .catch(console.error)
        .finally(() => setIsLoadingSnippets(false));
    }
  }, [siteIdForDisplay, defaultApiHost]);

  if (isLoadingSites) {
    return <div>Loading project details...</div>;
  }

  if (!activeProject) {
    return <div>Project not found or you do not have access.</div>;
  }

  return (
    <div className="space-y-6 prose dark:prose-invert max-w-none">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            {activeProject.name} - Tracking Setup
          </h1>
          <p className="text-muted-foreground">
            Integrate Bklit into your website.
          </p>
        </div>
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
            {isLoadingSnippets || !highlightedInstallCmd ? (
              <Skeleton className="h-20 w-full rounded-md bg-muted" />
            ) : (
              highlightedInstallCmd
            )}
            <p className="text-sm text-muted-foreground mt-3 mb-2">
              2. Then, initialize it in your application&apos;s client-side
              JavaScript:
            </p>
            {isLoadingSnippets || !highlightedUsageSnippet ? (
              <Skeleton className="h-40 w-full rounded-md bg-muted" />
            ) : (
              highlightedUsageSnippet
            )}
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
            {isLoadingSnippets || !highlightedSiteId ? (
              <Skeleton className="h-10 w-full rounded-md bg-muted" />
            ) : (
              highlightedSiteId
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
