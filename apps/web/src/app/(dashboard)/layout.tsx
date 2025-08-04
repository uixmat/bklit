import { getUserOrganizations } from "@bklit/db/queries/user";
import { SiteHeader } from "@/components/site-header";
import { WorkspaceProvider } from "@/contexts/workspace-provider";
import { authenticated } from "@/lib/auth";

export default async function DashboardLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const session = await authenticated();
  const organizations = await getUserOrganizations(session.user.id);

  return (
    <WorkspaceProvider session={session} organizations={organizations}>
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="container mx-auto py-6 px-4">{children}</main>
        {modal}
      </div>
    </WorkspaceProvider>
  );
}
