"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import LogOutButton from "../boarding/LogOutButton";

export default function UserInfo() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log({ session });
  }, [session]);

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <LogOutButton />
      </div>
    </div>
  );
}
