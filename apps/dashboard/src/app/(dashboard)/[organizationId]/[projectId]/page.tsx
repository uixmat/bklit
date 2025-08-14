import { authenticated } from "@/lib/auth";
import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { ProjectDashboard } from "./_components/project-dashboard";

export default async function ProjectDashboardPage({
  params,
}: {
  params: Promise<{ organizationId: string; projectId: string }>;
}) {
  await authenticated();
  const { organizationId, projectId } = await params;

  prefetch(trpc.project.fetch.queryOptions({ id: projectId, organizationId }));

  return (
    <HydrateClient>
      <ProjectDashboard organizationId={organizationId} id={projectId} />
    </HydrateClient>
  );
}
