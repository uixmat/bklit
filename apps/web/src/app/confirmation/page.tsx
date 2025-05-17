"use client"; // Make it a client component

// import Link from "next/link"; // No longer used
// import { Button } from "@/components/ui/button"; // No longer used
import { CheckCircleIcon } from "lucide-react";
import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation"; // No longer using useRouter for this redirect

// export const metadata: Metadata = { // Metadata must be exported from Server Components
//   title: "Order Confirmation - Thank You!",
//   description: "Your checkout is being processed.",
// };

export default function ConfirmationPage() {
// No props needed now as searchParams are not used
// {
//   searchParams,
// }: {
//   searchParams: {
//     checkoutId?: string;
//     subscription_id?: string;
//     order_id?: string;
//   };
// }
  // const { checkoutId, subscription_id, order_id } = searchParams; // No longer used
  const { update: updateSession } = useSession();
  // const router = useRouter(); // No longer using useRouter

  useEffect(() => {
    const refreshSessionAndRedirect = async () => {
      console.log(
        "ConfirmationPage: Attempting to update session (best effort)..."
      );
      await updateSession();

      console.log(
        "ConfirmationPage: Initiating sign-out and sign-in to refresh session fully..."
      );

      const finalRedirectUrl = "/billing";

      signOut({
        redirect: true,
        callbackUrl: `/api/auth/signin?callbackUrl=${encodeURIComponent(
          finalRedirectUrl
        )}`,
      });
    };

    const timer = setTimeout(refreshSessionAndRedirect, 2500);

    return () => clearTimeout(timer);
  }, [updateSession]);

  // Note: The Polar documentation states:
  // "The checkout is not considered "successful" yet however.
  // It's initially marked as `confirmed` until you've received a webhook event
  // `checkout.updated` with a status set to `succeeded`."
  // So, this page is more of a "processing" page.
  // Real-time updates or final confirmation should be handled via webhooks and potentially client-side polling or sockets.

  return (
    <section className="container flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] gap-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-md flex-col items-center gap-6 text-center">
        <CheckCircleIcon className="h-16 w-16 text-green-500" />
        <h1 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-4xl">
          Thank You! Finalizing Your Account...
        </h1>
        <p className="text-lg text-muted-foreground">
          Your purchase is confirmed. We are refreshing your session to update
          your plan. You will be redirected momentarily.
        </p>
        {/* Omit ID display for this version as user will be redirected quickly */}
        {/* {checkoutId && (...)} */}
        {/* {(subscription_id || order_id) && (...)} */}
        <p className="text-sm text-muted-foreground mt-4">
          Please wait while we update your session...
        </p>
        {/* Optional: Link to dashboard if something goes wrong, though auto-redirect should handle it */}
        {/* <div className="mt-6">
          <Button asChild className="w-full">
            <Link href="/">Go to Dashboard if not redirected</Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
}
