import { Plus, Users } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface Team {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  plan: string;
  role: string;
  siteCount: number;
  sites: Array<{
    id: string;
    name: string;
    teamId: string | null;
    userId: string | null;
    domain: string | null;
    createdAt: Date;
    updatedAt: Date;
  }>;
}

export interface ModuleWorkspacesProps {
  teams: Team[];
  isLoadingTeams: boolean;
  handleProjectSelect: (projectId: string) => void;
  currentSiteId: string;
  setIsAddProjectDialogOpen: (isOpen: boolean) => void;
}

export const ModuleWorkspaces = ({
  teams,
  isLoadingTeams,
  handleProjectSelect,
  currentSiteId,
  setIsAddProjectDialogOpen,
}: ModuleWorkspacesProps) => {
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null);
  const params = useParams();
  const currentTeamId = params?.teamId as string | undefined;

  const currentTeam = teams.find((t) => t.id === currentTeamId);
  const hoveredTeamData = hoveredTeam
    ? teams.find((t) => t.id === hoveredTeam)
    : currentTeam;

  return (
    <div className="flex items-start">
      {/* Left Column - Teams */}
      <div className="border-r w-64">
        <Command>
          <CommandInput placeholder="Find team" />
          <CommandList>
            <CommandEmpty>
              {isLoadingTeams ? "Loading teams..." : "No teams found."}
            </CommandEmpty>
            <CommandGroup heading="Teams">
              {teams.map((team) => (
                <CommandItem
                  key={team.id}
                  onSelect={() => {
                    // Navigate to team dashboard
                    window.location.href = `/${team.id}`;
                  }}
                  onMouseEnter={() => setHoveredTeam(team.id)}
                  onMouseLeave={() => setHoveredTeam(null)}
                  className="cursor-pointer"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Users className="size-4" />
                      <span className="truncate">{team.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge variant="outline" className="text-xs">
                        {team.siteCount} sites
                      </Badge>
                      {team.id === currentTeamId && (
                        <Badge variant="secondary" className="text-xs">
                          Current
                        </Badge>
                      )}
                    </div>
                  </div>
                </CommandItem>
              ))}
              <CommandItem
                onSelect={() => {
                  // Navigate to team creation
                  window.location.href = "/teams/create";
                }}
                className="cursor-pointer"
              >
                <Plus className="mr-2 size-4" />
                Create new team
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      {/* Right Column - Projects for selected team */}
      <div className="w-64">
        <Command>
          <CommandInput placeholder="Find site" />
          <CommandList>
            <CommandEmpty>
              {hoveredTeamData
                ? `No sites found in ${hoveredTeamData.name}`
                : "Select a team to view sites"}
            </CommandEmpty>
            <CommandGroup
              heading={`Sites in ${hoveredTeamData?.name || "Team"}`}
            >
              {hoveredTeamData?.sites.map((site) => (
                <CommandItem
                  key={site.id}
                  onSelect={() => handleProjectSelect(site.id)}
                  className="cursor-pointer"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="truncate">{site.name}</span>
                    {site.id === currentSiteId && (
                      <Badge variant="secondary" className="text-xs">
                        Active
                      </Badge>
                    )}
                  </div>
                </CommandItem>
              ))}
              {hoveredTeamData && (
                <CommandItem
                  onSelect={() => setIsAddProjectDialogOpen(true)}
                  className="cursor-pointer"
                >
                  <Plus className="mr-2 size-4" />
                  Add new site
                </CommandItem>
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  );
};
