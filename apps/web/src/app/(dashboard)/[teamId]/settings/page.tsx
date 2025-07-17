import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/page-header";
import { DeleteTeamForm } from "@/components/forms/delete-team-form";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getTeamDataForSettings } from "@/actions/team-actions";

export default async function TeamSettingsPage({
  params,
}: {
  params: Promise<{ teamId: string }>;
}) {
  const { teamId } = await params;
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    redirect("/signin");
  }

  const teamData = await getTeamDataForSettings(teamId, session.user.id);

  if (!teamData) {
    redirect("/");
  }

  const { team, userMembership } = teamData;

  return (
    <div className="space-y-6 prose dark:prose-invert max-w-none">
      <PageHeader
        title="Team settings"
        description="Manage your team settings."
      />
      <Card className="card">
        <CardHeader>
          <CardTitle>Delete team</CardTitle>
          <CardDescription>
            Delete this team and all associated data.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {userMembership.role === "owner" && (
            <DeleteTeamForm teamId={team.id} teamName={team.name} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
