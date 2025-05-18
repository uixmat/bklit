"use client";

import * as React from "react";
import {
  Command,
  PieChart,
  LayoutDashboard,
  LineChart,
  Settings2,
  Moon,
  Sun,
} from "lucide-react";
import { User as NextAuthUser } from "next-auth";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useProject } from "@/contexts/project-context";
import { useUserPlanStatus } from "@/hooks/use-user-plan-status";
import { PlanType } from "@/lib/plans";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: NextAuthUser & { plan?: string };
}

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  const { currentSiteId, isLoadingSites, activeProject } = useProject();
  const { planId, planDetails, isLoading: isLoadingPlan } = useUserPlanStatus();
  const pathname = usePathname();
  const { theme, resolvedTheme, setTheme } = useTheme();

  const displayPlanName = isLoadingPlan ? "Loading..." : planDetails.name;
  const navUserPlanId = isLoadingPlan
    ? (user.plan as PlanType) || PlanType.FREE
    : planId;

  const mainNavItems = React.useMemo(() => {
    if (isLoadingSites || !currentSiteId) {
      return [
        {
          title: "Loading Project...",
          url: "#",
          icon: PieChart,
          isActive: false,
        },
      ];
    }
    return [
      {
        title: "Dashboard",
        url: `/${currentSiteId}`,
        icon: LayoutDashboard,
        isActive: pathname === `/${currentSiteId}`,
      },
      {
        title: "Analytics",
        url: `/${currentSiteId}/analytics`,
        icon: LineChart,
        isActive: pathname === `/${currentSiteId}/analytics`,
      },
      {
        title: "Setup",
        url: `/${currentSiteId}/setup`,
        icon: Settings2,
        isActive: pathname === `/${currentSiteId}/setup`,
      },
    ];
  }, [currentSiteId, isLoadingSites, pathname]);

  const secondaryNavItems = React.useMemo(() => {
    const currentActualTheme = resolvedTheme || theme;

    if (currentActualTheme === "dark") {
      return [
        {
          title: "Light mode",
          url: "#",
          icon: Sun,
          onClick: () => setTheme("light"),
        },
      ];
    } else {
      return [
        {
          title: "Dark mode",
          url: "#",
          icon: Moon,
          onClick: () => setTheme("dark"),
        },
      ];
    }
  }, [resolvedTheme, theme, setTheme]);

  const headerProjectName =
    isLoadingSites || !activeProject ? "Loading..." : activeProject.name;
  const headerLink = currentSiteId ? `/${currentSiteId}` : "/";

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href={headerLink}>
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="font-medium truncate">
                    {isLoadingSites ? (
                      <Skeleton className="w-20 h-4" />
                    ) : (
                      headerProjectName
                    )}
                  </span>
                  <span className="text-xs truncate">
                    {isLoadingPlan ? (
                      <Skeleton className="w-16 h-3" />
                    ) : (
                      `${displayPlanName} Plan`
                    )}
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={mainNavItems} />
        <NavSecondary items={secondaryNavItems} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: user.name ?? "User",
            email: user.email ?? "",
            avatar: user.image ?? "",
            plan: navUserPlanId,
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
