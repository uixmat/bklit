import { AddOrganizationForm } from "@/components/forms/add-organization-form";
import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authenticated } from "@/lib/auth";

export default async function CreateTeamPage() {
  await authenticated();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Create New Organization"
        description="Set up a new organization to collaborate on projects"
      />

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Organization Details</CardTitle>
            <CardDescription>
              Enter the details for your new organization below. Click create
              when you&apos;re done.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AddOrganizationForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
