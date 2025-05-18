import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { User } from "next-auth";
import { prisma } from "@/lib/db";
import { ProjectProvider } from "@/contexts/project-context";
import type { Site } from "@prisma/client"; // Site type for fetching all sites

export default async function SiteSpecificLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { siteId: string };
}) {
  const { siteId } = params; // Destructure siteId from params at the very top

  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    redirect("/login"); // Changed to redirect to /login
  }

  // Fetch all sites for the user to populate the project switcher and context
  const userSites: Site[] = await prisma.site.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      name: "asc",
    },
  });

  const currentSiteExists = userSites.some((site) => site.id === siteId);

  if (userSites.length === 0 && !siteId) {
    // No sites, and no specific site in URL (e.g. /create-project path)
    // This case needs careful handling. If this layout is ONLY for /siteId/* paths, then siteId must exist.
    // If the user has no sites, they might be redirected to a "create first project" page from a higher level route.
    // For now, if this layout is reached without a valid siteId for the user, it's an issue.
    // Let's assume for now that if userSites is empty, they should be elsewhere (e.g. a page to create a project).
    // If they land here via a direct URL with a siteId that's not theirs, the check below handles it.
  }

  if (userSites.length > 0 && !currentSiteExists) {
    // If a siteId is provided but invalid, or no siteId provided but user has sites,
    // redirect to the first available site for this user.
    // This makes sure the user always lands on a valid project page if they have projects.
    redirect(`/${userSites[0].id}`);
  }

  // If userSites.length is 0 and they somehow landed on a /[siteId]/... route,
  // they should be redirected. Perhaps to a create project page or a general error.
  // This specific layout assumes a valid siteId (or will redirect to one if possible).
  if (userSites.length === 0 && siteId) {
    // This means a URL with a siteId was accessed, but user has NO projects at all.
    // Or the siteId in URL is not theirs (covered by !currentSiteExists if they had other projects).
    // Redirect to a page where they can create a project, or a general dashboard if such a page exists.
    // For now, redirecting to root, but ideally a specific onboarding/create page.
    redirect("/?error=no_sites_found");
  }

  return (
    <ProjectProvider sites={userSites} initialSiteIdFromUrl={siteId}>
      <SidebarProvider>
        {/* AppSidebar now only needs the user prop */}
        <AppSidebar user={session.user as User} />
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
