import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/auth/server";

export default async function RootPage() {
  const member = await auth.api.getActiveMember({
    headers: await headers(),
  });

  if (member?.organizationId) {
    return redirect(`/${member.organizationId}`);
  }

  redirect("/organizations/create");
}
