"use client";
import Link from "next/link";
import React, { useState } from "react";
import UserButton from "../ui/user/UserButton";
import { useAppSelector } from "@/lib/redux-toolkit/hooks";

const MobileMenu = () => {
  const { userData } = useAppSelector((state) => state.board);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navLinks = [
    { path: "/", text: "home" },
    { path: `/dashboard/${userData?.id}`, text: "dashboard" },
  ];

  return (
    <div className="md:hidden block max-w-screen ">
      <div className="flex items-center gap-3">
        <UserButton />
        <button
          onClick={toggleMobileMenu}
          className="block md:hidden text-chestnut-900 focus:outline-none text-xl h-full"
        >
          {!isMobileMenuOpen ? " ☰" : "  ✕"}
        </button>
      </div>
      {userData && (
        <div
          className={`absolute  backdrop-blur-3xl backdrop-brightness-50 bg-chestnut-300 top-[4rem] left-0   bg-blue-00/80 z-40  flex items-center justify-center transition-transform duration-300 ease-in-out w-screen ${
            isMobileMenuOpen ? "" : "-translate-y-[200%] "
          }`}
        >
          <ul className="flex  flex-col items-start py-[1rem]  h-full w-full backdrop-blur-3xl bg-blue-00/80">
          
            {navLinks.map((link, index) => (
              <li
                key={index}
                className=" w-full hover:bg-chestnut-950/30 px-3 text-start py-[0.5rem] "
              >
                <Link
                  onClick={toggleMobileMenu}
                  className="text-base hover:text-chestnut-500 text-chestnut-900 w-full  hover:underline underline-offset-2 hover:border-b hover:border-b-blue-300"
                  href={link.path}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Close Button for Mobile Menu */}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
