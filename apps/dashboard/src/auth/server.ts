import { initAuth } from "@bklit/auth";
import { envs } from "@bklit/utils";
import { headers } from "next/headers";
import { cache } from "react";
import { env } from "../env";

export const auth = initAuth({
  baseUrl: envs.dashboardUrl(),
  productionUrl: envs.dashboardUrl(),
  secret: env.AUTH_SECRET,
  githubClientId: env.AUTH_GITHUB_ID,
  githubClientSecret: env.AUTH_GITHUB_SECRET,
});

export const getSession = cache(async () =>
  auth.api.getSession({ headers: await headers() }),
);
