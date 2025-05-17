"use client";

import type { Site } from "@prisma/client";
import { useRouter, useParams } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ProjectContextType {
  currentSiteId: string | null;
  setCurrentSiteId: (siteId: string | null) => void; // Will primarily be URL driven for now
  availableSites: Site[];
  isLoadingSites: boolean;
  // activeProject will be derived from currentSiteId and availableSites
  activeProject: Site | null;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{
  children: ReactNode;
  sites: Site[]; // All sites for the user, fetched in a server component (layout)
  initialSiteIdFromUrl?: string | null; // Passed from layout using params
}> = ({ children, sites, initialSiteIdFromUrl = null }) => {
  const [currentSiteId, setCurrentSiteIdState] = useState<string | null>(
    initialSiteIdFromUrl
  );
  const [isLoadingSites, setIsLoadingSites] = useState(true);
  const [availableSites, setAvailableSites] = useState<Site[]>([]);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    setAvailableSites(sites || []);
    setIsLoadingSites(false);
  }, [sites]);

  useEffect(() => {
    const siteIdFromParams = params?.siteId as string | undefined;
    if (siteIdFromParams) {
      setCurrentSiteIdState(siteIdFromParams);
    } else if (initialSiteIdFromUrl) {
      setCurrentSiteIdState(initialSiteIdFromUrl);
    } else if (sites && sites.length > 0 && !currentSiteId) {
      // If no siteId in URL or initial, and we have sites, select the first one by default
      // And navigate to its page. This is an opinionated default.
      // Consider if this is desired or if a "no project selected" state is better.
      // router.push(`/${sites[0].id}`);
      // For now, let's just set it if not set, and let page logic handle redirects if needed
      setCurrentSiteIdState(sites[0].id);
    }
  }, [params, sites, initialSiteIdFromUrl, currentSiteId, router]);

  const activeProject =
    availableSites.find((site) => site.id === currentSiteId) || null;

  // This setter might be used by your dropdown later if it doesn't just navigate
  const setCurrentSiteId = (siteId: string | null) => {
    setCurrentSiteIdState(siteId);
    // If your dropdown changes context AND navigates, it would call router.push here.
    // For now, context primarily reflects URL state.
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
