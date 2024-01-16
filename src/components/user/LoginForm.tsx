"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { updateUserData } from "@/lib/redux-toolkit/boardSlice";
import { useAppSelector } from "@/lib/redux-toolkit/hooks";
import findUser from "@/actions/user/findUser";
import { Button } from "../ui/button";
import FormUi from "../ui/form/FormUi";
import Input from "../ui/form/Input";
import SubmitButton from "../ui/form/SubmitButton";
import Status from "../ui/form/Status";

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const { password, email } = Object.fromEntries(formData.entries());

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setStatus("Invalid Credentials");
        setIsLoading(false);
        return;
      }
      if (res?.ok) {
        const user = await findUser(email as string);
        dispatch(updateUserData(user));
        router.replace(`/dashboard/${user?.id}`);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <FormUi title={`Login`} onSubmit={handleSubmit}>
      <Input
        type="text"
        name="email"
        placeholder="Email"
        isLoading={isLoading}
      />
      <Input
        placeholder="Password"
        name="password"
        isLoading={isLoading}
      />
      <SubmitButton isLoading={isLoading}>Login</SubmitButton>
      <Status status={status} />

      <div className="flex md:flex-row flex-col justify-between">
        <Link className="text-sm mt-3 text-left" href={"/reset-password"}>
          <span className="underline hover:text-chestnut-600">
            ForgotPassword?
          </span>
        </Link>
        <Link className="text-sm mt-3 md:text-right" href={"/register"}>
          Dont have an account?{" "}
          <span className="underline hover:text-chestnut-600 text-chestnut-950">
            Register
          </span>
        </Link>
      </div>
    </FormUi>
  );
}
