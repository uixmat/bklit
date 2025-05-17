import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SignOutButton } from "@/components/auth-buttons";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AddProjectForm from "@/components/forms/add-project-form";
// We will create this component shortly
// import AddProjectButton from '@/components/add-project-button';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    redirect("/"); // Redirect to home/login if not authenticated
  }

  // Fetch user's project (limit to one for now)
  const userProject = await db.site.findFirst({
    where: { userId: session.user.id },
  });

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome, {session.user.email || session.user.name}!
          </p>
        </div>
        <SignOutButton />
      </div>

      <div className="p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Your Project</h2>
        {userProject ? (
          <div>
            <p className="text-lg">
              <strong>Project Name:</strong> {userProject.name}
            </p>
            <p className="text-muted-foreground">
              <strong>Project ID (Site ID for tracker):</strong>{" "}
              {userProject.id}
            </p>
            {userProject.domain && (
              <p className="text-muted-foreground">
                <strong>Domain:</strong> {userProject.domain}
              </p>
            )}
            <p className="text-sm text-gray-500 mt-2">
              Created: {new Date(userProject.createdAt).toLocaleDateString()}
            </p>
            {/* Link to view project-specific analytics (old dashboard) will go here */}
            <Link href={`/dashboard/site/${userProject.id}/analytics`}>
              <Button className="mt-4">View Analytics</Button>
            </Link>
          </div>
        ) : (
          <AddProjectForm />
        )}
      </div>
      {/* We can later add a dedicated page/section for Event Definitions */}
    </div>
  );
}
