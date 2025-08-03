import { prisma } from "@bklit/db";
import { redirect } from "next/navigation";
import { DeleteProjectForm } from "@/components/forms/delete-project-form";
import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authenticated } from "@/lib/auth";

async function getSiteData(siteId: string, organizationId: string, userId: string) {
  const site = await prisma.project.findFirst({
    where: {
      id: siteId,
      organizationId: organizationId,
    },
    include: {
      organization: {
        include: {
          members: {
            where: { userId },
          },
        },
      },
    },
  });

  if (!site || !site.organization || site.organization.members.length === 0) {
    return null;
  }

  return { site, userMembership: site.organization.members[0] };
}

export default async function ProjectDashboardPage({
  params,
}: {
  params: Promise<{ organizationId: string; siteId: string }>;
}) {
  const { organizationId, siteId } = await params;
  const session = await authenticated();

  const siteData = await getSiteData(siteId, organizationId, session.user.id);

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
          <CardDescription>
            Delete this site and all associated data.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {userMembership?.role === "owner" && (
            <DeleteProjectForm siteId={site.id} projectName={site.name} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
