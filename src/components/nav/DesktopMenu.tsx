import React from "react";
import { Session } from "next-auth";
import LogOutButton from "../ui/LogOutButton";
import SignUpButton from "../ui/SignUpButton";
import SignInButton from "../ui/SignInButton";
import UserButton from "../ui/UserButton";

const DesktopMenu = ({ session }: { session: Session | null }) => {
  const isSignedIn = false;
  return (
    <div className="hidden md:flex justify-between items-center  gap-1 w-full">
      {isSignedIn ? (
        <div className="flex gap-2">
          <p>new secret</p>
          <p>view secrets</p>
        </div>
      ) : (
        <div className="flex gap-2 justify-end items-center   w-full">
          {!!session && <UserButton />}
          {!session && <SignUpButton />}
          {!session && <SignInButton />}
        </div>
      )}
    </div>
  );
};

export default DesktopMenu;
