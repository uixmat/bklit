import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/page-header";
import { DeleteProjectForm } from "@/components/forms/delete-project-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <PageHeader
        title={`${site.name} - Dashboard`}
        description="Overview of your project and analytics."
      />

      <Card className="card">
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
          <CardDescription>Details for your selected project.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            <strong>Project Name:</strong> {site.name}
          </p>
          <p className="text-muted-foreground">
            <strong>Project ID:</strong> {site.id}
          </p>
          {site.domain && (
            <p className="text-muted-foreground">
              <strong>Domain:</strong> {site.domain}
            </p>
          )}
          <p className="text-sm text-gray-500 mt-2">
            Created: {new Date(site.createdAt).toLocaleDateString()}
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
            <Link href={`/${teamId}/${siteId}/analytics`}>
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
            <Link href={`/${teamId}/${siteId}/setup`}>
              <Button>Go to Setup</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {userMembership.role === "owner" && (
        <div className="pt-6 mt-6 border-t">
          <DeleteProjectForm siteId={site.id} projectName={site.name} />
        </div>
      )}
    </div>
  );
}
