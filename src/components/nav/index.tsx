import Image from "next/image";
import React from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Session } from "next-auth";

const Nav = ({ session }: { session: Session | null }) => {
  return (
    <div className="flex w-full sticky top-0 left-0 backdrop-blur-2xl h-[4rem] backdrop-brightness-75">
      <div className=" max-w-7xl px-[1rem] md:px-0  w-full flex justify-between mx-auto items-center gap-4">
        <div className="flex justify-start  items-center w-full ">
          <Image
            width={317}
            height={320}
            alt="logo"
            className=" w-[5rem] "
            src="/anon_logo.png"
          />
        </div>
        <DesktopMenu session={session} />
        <MobileMenu />
      </div>
    </div>
  );
};

export default Nav;
