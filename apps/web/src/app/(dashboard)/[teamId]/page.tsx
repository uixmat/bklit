import { Globe, Plus, Settings, Users } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
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
import { authOptions } from "@/lib/auth";
import { prisma } from "@bklit/db";

async function getTeamData(teamId: string, userId: string) {
  const team = await prisma.team.findUnique({
    where: { id: teamId },
    include: {
      sites: true,
      members: {
        include: {
          user: {
            select: { name: true, email: true, image: true },
          },
        },
      },
    },
  });

  if (!team) {
    return null;
  }

  // Check if user is a member of this team
  const userMembership = team.members.find(
    (member) => member.userId === userId,
  );
  if (!userMembership) {
    return null;
  }

  return { team, userMembership };
}

export default async function TeamDashboardPage({
  params,
}: {
  params: Promise<{ teamId: string }>;
}) {
  const { teamId } = await params;
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    redirect("/signin");
  }

  const teamData = await getTeamData(teamId, session.user.id);

  if (!teamData) {
    redirect("/");
  }

  const { team, userMembership } = teamData;

  return (
    <div className="space-y-6 prose dark:prose-invert max-w-none">
      <PageHeader
        title={team.name}
        description={team.description || "Team dashboard"}
      />

      {/* Team Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Team Overview</CardTitle>
            {userMembership.role === "owner" && (
              <Button asChild size="sm">
                <Link href={`/${teamId}/settings`}>
                  <Settings className="mr-2 size-4" />
                  Team Settings
                </Link>
              </Button>
            )}
          </div>
          <CardDescription>
            Manage your team&apos;s projects and members
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Globe className="size-4 text-muted-foreground" />
              <span className="text-sm font-medium">Projects:</span>
              <Badge variant="outline">{team.sites.length}</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="size-4 text-muted-foreground" />
              <span className="text-sm font-medium">Members:</span>
              <Badge variant="outline">{team.members.length}</Badge>
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
              <Link href={`/${teamId}/projects/create`}>
                <Plus className="mr-2 size-4" />
                Create Project
              </Link>
            </Button>
          )}
        </div>

        {team.sites.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-center py-8">
                No projects yet.{" "}
                {userMembership.role === "owner"
                  ? "Create your first project to get started."
                  : "Ask your team owner to create a project."}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {team.sites.map((site) => (
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
                      <Link href={`/${teamId}/${site.id}`}>View Project</Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href={`/${teamId}/${site.id}/setup`}>Setup</Link>
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
              <Link href={`/${teamId}/members/invite`}>
                <Plus className="mr-2 size-4" />
                Invite Member
              </Link>
            </Button>
          )}
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              {team.members.map((member) => (
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
