import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddProjectForm from "@/components/forms/add-project-form";
import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function CreateSitePage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    redirect("/signin");
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Create New Project"
        description="Set up a new project to start tracking analytics"
      />

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>
              Enter the details for your new project below. Click create when
              you&apos;re done.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AddProjectForm
              onSuccess={async (newSiteId) => {
                if (newSiteId) {
                  // Redirect to the new site
                  redirect(`/${newSiteId}`);
                }
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
