"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";
import resetPassword from "@/actions/user/resetPassword";
import Input from "../ui/form/Input";

export default function ResetPasswordForm({ userId }: { userId: string }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log({ userId });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const { password } = Object.fromEntries(formData.entries());
      userId && (await resetPassword(userId, password as string));
      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen max-w-full flex justify-center items-center "
      style={{
        background: "url(/bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
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
        <h1 className="text-xl font-bold mb-4">new password</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input
            name="password"
            placeholder="New Password"
            disabled={isLoading}
          />
          <Button
            disabled={isLoading}
            className={`" rounded-md w-full p-2 bg-chestnut-600 transition-colors duration-500 hover:bg-chestnut-500 text-white ${
              isLoading ? "cursor-wait" : ""
            } "`}
          >
            Reset
          </Button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
