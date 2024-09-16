import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    username: string;
    email?: string;
    role?: string;
    token?: string;
  }

  interface Session {
    user: User;
  }
}