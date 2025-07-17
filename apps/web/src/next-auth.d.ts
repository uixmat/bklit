import { type DefaultSession, type DefaultUser } from "next-auth";
import { type DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      plan?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    plan?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id?: string;
    sub?: string;
    plan?: string;
  }
}
