import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
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
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    redirect("/"); // Or your login page
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

  // If no siteId is in params, or if the siteId from params doesn't belong to the user or doesn't exist,
  // we might need to redirect. If userSites is empty, redirect to a project creation page.
  // If userSites is not empty but params.siteId is problematic, redirect to the first available site.
  const currentSiteExists = userSites.some((site) => site.id === params.siteId);

  if (userSites.length === 0 && !params.siteId) {
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
  if (userSites.length === 0 && params.siteId) {
    // This means a URL with a siteId was accessed, but user has NO projects at all.
    // Or the siteId in URL is not theirs (covered by !currentSiteExists if they had other projects).
    // Redirect to a page where they can create a project, or a general dashboard if such a page exists.
    // For now, redirecting to root, but ideally a specific onboarding/create page.
    redirect("/?error=no_sites_found");
  }

  return (
    <ProjectProvider sites={userSites} initialSiteIdFromUrl={params.siteId}>
      <SidebarProvider>
        {/* AppSidebar now only needs the user prop */}
        <AppSidebar user={session.user as User} />
        <div className="lg:pl-72">
          {/* This div is a common pattern for main content when using a fixed sidebar */}
          {/* You might need to adjust based on your exact sidebar width and styling (e.g. from shadcn sidebar-08) */}
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </SidebarProvider>
    </ProjectProvider>
  );
}
