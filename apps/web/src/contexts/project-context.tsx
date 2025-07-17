"use client";

import type { Site } from "@prisma/client";
import { useParams, usePathname } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useTeams } from "./teams-provider";

interface ProjectContextType {
  currentSiteId: string | null;
  setCurrentSiteId: (siteId: string | null) => void;
  availableSites: Site[];
  isLoadingSites: boolean;
  activeProject: Site | null;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [currentSiteId, setCurrentSiteIdState] = useState<string | null>(null);
  const [availableSites, setAvailableSites] = useState<Site[]>([]);
  const [isLoadingSites, setIsLoadingSites] = useState(true);

  const params = useParams();
  const pathname = usePathname();
  const { currentTeamId } = useTeams();
  const teamId = currentTeamId || (params?.teamId as string | undefined);

  // Fetch sites for the current team
  useEffect(() => {
    if (!teamId) {
      setAvailableSites([]);
      setIsLoadingSites(false);
      return;
    }

    const fetchSites = async () => {
      try {
        setIsLoadingSites(true);
        const response = await fetch(`/api/teams/${teamId}/sites`);
        if (response.ok) {
          const sites = await response.json();
          setAvailableSites(sites);

          // Set the first site as current if no site is selected
          if (sites.length > 0 && !currentSiteId) {
            setCurrentSiteIdState(sites[0].id);
          }
        } else {
          setAvailableSites([]);
        }
      } catch (error) {
        console.error("Error fetching sites:", error);
        setAvailableSites([]);
      } finally {
        setIsLoadingSites(false);
      }
    };

    fetchSites();
  }, [teamId, currentSiteId]);

  // Handle site selection from URL params
  useEffect(() => {
    // Only treat as siteId if it's not a reserved route like billing or settings
    const segments = pathname.split("/").filter(Boolean);
    const siteIdFromParams =
      segments.length > 1 &&
      segments[1] !== "billing" &&
      segments[1] !== "settings"
        ? segments[1]
        : undefined;

    if (siteIdFromParams) {
      setCurrentSiteIdState(siteIdFromParams);
    } else if (availableSites.length > 0 && !currentSiteId) {
      setCurrentSiteIdState(availableSites[0].id);
    }
  }, [pathname, availableSites, currentSiteId]);

  const activeProject =
    availableSites.find((site) => site.id === currentSiteId) || null;

  const setCurrentSiteId = (siteId: string | null) => {
    setCurrentSiteIdState(siteId);
  };

  return (
    <ProjectContext.Provider
      value={{
        currentSiteId,
        setCurrentSiteId,
        availableSites,
        isLoadingSites,
        activeProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = (): ProjectContextType => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
};
