import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { getSiteDataForSettings } from "@/actions/project-actions";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { DeleteProjectForm } from "@/components/forms/delete-project-form";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function ProjectDashboardPage({
  params,
}: {
  params: Promise<{ teamId: string; siteId: string }>;
}) {
  const { teamId, siteId } = await params;
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    redirect("/signin");
  }

  const siteData = await getSiteDataForSettings(siteId, teamId, session.user.id);

  if (!siteData) {
    redirect("/");
  }

  const { site, userMembership } = siteData;
  return (
    <div className="space-y-6 prose dark:prose-invert max-w-none">
      <PageHeader title="Site settings" description="Manage your settings." />
      <Card className="card">
        <CardHeader>
          <CardTitle>Delete site</CardTitle>
          <CardDescription>Delete this site and all associated data.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {userMembership.role === "owner" && (
            <DeleteProjectForm siteId={site.id} projectName={site.name} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
