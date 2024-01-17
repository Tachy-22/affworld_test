import Link from "next/link";
import React from "react";

const SignInButton = () => {
  return (
    <Link
      href="/login"
      className="bg-chestnut-600/90  hover:bg-chestnut-500/80 text-white text-center font-bold px-3 sm:px-6 py-1 sm:py-2 text-sm: text-base rounded-md transition-colors duration-200  justify-center items-center"
    >
      SignIn
    </Link>
  );
};

export default SignInButton;
