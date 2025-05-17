import { Checkout } from "@polar-sh/nextjs";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const checkout = Checkout({
    accessToken: process.env.POLAR_ACCESS_TOKEN!,
    successUrl: `${req.nextUrl.origin}/confirmation`,
    server:
      process.env.POLAR_SERVER_MODE === "sandbox" ? "sandbox" : "production",
  });
  return checkout(req);
};
