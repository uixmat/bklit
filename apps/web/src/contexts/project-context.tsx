"use client";

import type { Site } from "@prisma/client";
import { useParams } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

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
  sites: Site[];
  initialSiteIdFromUrl?: string | null;
}> = ({ children, sites, initialSiteIdFromUrl = null }) => {
  const [currentSiteId, setCurrentSiteIdState] = useState<string | null>(
    initialSiteIdFromUrl
  );
  const [availableSites, setAvailableSites] = useState<Site[]>(sites || []);
  const [isLoadingSites, setIsLoadingSites] = useState(!sites);

  const params = useParams();

  useEffect(() => {
    if (sites) {
      setAvailableSites(sites);
      setIsLoadingSites(false);
    } else {
      setAvailableSites([]);
      setIsLoadingSites(true);
    }
  }, [sites]);

  useEffect(() => {
    const siteIdFromParams = params?.siteId as string | undefined;
    if (siteIdFromParams) {
      setCurrentSiteIdState(siteIdFromParams);
    } else if (initialSiteIdFromUrl) {
      setCurrentSiteIdState(initialSiteIdFromUrl);
    } else if (availableSites && availableSites.length > 0 && !currentSiteId) {
      setCurrentSiteIdState(availableSites[0].id);
    }
  }, [params, availableSites, initialSiteIdFromUrl, currentSiteId]);

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
