import NextAuth, { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db"; // Assuming your Prisma client is exported as prisma from @/lib/db.ts

if (!process.env.GITHUB_ID) {
  throw new Error("Missing GITHUB_ID in .env");
}
if (!process.env.GITHUB_SECRET) {
  throw new Error("Missing GITHUB_SECRET in .env");
}
if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("Missing NEXTAUTH_SECRET in .env");
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma as any), // Cast to any due to potential minor type mismatches with specific Prisma versions
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Add other providers here if needed in the future
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt", // Using JWT for session strategy
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub as string;
        session.user.plan = token.plan as string; // Assign plan from token to session
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        // user object is available on sign-in or when JWT is first created
        token.sub = user.id;
        // Fetch the user from DB to get the plan, as `user` object here might not have it yet
        // or it might be stale if plan changes during session.
        // However, for initial sign-up, user.plan from Prisma adapter should have the default.
        // For subsequent JWT creations, we might need to re-fetch if plan can change and needs to be JWT-fresh.
        // For now, let's assume user.plan is on the user object if available (e.g. from adapter on signup)
        if (user.plan) {
          token.plan = user.plan;
        } else {
          // If user.plan is not on the user object from the adapter (e.g. for existing users before plan field)
          // or if we want to ensure it's always fresh, fetch it.
          const dbUser = await prisma.user.findUnique({
            where: { id: user.id },
          });
          token.plan = dbUser?.plan;
        }
      }
      return token;
    },
  },
  // Optional: Add custom pages for sign-in, sign-out, error, etc.
  // pages: {
  //   signIn: '/auth/signin',
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
