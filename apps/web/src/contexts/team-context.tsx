"use client";

import type { Team } from "@prisma/client";
import { useParams } from "next/navigation";
import type React from "react";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface TeamContextType {
  currentTeamId: string | null;
  currentTeam: Team | null;
  isLoadingTeam: boolean;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const TeamProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [currentTeamId, setCurrentTeamId] = useState<string | null>(null);
  const [currentTeam, setCurrentTeam] = useState<Team | null>(null);
  const [isLoadingTeam, setIsLoadingTeam] = useState(true);

  const params = useParams();
  const teamId = params?.teamId as string | undefined;

  // Fetch team data
  useEffect(() => {
    if (!teamId) {
      setCurrentTeam(null);
      setCurrentTeamId(null);
      setIsLoadingTeam(false);
      return;
    }

    const fetchTeam = async () => {
      try {
        setIsLoadingTeam(true);
        const response = await fetch(`/api/teams/${teamId}`);
        if (response.ok) {
          const team = await response.json();
          setCurrentTeam(team);
          setCurrentTeamId(teamId);
        } else {
          setCurrentTeam(null);
          setCurrentTeamId(null);
        }
      } catch (error) {
        console.error("Error fetching team:", error);
        setCurrentTeam(null);
        setCurrentTeamId(null);
      } finally {
        setIsLoadingTeam(false);
      }
    };

    fetchTeam();
  }, [teamId]);

  return (
    <TeamContext.Provider
      value={{
        currentTeamId,
        currentTeam,
        isLoadingTeam,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = (): TeamContextType => {
  const context = useContext(TeamContext);
  if (context === undefined) {
    throw new Error("useTeam must be used within a TeamProvider");
  }
  return context;
};
