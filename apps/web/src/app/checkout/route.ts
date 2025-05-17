import { Checkout } from "@polar-sh/nextjs";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const checkout = Checkout({
    accessToken: process.env.POLAR_ACCESS_TOKEN!,
    // The successUrl will be where users are redirected from Polar after a successful payment intent.
    // We'll create this page next.
    successUrl: `${req.nextUrl.origin}/confirmation`,
    // Optionally, you can have a different URL for when the user cancels
    // cancelUrl: `${req.nextUrl.origin}/pricing`,
    // Determine if using sandbox or production
    // This should align with the POLAR_SERVER_MODE or NEXT_PUBLIC_POLAR_API_URL used in the client setup
    server:
      process.env.POLAR_SERVER_MODE === "sandbox" ? "sandbox" : "production",
  });
  return checkout(req);
};
