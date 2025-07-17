import { Plus, Users } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { getUserDirectSites, getUserTeams } from "@/actions/user-actions";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function UserPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    redirect("/signin");
  }

  // Only allow users to view their own page
  if (session.user.id !== userId) {
    redirect("/");
  }

  const [teamMemberships] = await Promise.all([getUserTeams(userId), getUserDirectSites(userId)]);

  return (
    <div className="space-y-6 prose dark:prose-invert max-w-none">
      <PageHeader title="My Workspaces" description="Manage your teams and projects." />

      {/* Teams Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Users className="size-6" />
            Teams
          </h2>
          <Button asChild>
            <Link href="/teams/create">
              <Plus className="mr-2 size-4" />
              Create Team
            </Link>
          </Button>
        </div>

        {!teamMemberships || teamMemberships.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-center py-8">
                You haven&apos;t joined any teams yet.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teamMemberships.map((membership) => (
              <Card key={membership.team.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{membership.team.name}</CardTitle>
                    <Badge variant={membership.role === "owner" ? "default" : "secondary"}>
                      {membership.role}
                    </Badge>
                  </div>
                  <CardDescription>
                    {membership.team.description || "No description"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Projects: {membership.team.sites.length}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Members: {membership.team.members.length}
                    </p>
                  </div>

                  {membership.team.sites.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Recent Projects:</p>
                      <div className="space-y-1">
                        {membership.team.sites.slice(0, 3).map((site) => (
                          <Link
                            key={site.id}
                            href={`/${membership.team.id}/${site.id}`}
                            className="block text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            {site.name}
                          </Link>
                        ))}
                        {membership.team.sites.length > 3 && (
                          <p className="text-xs text-muted-foreground">
                            +{membership.team.sites.length - 3} more
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/${membership.team.id}`}>View Team</Link>
                    </Button>
                    {membership.role === "owner" && (
                      <Button asChild size="sm">
                        <Link href={`/${membership.team.id}/settings`}>Settings</Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
