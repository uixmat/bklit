import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { User as NextAuthUser } from "next-auth"; // Aliased to avoid conflict if Site type was named User
import { prisma } from "@/lib/db";
import { ProjectProvider } from "@/contexts/project-context";
import type { Site } from "@prisma/client"; // Site type for fetching all sites

// Helper async function to contain the core logic
async function getLayoutDataAndRender({
  children,
  params,
  session,
}: {
  children: React.ReactNode;
  params: Promise<{ siteId: string }>;
  session: NextAuthUser & { id: string }; // Assuming session.user.id is always present after check
}) {
  const { siteId } = await params;
  const userId = session.id; // Use session.id directly as passed

  const userSites: Site[] = await prisma.site.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      name: "asc",
    },
  });

  const currentSiteExists = userSites.some((site) => site.id === siteId);

  if (userSites.length > 0 && !currentSiteExists) {
    redirect(`/${userSites[0].id}`);
  }

  if (userSites.length === 0 && siteId) {
    redirect("/?error=no_sites_found");
  }

  // If user has no sites at all and somehow lands here directly via a URL not caught by above,
  // they might still see an error if no siteId is valid.
  // Consider a more robust redirect to a "create project" page if userSites.length is 0.
  // For instance, if they land on / (which shouldn't use this layout usually) or /some-non-existent-site
  if (userSites.length === 0 && !siteId) {
    // This case should ideally be handled by a higher-level layout or middleware
    // if the user has no projects and is trying to access a generic path.
    // For now, if they have no sites, and no siteId is in params (e.g. bad URL),
    // redirecting to marketing page.
    redirect("/");
  }

  return (
    <ProjectProvider sites={userSites} initialSiteIdFromUrl={siteId}>
      <SidebarProvider>
        <AppSidebar user={session as NextAuthUser} />{" "}
        {/* Cast back if AppSidebar expects original User type */}
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col p-8 py-2">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                {children}
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ProjectProvider>
  );
}

export default async function SiteSpecificLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ siteId: string }>;
}) {
  // const { siteId } = params; // This line was reported as the error source. Deferring destructuring.

  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    redirect("/login");
  }

  // Pass the full session.user object which should include the id
  // and the params object to the helper.
  return getLayoutDataAndRender({
    children,
    params,
    session: session.user as NextAuthUser & { id: string },
  });
}
