"use client";
import React from "react";
import { Session } from "next-auth";
import SignUpButton from "../ui/boarding/SignUpButton";
import SignInButton from "../ui/boarding/SignInButton";
import UserButton from "../ui/user/UserButton";
import Link from "next/link";
import { useAppSelector } from "@/lib/redux-toolkit/hooks";

const DesktopMenu = ({ session }: { session: Session | null }) => {
  const { userData } = useAppSelector((state) => state.board);
  return (
    <div className="hidden md:flex justify-between items-center  gap-1 w-full">
      <div className="flex gap-2 justify-end items-center   w-full">
        {!!session && userData && (
          <div className="flex gap-[4rem] items-center justify-between w-">
            <div className="flex gap-3 ">
              <Link
                href="/"
                className="text-chestnut-950 hover:text-chestnut-900"
              >
                home
              </Link>
              <Link
                className="text-chestnut-950 hover:text-chestnut-900"
                href={`/dashboard/${userData?.id}`}
              >
                dashboard
              </Link>
            </div>
            <UserButton />
          </div>
        )}
        {!session && <SignUpButton />}
        {!session && <SignInButton />}
      </div>
    </div>
  );
};

export default DesktopMenu;
