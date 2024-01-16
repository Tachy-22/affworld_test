"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Session } from "next-auth";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/lib/redux-toolkit/hooks";
import findUser from "@/actions/user/findUser";
import { useSession } from "next-auth/react";
import { updateUserData } from "@/lib/redux-toolkit/boardSlice";
import Link from "next/link";

const Nav = ({ session }: { session: Session | null }) => {
  const dispatch = useDispatch();
  const { userData } = useAppSelector((state) => state.board);
  useEffect(() => {
    const uodateUserData = async () => {
      if (userData === null) {
        const user = await findUser(session?.user?.email as string);
        dispatch(updateUserData(user));
      }
    };
    session?.user?.email && uodateUserData();
  }, [dispatch, session?.user?.email, userData]);

  return (
    <div className="flex w-full sticky top-0 left-0 backdrop-blur-2xl h-[4rem] backdrop-brightness-75 z-50">
      <div className=" max-w-7xl xl:px-0  px-[10%]  w-full flex justify-between mx-auto items-center gap-4">
        <Link href="/" className="flex justify-start  items-center w-full ">
          <Image
            width={317}
            height={320}
            alt="logo"
            className=" w-[5rem] "
            src="/anon_logo.png"
          />
        </Link>
        <DesktopMenu session={session} />
        <MobileMenu />
      </div>
    </div>
  );
};

export default Nav;
