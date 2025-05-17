"use client";

import * as React from "react";
import {
  Command,
  PieChart,
  LayoutDashboard,
  LineChart,
  Settings2,
} from "lucide-react";
import { User as NextAuthUser } from "next-auth";
import { usePathname } from "next/navigation";
import { useProject } from "@/contexts/project-context";

import { NavMain } from "@/components/nav-main";
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

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: NextAuthUser & { plan?: string };
}

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  const { currentSiteId, isLoadingSites, activeProject } = useProject();
  const pathname = usePathname();
  const userPlan = user.plan || "free";

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
                    {headerProjectName}
                  </span>
                  <span className="text-xs truncate capitalize">
                    {userPlan} Plan
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={mainNavItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: user.name ?? "User",
            email: user.email ?? "",
            avatar: user.image ?? "",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
