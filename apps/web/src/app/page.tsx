import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/auth/server";
import { api } from "@/trpc/server";

export default async function RootPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log(session);
  if (!session) {
    return redirect("/signin");
  }

  const organizations = await api.organization.list();

  if (organizations.length === 0) {
    return redirect("/organizations/create");
  }

  return redirect(`/${organizations[0].id}`);
}
