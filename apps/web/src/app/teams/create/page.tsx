import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@bklit/ui/components/card";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { AddTeamForm } from "@/components/forms/add-team-form";
import { PageHeader } from "@/components/page-header";
import { authOptions } from "@/lib/auth";

export default async function CreateTeamPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    redirect("/signin");
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Create New Team"
        description="Set up a new team to collaborate on projects"
      />

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Team Details</CardTitle>
            <CardDescription>
              Enter the details for your new team below. Click create when
              you&apos;re done.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AddTeamForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
