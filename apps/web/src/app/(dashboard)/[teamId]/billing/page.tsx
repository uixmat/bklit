import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { BillingSuccessDialog } from "@/components/dialogs/billing-success-dialog";
import { PageHeader } from "@/components/page-header";

import { PolarPricingTable } from "@/components/polar-pricing-table";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";

async function getTeamPlan(teamId: string) {
	const team = await prisma.team.findUnique({
		where: { id: teamId },
		select: { plan: true, name: true, polarSubscriptionId: true },
	});
	return (
		team || { plan: "free", name: "Unknown Team", polarSubscriptionId: null }
	);
}

export default async function BillingPage({
	params,
	searchParams,
}: {
	params: Promise<{ teamId: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const { teamId } = await params;
	const resolvedSearchParams = await searchParams;
	const session = await getServerSession(authOptions);

	if (!session || !session.user?.id) {
		redirect(`/login?callbackUrl=${encodeURIComponent(`/${teamId}/billing`)}`);
	}

	// Check if user is a member of this team
	const teamMembership = await prisma.teamMember.findFirst({
		where: {
			teamId,
			userId: session.user.id,
		},
	});

	if (!teamMembership) {
		redirect("/");
	}

	const team = await getTeamPlan(teamId);
	const showSuccessMessage = resolvedSearchParams?.purchase === "success";

	return (
		<div className="space-y-6 prose dark:prose-invert max-w-none">
			<PageHeader
				title={`${team.name} - Billing`}
				description={`Manage subscription and billing information for ${team.name}.`}
			/>
			<BillingSuccessDialog isOpenInitially={showSuccessMessage} />

			<div className="mt-12">
				<div className="flex items-center justify-between mb-6">
					<h2>Available Plans</h2>
				</div>
				<div className="flex justify-center">
					<PolarPricingTable
						currentTeamId={teamId}
						currentPlanId={team.plan}
						showCurrentPlan={true}
					/>
				</div>
			</div>
		</div>
	);
}
