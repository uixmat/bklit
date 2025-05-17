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
      // Add user ID and other custom properties to the session object
      if (token && session.user) {
        session.user.id = token.sub; // .sub is the user id from the JWT token
        // session.user.customProperty = token.customProperty; // Example: if you add more to token
      }
      return session;
    },
    async jwt({ token, user }) {
      // Add custom properties to the JWT token
      if (user) {
        token.sub = user.id; // Persist the user id (from db) to the token
        // token.customProperty = user.customProperty; // Example
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
