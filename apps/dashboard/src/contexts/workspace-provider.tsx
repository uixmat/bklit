"use client";

import type { Session } from "@bklit/auth";
import type { UserOrganizations } from "@bklit/db/queries/user";
import { useParams, useRouter } from "next/navigation";
import { createContext, type ReactNode, useContext } from "react";
import { authClient } from "@/auth/client";

interface WorkspaceContextType {
  session: Session;
  activeOrganization: UserOrganizations[number] | undefined;
  activeProject: UserOrganizations[number]["projects"][number] | undefined;
  onChangeOrganization: (organizationId: string) => void;
  onChangeProject: (organizationId: string, projectId: string) => void;
  organizations: UserOrganizations;
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(
  undefined,
);

export const WorkspaceProvider: React.FC<{
  session: Session;
  organizations: UserOrganizations;
  children: ReactNode;
}> = ({ children, session, organizations }) => {
  const { organizationId, projectId } = useParams();
  const router = useRouter();

  const activeOrganization = organizations.find(
    (organization) => organization.id === organizationId,
  );

  const activeProject = activeOrganization?.projects.find(
    (project) => project.id === projectId,
  );

  const onChangeOrganization = (organizationId: string) => {
    authClient.organization.setActive({
      organizationId,
    });

    router.push(`/${organizationId}`);
  };

  const onChangeProject = (organizationId: string, projectId: string) => {
    authClient.organization.setActive({
      organizationId,
    });

    router.push(`/${organizationId}/${projectId}`);
  };

  return (
    <WorkspaceContext.Provider
      value={{
        session,
        organizations,
        activeProject,
        activeOrganization,
        onChangeOrganization,
        onChangeProject,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspace = (): WorkspaceContextType => {
  const context = useContext(WorkspaceContext);
  if (context === undefined) {
    throw new Error("useWorkspace must be used within a WorkspaceProvider");
  }
  return context;
};
