import { authenticated } from "@/lib/auth";
import { HydrateClient, prefetch, trpc } from "@/trpc/server";

import { OrganizationSettings } from "../_components/organization-settings";

export default async function OrganizationSettingsPage({
	params,
}: {
	params: Promise<{ organizationId: string }>;
}) {
	await authenticated();
	const { organizationId } = await params;

	prefetch(trpc.organization.fetch.queryOptions({ id: organizationId }));

	return (
		<HydrateClient>
			<OrganizationSettings organizationId={organizationId} />
		</HydrateClient>
	);
}
