import Link from "next/link";
import React from "react";

const SignInButton = () => {
  return (
    <Link
      href="/login"
      className="bg-chestnut-600/90 transition-colors dutarion-100 hover:bg-chestnut-500/80 text-white font-bold px-6 py-2  rounded-md"
    >
      SignIn
    </Link>
  );
};

export default SignInButton;
