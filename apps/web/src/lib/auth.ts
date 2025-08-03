import { auth } from "@/auth/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const authenticated = async (options?: {
  callbackUrl?: string;
  redirect?: boolean;
}) => {
  const { callbackUrl, redirect: shouldRedirect = true } = options ?? {};

  const session = await auth.api.getActiveMember({
    headers: await headers(),
  });

  if (!session) {
    return redirect(
      callbackUrl
        ? `/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`
        : "/signin",
    );
  }

  return session;
};
