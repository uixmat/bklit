"use client";

import type { Team } from "@prisma/client";
import { useParams } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface TeamsContextType {
  currentTeamId: string | null;
  setCurrentTeamId: (teamId: string | null) => void;
  currentTeam: Team | null;
  isLoadingTeam: boolean;
  availableTeams: Team[];
  isLoadingTeams: boolean;
  lastActiveTeamId: string | null;
}

const TeamsContext = createContext<TeamsContextType | undefined>(undefined);

export const TeamsProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [currentTeamId, setCurrentTeamIdState] = useState<string | null>(null);
  const [currentTeam, setCurrentTeam] = useState<Team | null>(null);
  const [isLoadingTeam, setIsLoadingTeam] = useState(true);
  const [availableTeams, setAvailableTeams] = useState<Team[]>([]);
  const [isLoadingTeams, setIsLoadingTeams] = useState(true);
  const [lastActiveTeamId, setLastActiveTeamId] = useState<string | null>(null);

  const params = useParams();
  const teamIdFromParams = params?.teamId as string | undefined;

  // Fetch all teams for the user
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setIsLoadingTeams(true);
        const response = await fetch("/api/teams");
        if (response.ok) {
          const teams = await response.json();
          setAvailableTeams(teams || []);

          // Set the first team as current if no team is selected
          if (teams && teams.length > 0 && !currentTeamId) {
            setCurrentTeamIdState(teams[0].id);
          }
        } else {
          setAvailableTeams([]);
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
        setAvailableTeams([]);
      } finally {
        setIsLoadingTeams(false);
      }
    };

    fetchTeams();
  }, []);

  // Handle team selection from URL params or maintain last active team
  useEffect(() => {
    if (teamIdFromParams) {
      setCurrentTeamIdState(teamIdFromParams);
      setLastActiveTeamId(teamIdFromParams);
    } else if (
      lastActiveTeamId &&
      availableTeams.some((team) => team.id === lastActiveTeamId)
    ) {
      // If we're on a user page, maintain the last active team
      setCurrentTeamIdState(lastActiveTeamId);
    } else if (availableTeams.length > 0 && !currentTeamId) {
      // Fallback to first available team
      setCurrentTeamIdState(availableTeams[0].id);
      setLastActiveTeamId(availableTeams[0].id);
    }
  }, [teamIdFromParams, lastActiveTeamId, availableTeams]);

  // Fetch current team data
  useEffect(() => {
    if (!currentTeamId) {
      setCurrentTeam(null);
      setIsLoadingTeam(false);
      return;
    }

    const fetchTeam = async () => {
      try {
        setIsLoadingTeam(true);
        const response = await fetch(`/api/teams/${currentTeamId}`);
        if (response.ok) {
          const team = await response.json();
          setCurrentTeam(team);
        } else {
          setCurrentTeam(null);
        }
      } catch (error) {
        console.error("Error fetching team:", error);
        setCurrentTeam(null);
      } finally {
        setIsLoadingTeam(false);
      }
    };

    fetchTeam();
  }, [currentTeamId]);

  const setCurrentTeamId = (teamId: string | null) => {
    setCurrentTeamIdState(teamId);
    if (teamId) {
      setLastActiveTeamId(teamId);
    } else {
      setLastActiveTeamId(null);
    }
  };

  return (
    <TeamsContext.Provider
      value={{
        currentTeamId,
        setCurrentTeamId,
        currentTeam,
        isLoadingTeam,
        availableTeams,
        isLoadingTeams,
        lastActiveTeamId,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};

export const useTeams = (): TeamsContextType => {
  const context = useContext(TeamsContext);
  if (context === undefined) {
    throw new Error("useTeams must be used within a TeamsProvider");
  }
  return context;
};
