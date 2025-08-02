import { prisma } from "@bklit/db";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { DeleteProjectForm } from "@/components/forms/delete-project-form";
import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authOptions } from "@/lib/auth";

async function getSiteData(siteId: string, teamId: string, userId: string) {
  const site = await prisma.site.findFirst({
    where: {
      id: siteId,
      teamId: teamId,
    },
    include: {
      team: {
        include: {
          members: {
            where: { userId },
          },
        },
      },
    },
  });

  if (!site || !site.team || site.team.members.length === 0) {
    return null;
  }

  return { site, userMembership: site.team.members[0] };
}

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

  const siteData = await getSiteData(siteId, teamId, session.user.id);

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
          {userMembership.role === "owner" && (
            <DeleteProjectForm siteId={site.id} projectName={site.name} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
