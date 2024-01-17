"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogOutButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        signOut();
        router.replace("/");
      }}
      className="bg-red-500 text-white font-bold px-6 py-2  rounded-md"
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
