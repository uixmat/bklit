import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: {
      id?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    // Add any custom properties you want on the User object from the database
    // For example, if you add roles or other fields to your User model in Prisma
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    // id and sub are often used for user ID
    id?: string;
    sub?: string;
    // Add any other custom properties you want in the JWT token
  }
}
