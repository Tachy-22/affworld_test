import Link from "next/link";
import React from "react";

const SignUpButton = () => {
  return (
    <Link
      href="/register"
      className="bg-chestnut-400 hover:bg-chestnut-300 text-chestnut-900 font-bold px-6 py-2  rounded-md transition-colors duration-200"
    >
      SignUp
    </Link>
  );
};

export default SignUpButton;
