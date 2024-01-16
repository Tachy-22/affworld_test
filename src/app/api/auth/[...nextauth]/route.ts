import NextAuth from "next-auth/next";
import prisma from "@/configs/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import findUser from "@/actions/user/findUser";
import { Awaitable,  User } from "next-auth";

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        try {
          console.log("finding user:");
          const user = await findUser(credentials?.email as string);
          console.log({ user });
          if (!user) {
            return null;
          }
          const credentialPassword = credentials?.password as string;
          const userPassword = user?.password as string;

          console.log({ credentialPassword, userPassword });
          const passwordsMatch = await bcrypt.compare(
            credentialPassword,
            userPassword
          );

          if (!passwordsMatch) {
            return null;
          }

          return user as Awaitable<User | null>;
        } catch (error) {
          console.log("Error: ", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions as any);
export { handler as GET, handler as POST };
