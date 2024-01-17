import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { getServerSession } from "next-auth";
import { AuthProvider } from "./Providers";
import StoreProvider from "@/providers/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anon",
  description: "Aftworld test",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-chestnut-200  min-h-[100dvh] relative -mt-[4rem]`}
      >
        <AuthProvider>
          <StoreProvider>
            <Nav session={session} />
            {children}
          </StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
