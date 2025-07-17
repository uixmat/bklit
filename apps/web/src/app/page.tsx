import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { getUserFirstTeam } from "@/actions/user-actions";
import { authOptions } from "@/lib/auth";

export default async function RootPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    // User is not authenticated, redirect to marketing page
    redirect("/home");
  }

  // User is authenticated, check if they have a team
  const firstTeam = await getUserFirstTeam();

  if (firstTeam) {
    // User has a team, redirect to team dashboard
    redirect(`/${firstTeam.id}`);
  } else {
    // User has no team, redirect directly to team creation
    redirect("/teams/create");
  }
}
