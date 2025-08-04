import { prisma } from "@bklit/db";
import { Button } from "@bklit/ui/components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@bklit/ui/components/card";
import Link from "next/link";
import { redirect } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { authenticated } from "@/lib/auth";

async function getSiteData(
	siteId: string,
	organizationId: string,
	userId: string,
) {
	const site = await prisma.project.findFirst({
		where: {
			id: siteId,
			organizationId: organizationId,
		},
		include: {
			organization: {
				include: {
					members: {
						where: { userId },
					},
				},
			},
		},
	});

	if (!site || !site.organization || site.organization.members.length === 0) {
		return null;
	}

	return { site, userMembership: site.organization.members[0] };
}

export default async function ProjectDashboardPage({
	params,
}: {
	params: Promise<{ organizationId: string; siteId: string }>;
}) {
	const { organizationId, siteId } = await params;
	const session = await authenticated();

	const siteData = await getSiteData(siteId, organizationId, session.user.id);

	if (!siteData) {
		redirect("/");
	}

	const { site } = siteData;

	return (
		<div className="space-y-6 prose dark:prose-invert max-w-none">
			<PageHeader
				title={`${site.name} - Dashboard`}
				description="Overview of your project and analytics."
			/>

			<Card className="card">
				<CardHeader>
					<CardTitle>Project Overview</CardTitle>
					<CardDescription>Details for your selected project.</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-lg">
						<strong>Project Name:</strong> {site.name}
					</p>
					<p className="text-muted-foreground">
						<strong>Project ID:</strong> {site.id}
					</p>
					{site.domain && (
						<p className="text-muted-foreground">
							<strong>Domain:</strong> {site.domain}
						</p>
					)}
					<p className="text-sm text-gray-500 mt-2">
						Created: {new Date(site.createdAt).toLocaleDateString()}
					</p>
				</CardContent>
			</Card>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<Card className="card">
					<CardHeader>
						<CardTitle>View Analytics</CardTitle>
						<CardDescription>
							See tracking data for this project.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Link href={`/${organizationId}/${siteId}/analytics`}>
							<Button>Go to Analytics</Button>
						</Link>
					</CardContent>
				</Card>

				<Card className="card">
					<CardHeader>
						<CardTitle>Tracking Setup</CardTitle>
						<CardDescription>
							Get instructions to integrate tracking.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Link href={`/${organizationId}/${siteId}/setup`}>
							<Button>Go to Setup</Button>
						</Link>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
