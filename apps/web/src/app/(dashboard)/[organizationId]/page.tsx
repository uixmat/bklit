import { prisma } from "@bklit/db";
import { Globe, Plus, Settings, Users } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authenticated } from "@/lib/auth";

async function getOrganizationData(organizationId: string, userId: string) {

  const organization = await prisma.organization.findUnique({
    where: { id: organizationId },
    include: {
      projects: true,
      members: {
        include: {
          user: {
            select: { name: true, email: true, image: true },
          },
        },
      },
    },
  });

  if (!organization) {
    return null;
  }

  return {
    organization,
    userMembership: {
      role: "owner",
    },
  };
}

export default async function OrganizationDashboardPage({
  params,
}: {
  params: Promise<{ organizationId: string }>;
}) {
  const { organizationId } = await params;
  const session = await authenticated();

  if (!session || !session.user?.id) {
    redirect("/signin");
  }

  const organizationData = await getOrganizationData(organizationId, session.user.id);

  if (!organizationData) {
    redirect("/");
  }

  const { organization, userMembership } = organizationData;

  return (
    <div className="space-y-6 prose dark:prose-invert max-w-none">
      <PageHeader
        title={organization.name}
        description={organization.metadata?.description || "Organization dashboard"}
      />

      {/* Team Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Team Overview</CardTitle>
            {userMembership.role === "owner" && (
              <Button asChild size="sm">
                <Link href={`/${organizationId}/settings`}>
                  <Settings className="mr-2 size-4" />
                  Organization Settings
                </Link>
              </Button>
            )}
          </div>
          <CardDescription>
            Manage your organization&apos;s projects and members
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Globe className="size-4 text-muted-foreground" />
              <span className="text-sm font-medium">Projects:</span>
              <Badge variant="outline">{organization.projects.length}</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="size-4 text-muted-foreground" />
              <span className="text-sm font-medium">Members:</span>
              <Badge variant="outline">{organization.members.length}</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Your Role:</span>
              <Badge
                variant={
                  userMembership.role === "owner" ? "default" : "secondary"
                }
              >
                {userMembership.role}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Globe className="size-6" />
            Projects
          </h2>
          {userMembership.role === "owner" && (
            <Button asChild>
              <Link href={`/${organizationId}/projects/create`}>
                <Plus className="mr-2 size-4" />
                Create Project
              </Link>
            </Button>
          )}
        </div>

        {organization.projects.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-center py-8">
                No projects yet.{" "}
                {userMembership.role === "owner"
                  ? "Create your first project to get started."
                  : "Ask your organization owner to create a project."}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {organization.projects.map((site) => (
              <Card key={site.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{site.name}</CardTitle>
                  <CardDescription>
                    {site.domain || "No domain configured"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/${organizationId}/${site.id}`}>View Project</Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href={`/${organizationId}/${site.id}/setup`}>Setup</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Team Members Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Users className="size-6" />
            Team Members
          </h2>
          {userMembership.role === "owner" && (
            <Button asChild>
            <Link href={`/${organizationId}/members/invite`}>
                <Plus className="mr-2 size-4" />
                Invite Member
              </Link>
            </Button>
          )}
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              {organization.members.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-3 rounded-lg border"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {member.user.name?.[0]?.toUpperCase() || "?"}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{member.user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {member.user.email}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={member.role === "owner" ? "default" : "secondary"}
                  >
                    {member.role}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
