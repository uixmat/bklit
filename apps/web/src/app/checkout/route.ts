import { Checkout } from "@polar-sh/nextjs";
import type { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const checkout = Checkout({
    accessToken: process.env.POLAR_ACCESS_TOKEN!,
    successUrl: `${req.nextUrl.origin}/billing?purchase=success`,
    server: process.env.POLAR_SERVER_MODE === "sandbox" ? "sandbox" : "production",
  });
  return checkout(req);
};
