import Link from "next/link";
import React from "react";

const SignUpButton = () => {
  return (
    <Link
      href="/register"
      className="bg-chestnut-400 hover:bg-chestnut-300 text-chestnut-900  text-center font-bold px-3 sm:px-6 py-1 sm:py-2 text-sm: text-base rounded-md transition-colors duration-200 flex justify-center items-center"
    >
      SignUp
    </Link>
  );
};

export default SignUpButton;
