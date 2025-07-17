"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { getNavigationItems, replaceDynamicParams } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function DashboardNavigation() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // Extract dynamic parameters from the current path
  const teamId =
    segments[0] !== "user" && segments.length > 0 ? segments[0] : undefined;
  const siteId =
    segments.length > 1 &&
    segments[1] !== "billing" &&
    segments[1] !== "settings"
      ? segments[1]
      : undefined;
  const userId =
    segments[0] === "user" && segments.length > 1 ? segments[1] : undefined;

  const navigationItems = getNavigationItems(pathname);
  const resolvedItems = replaceDynamicParams(
    navigationItems,
    teamId,
    siteId,
    userId,
  );

  // Don't render navigation if no items
  if (resolvedItems.length === 0) {
    return null;
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {resolvedItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
