import { SiteHeader } from "@/components/site-header";
import { WorkspaceProvider } from "@/contexts/workspace-provider";
import { authenticated } from "@/lib/auth";
import { api } from "@/trpc/server";

export default async function DashboardLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const session = await authenticated();
  const organizations = await api.organization.list();

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
