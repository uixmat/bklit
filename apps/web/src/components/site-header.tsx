"use client";

import { Separator } from "@/components/ui/separator";
import { ProjectLimitBanner } from "@/components/banners/project-limit-banner";
import { usePathname } from "next/navigation";
import { BklitLogo } from "@/components/icons/bklit";
import { NavUser } from "@/components/nav/nav-user";
import { NavWorkspace } from "@/components/nav/nav-workspace";
import { useSession } from "next-auth/react";
import { DashboardNavigation } from "@/components/nav/dashboard-navigation";

const KNOWN_TITLES: Record<string, string> = {
  "/": "Home",
  "/signin": "Sign In",
};

// Helper function to generate a title from the pathname
function getPageTitle(pathname: string): string {
  if (KNOWN_TITLES[pathname]) {
    return KNOWN_TITLES[pathname];
  }

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return "Page";
  }

  if (segments.length === 1) {
    return "Dashboard";
  }

  const lastSegment = segments[segments.length - 1];

  return (
    lastSegment.charAt(0).toUpperCase() +
    lastSegment.slice(1).replace(/-/g, " ")
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);
  const { data: clientSession } = useSession();
  return (
    <header className="flex flex-col w-full">
      <div className="flex w-full items-center justify-between px-4 lg:px-6 border-b py-4">
        <div className="flex items-center gap-4">
          <BklitLogo size={32} />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <div className="flex items-center gap-2">
            <NavWorkspace />
          </div>
          <div className="flex items-center gap-1 lg:gap-2">
            <Separator
              orientation="vertical"
              className="mx-2 data-[orientation=vertical]:h-4"
            />
            <h1 className="text-base font-medium">{pageTitle}</h1>
          </div>
        </div>
        <div className="flex items-center gap-1 lg:gap-2">
          <ProjectLimitBanner />
          {clientSession?.user && (
            <NavUser
              user={{
                name: clientSession.user.name || "",
                email: clientSession.user.email || "",
                avatar: clientSession.user.image || "",
                plan: clientSession.user.plan,
                id: clientSession.user.id,
              }}
            />
          )}
        </div>
      </div>
      <div className="flex w-full items-center justify-between px-4 lg:px-6 border-b py-4">
        <DashboardNavigation />
      </div>
    </header>
  );
}
