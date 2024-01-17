"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";
import resetPassword from "@/actions/user/resetPassword";
import Input from "../ui/form/Input";
import FormUi from "../ui/form/FormUi";
import SubmitButton from "../ui/form/SubmitButton";
import Status from "../ui/form/Status";

export default function ResetPasswordForm({ userId }: { userId: string }) {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const { password } = Object.fromEntries(formData.entries());
      userId && (await resetPassword(userId, password as string));
      setStatus("success")
      router.replace("/login");
    } catch (error) {
      console.log(error);
      setStatus("An error occured");
      setIsLoading(false);
    }
  };

  return (
    <FormUi title={`Reset Password`} onSubmit={handleSubmit}>
      <Input name="password" placeholder="New Password" disabled={isLoading} required />
      <SubmitButton isLoading={isLoading}>Reset</SubmitButton>
      <Status status={status} />
    </FormUi>
  );
}
