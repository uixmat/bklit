"use client";

import { Plus, Users } from "lucide-react";
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
import { useWorkspace } from "@/contexts/workspace-provider";

export const ModuleWorkspaces = () => {
  const {
    organizations,
    activeOrganization,
    activeProject,
    onChangeOrganization,
    onChangeProject,
  } = useWorkspace();

  const [hoveredOrganization, setHoveredOrganization] = useState<string | null>(
    null,
  );
  const hoveredOrganizationData = hoveredOrganization
    ? organizations?.find((t) => t.id === hoveredOrganization)
    : activeOrganization;

  const setIsAddProjectDialogOpen = (isOpen: boolean) => {
    console.log(isOpen);
  };

  return (
    <div className="flex items-start">
      {/* Left Column - Organizations */}
      <div className="border-r w-64">
        <Command value={hoveredOrganizationData?.id}>
          <CommandInput placeholder="Find organization" />
          <CommandList>
            <CommandEmpty>No organizations found.</CommandEmpty>
            <CommandGroup heading="Organizations">
              {organizations?.map((organization) => (
                <CommandItem
                  value={organization.id}
                  key={organization.id}
                  onSelect={() => onChangeOrganization(organization.id)}
                  onMouseEnter={() => setHoveredOrganization(organization.id)}
                  className="cursor-pointer"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Users className="size-4" />
                      <span className="truncate">{organization.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge variant="outline" className="text-xs">
                        {organization.projects.length} projects
                      </Badge>
                      {organization.id === activeOrganization?.id && (
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
                  // Navigate to organization creation
                  window.location.href = "/organizations/create";
                }}
                className="cursor-pointer"
              >
                <Plus className="mr-2 size-4" />
                Create new organization
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      {/* Right Column - Projects for selected organization */}
      <div className="w-64">
        <Command>
          <CommandInput placeholder="Find project" />
          <CommandList>
            <CommandEmpty>
              {hoveredOrganizationData
                ? `No projects found in ${hoveredOrganizationData.name}`
                : "Select an organization to view projects"}
            </CommandEmpty>
            <CommandGroup
              heading={`Projects in ${hoveredOrganizationData?.name || "Organization"}`}
            >
              {hoveredOrganizationData?.projects.map((project) => (
                <CommandItem
                  value={project.id}
                  key={project.id}
                  onSelect={() =>
                    onChangeProject(hoveredOrganizationData.id, project.id)
                  }
                  className="cursor-pointer"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="truncate">{project.name}</span>
                    {project.id === activeProject?.id && (
                      <Badge variant="secondary" className="text-xs">
                        Active
                      </Badge>
                    )}
                  </div>
                </CommandItem>
              ))}
              {hoveredOrganizationData && (
                <CommandItem
                  onSelect={() => setIsAddProjectDialogOpen(true)}
                  className="cursor-pointer"
                >
                  <Plus className="mr-2 size-4" />
                  Add new project
                </CommandItem>
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  );
};
