import { prisma } from "@bklit/db";
import { redirect } from "next/navigation";
import { DeleteOrganizationForm } from "@/components/forms/delete-organization-form";
import { PageHeader } from "@/components/page-header";
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
      members: {
        where: { userId },
      },
    },
  });

  if (!organization || organization.members.length === 0) {
    return null;
  }

  return { organization, userMembership: organization.members[0] };
}

export default async function OrganizationSettingsPage({
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
        title="Organization settings"
        description="Manage your organization settings."
      />
      <Card className="card">
        <CardHeader>
          <CardTitle>Delete organization</CardTitle>
          <CardDescription>
            Delete this organization and all associated data.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {userMembership.role === "owner" && (
            <DeleteOrganizationForm organizationId={organization.id} organizationName={organization.name} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
