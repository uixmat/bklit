import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SiteHeader } from "@/components/site-header";
import { ProjectProvider } from "@/contexts/project-context";
import { TeamsProvider } from "@/contexts/teams-provider";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    redirect("/signin");
  }

  return (
    <TeamsProvider>
      <ProjectProvider>
        <div className="min-h-screen bg-background">
          <SiteHeader />
          <main className="container mx-auto py-6 px-4">{children}</main>
        </div>
      </ProjectProvider>
    </TeamsProvider>
  );
}
