"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="min-h-screen max-w-full flex justify-center items-center "
      style={{ background: "url(/bg.jpg)", backgroundSize: "cover" }}
    >
      <div className="flex flex-col gap-3 w-[40vw] max-w-[25rem] md:min-w-[40vw] min-w-[80vw] h-full rounded-xl backdrop-blur-lg border border-chestnut-100/70 pb-[3rem] px-[7rem]">
        <div className="flex justify-center items-center ">
          {" "}
          <Image
            width={317}
            height={320}
            alt="logo"
            className=" w-[8rem] -mb-[1rem] "
            src="/anon_logo.png"
          />
        </div>
        <h1 className="text-xl font-bold mb-4">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="px-3 py-2 rounded-lg"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="px-3 py-2 rounded-lg"
          />
          <button className="rounded-md w-full p-2 bg-chestnut-500 transition-colors duration-500 hover:bg-chestnut-700 text-white">
            Login
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <div className="flex md:flex-row flex-col justify-between">
            <Link className="text-sm mt-3 text-left" href={"/reset-password"}>
              <span className="underline">ForgotPassword?</span>
            </Link>
            <Link className="text-sm mt-3 text-right" href={"/register"}>
              Dont have an account? <span className="underline">Register</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
