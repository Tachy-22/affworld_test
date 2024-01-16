"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import findUser from "@/actions/user/findUser";
import createUser from "@/actions/user/createUser";
import Image from "next/image";
import FormUi from "../ui/form/FormUi";
import Input from "../ui/form/Input";
import Status from "../ui/form/Status";
import SubmitButton from "../ui/form/SubmitButton";

export default function RegisterForm() {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const { email, name, password } = Object.fromEntries(formData.entries());
    setIsLoading(true);

    if (!name || !email || !password) {
      setStatus("All fields are necessary.");
      setIsLoading(false);
      return;
    }

    try {
      const user = await findUser(email as string);

      if (user) {
        setStatus("User already exists.");
        setIsLoading(false);

        return;
      } else {
        const user = await createUser({
          name,
          email,
          password,
        });

        if (user) {
          const form = e.target as HTMLFormElement;
          setIsLoading(false);
          form.reset();
          router.push("/login");
          console.log("User registration sucess.");
        } else {
          setIsLoading(false);

          console.log("User registration failed.");
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.error("error during registration: ", error);
    }
  };

  return (
    <FormUi onSubmit={handleSubmit} title={`Sign up`}>
      <Input name="name" type="text" placeholder="John Doe" />
      <Input name="email" type="text" placeholder="johndoe@gmail.com" />
      <Input name="password" type="password" placeholder="12345" />
      <SubmitButton isLoading={isLoading}>Sign Up</SubmitButton>
      <Status status={status} />
      <Link className="text-sm mt-3 text-right" href={"/login"}>
        Already have an account?{" "}
        <span className="underline hover:text-chestnut-600 text-chestnut-950">
          Login
        </span>
      </Link>
    </FormUi>
  );
}
