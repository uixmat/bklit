import { authRouter } from "./router/auth";
import { organizationRouter } from "./router/organization";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  organization: organizationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
