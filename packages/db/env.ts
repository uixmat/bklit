import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod/v4";

export function dbEnv() {
  return createEnv({
    server: {
      DATABASE_URL: z.string().min(1),
    },
    experimental__runtimeEnv: {},
    skipValidation:
      !!process.env.CI || process.env.npm_lifecycle_event === "lint",
  });
}