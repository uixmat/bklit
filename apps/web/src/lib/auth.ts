import { PrismaAdapter } from "@auth/prisma-adapter";
import type { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from "@bklit/db";

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
  adapter: PrismaAdapter(prisma),
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
      }
      return session;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async jwt({ token, user }) {
      if (user) {
        // user object is available on sign-in or when JWT is first created
        token.sub = user.id;
      }
      return token;
    },
  },
  // Optional: Add custom pages for sign-in, sign-out, error, etc.
  pages: {
    signIn: "/signin", // Using the new signin page
  },
  events: {
    async createUser(message) {
      // When a new user is created, automatically create their first project.
      // The PrismaAdapter has already created the user record in the DB.
      // message.user contains the user object (id, email, name, etc.)
      if (message.user.id) {
        try {
          await prisma.site.create({
            data: {
              name: "Your first project", // Default project name
              userId: message.user.id,
              // domain can be null/optional by default
            },
          });
          console.log(
            `Created default project for new user: ${message.user.id}`,
          );
        } catch (error) {
          console.error(
            `Failed to create default project for user ${message.user.id}:`,
            error,
          );
          // Decide on error handling:
          // - Log and continue (user will have no project initially, marketing page logic will apply)
          // - Throw error (might impact user creation flow, depending on NextAuth handling)
          // For now, logging and continuing.
        }
      }
    },
  },
};
