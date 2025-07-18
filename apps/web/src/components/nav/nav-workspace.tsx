import { ChevronsUpDown, Users } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getUserTeams } from "@/actions/user-actions";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { useProject } from "@/contexts/project-context";
import { useTeams } from "@/contexts/teams-provider";
import { useTeamPlanStatus } from "@/hooks/use-team-plan-status";
import { useUserPlanStatus } from "@/hooks/use-user-plan-status";
import type { UserTeamData } from "@/types/user";
import { ModuleWorkspaces } from "./module-workspaces";

export function NavWorkspace() {
  const { isLoadingSites, activeProject, setCurrentSiteId, currentSiteId } =
    useProject();
  const { currentTeam, isLoadingTeam, currentTeamId } = useTeams();
  const params = useParams();
  const pathname = usePathname();
  const teamId = currentTeamId || (params?.teamId as string | undefined);
  // Only treat as siteId if it's not a reserved route like billing or settings
  const segments = pathname.split("/").filter(Boolean);
  const siteId =
    segments.length > 1 &&
    segments[1] !== "billing" &&
    segments[1] !== "settings"
      ? segments[1]
      : undefined;

  // Pre-fetch teams data
  const [teams, setTeams] = useState<UserTeamData[]>([]);
  const [isLoadingTeams, setIsLoadingTeams] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setIsLoadingTeams(true);
        const teamsData = await getUserTeams();
        setTeams(teamsData || []);
      } catch (error) {
        console.error("Error fetching teams:", error);
        setTeams([]);
      } finally {
        setIsLoadingTeams(false);
      }
    };

    fetchTeams();
  }, []);

  const teamPlanStatus = useTeamPlanStatus(teamId || "");
  const userPlanStatus = useUserPlanStatus();

  const planDetails = teamId
    ? teamPlanStatus.planDetails
    : userPlanStatus.planDetails;
  const isLoadingPlanDetails = teamId
    ? teamPlanStatus.isLoading
    : userPlanStatus.isLoadingPlanDetails;

  const router = useRouter();
  const [, setIsAddProjectDialogOpen] = React.useState(false);

  const handleProjectSelect = (projectId: string) => {
    setCurrentSiteId(projectId);
    if (teamId) {
      router.push(`/${teamId}/${projectId}`);
    } else {
      router.push(`/${projectId}`);
    }
  };

  // Determine what to show based on current route
  const showTeam = teamId && currentTeam;
  const showSite = siteId && activeProject;

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          {showTeam && (
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/${teamId}`} className="flex items-center gap-2">
                  <Users className="size-4" />
                  <span>
                    {isLoadingTeam ? "Loading..." : currentTeam?.name}
                  </span>
                  <Badge variant="outline">
                    {isLoadingPlanDetails ? (
                      <Skeleton className="w-16 h-3" />
                    ) : (
                      `${planDetails.name} Plan`
                    )}
                  </Badge>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          )}

          {showSite && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {isLoadingSites ? "Loading..." : activeProject?.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <ChevronsUpDown className="size-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="rounded-lg p-0 min-w-max"
          side="bottom"
          align="start"
          sideOffset={4}
        >
          <ModuleWorkspaces
            teams={teams}
            isLoadingTeams={isLoadingTeams}
            handleProjectSelect={handleProjectSelect}
            currentSiteId={currentSiteId || ""}
            setIsAddProjectDialogOpen={setIsAddProjectDialogOpen}
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
