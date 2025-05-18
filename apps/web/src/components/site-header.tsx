"use client"; // Mark as a Client Component

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

// Map for specific titles for known static paths.
// IMPORTANT: Add any new static top-level pages here (e.g., /pricing, /about)
// to prevent them from being incorrectly titled "Dashboard".
const KNOWN_TITLES: Record<string, string> = {
  "/": "Home", // Typically the marketing page or main landing page
  "/signin": "Sign In",
  // Example: "/pricing": "Pricing",
  // Example: "/settings": "Settings", (if it's a top-level static page)
};

// Helper function to generate a title from the pathname
function getPageTitle(pathname: string): string {
  // 1. Check for exact matches for known static paths
  if (KNOWN_TITLES[pathname]) {
    return KNOWN_TITLES[pathname];
  }

  const segments = pathname.split("/").filter(Boolean); // e.g., "/foo/bar" -> ["foo", "bar"]

  // 2. Handle empty or unexpected path segments (fallback)
  if (segments.length === 0) {
    // This case is unlikely if KNOWN_TITLES["/"] is defined and pathname is "/"
    return "Page";
  }

  // 3. Handle dynamic [siteId] pages (e.g., /project123)
  // These are single-segment paths not explicitly defined in KNOWN_TITLES.
  // User request: [siteId]/page.tsx (which resolves to /some-id) should show "Dashboard".
  if (segments.length === 1) {
    return "Dashboard";
  }

  // 4. Handle subpages of dynamic routes (e.g., /[siteId]/settings, /[siteId]/setup)
  // or other multi-segment paths not caught by KNOWN_TITLES.
  // The title will be the capitalized last segment.
  // Example: "/project123/setup" -> "Setup"
  const lastSegment = segments[segments.length - 1];

  // Capitalize the first letter and replace hyphens with spaces for readability
  return (
    lastSegment.charAt(0).toUpperCase() +
    lastSegment.slice(1).replace(/-/g, " ")
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{pageTitle}</h1>
      </div>
    </header>
  );
}
