"use client";
import { signOut } from "next-auth/react";

const LogOutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="bg-red-500 text-white font-bold px-6 py-2  rounded-md"
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
