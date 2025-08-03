import { SiteHeader } from "@/components/site-header";
import { WorkspaceProvider } from "@/contexts/workspace-provider";
import { authenticated } from "@/lib/auth";
import { getUserOrganizations } from "@bklit/db/queries/user";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await authenticated();
  const organizations = await getUserOrganizations(session.user.id);

  return (
    <WorkspaceProvider session={session} organizations={organizations}>
        <div className="min-h-screen bg-background">
          <SiteHeader />
          <main className="container mx-auto py-6 px-4">{children}</main>
        </div>
    </WorkspaceProvider>
  );
}
