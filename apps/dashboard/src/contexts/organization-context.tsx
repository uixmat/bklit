"use client";

import { useParams } from "next/navigation";
import type React from "react";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Organization } from "@/generated/prisma/client";

interface OrganizationContextType {
  currentOrganizationId: string | null;
  currentOrganization: Organization | null;
  isLoadingOrganization: boolean;
}

const OrganizationContext = createContext<OrganizationContextType | undefined>(
  undefined,
);

export const OrganizationProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [currentOrganizationId, setCurrentOrganizationId] = useState<
    string | null
  >(null);
  const [currentOrganization, setCurrentOrganization] =
    useState<Organization | null>(null);
  const [isLoadingOrganization, setIsLoadingOrganization] = useState(true);

  const params = useParams();
  const organizationId = params?.organizationId as string | undefined;

  // Fetch team data
  useEffect(() => {
    if (!organizationId) {
      setCurrentOrganization(null);
      setCurrentOrganizationId(null);
      setIsLoadingOrganization(false);
      return;
    }

    const fetchOrganization = async () => {
      try {
        setIsLoadingOrganization(true);
        const response = await fetch(`/api/organizations/${organizationId}`);
        if (response.ok) {
          const organization = await response.json();
          setCurrentOrganization(organization);
          setCurrentOrganizationId(organizationId);
        } else {
          setCurrentOrganization(null);
          setCurrentOrganizationId(null);
        }
      } catch (error) {
        console.error("Error fetching organization:", error);
        setCurrentOrganization(null);
        setCurrentOrganizationId(null);
      } finally {
        setIsLoadingOrganization(false);
      }
    };

    fetchOrganization();
  }, [organizationId]);

  return (
    <OrganizationContext.Provider
      value={{
        currentOrganizationId,
        currentOrganization,
        isLoadingOrganization,
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};

export const useOrganization = (): OrganizationContextType => {
  const context = useContext(OrganizationContext);
  if (context === undefined) {
    throw new Error(
      "useOrganization must be used within a OrganizationProvider",
    );
  }
  return context;
};
