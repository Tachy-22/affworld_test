"use client";

import sendMail from "@/actions/mailer/sendMail";
import findUser from "@/actions/user/findUser";
import Image from "next/image";
import { FormEvent, useCallback, useState } from "react";
import Input from "./ui/form/Input";
import FormUi from "./ui/form/FormUi";
import SubmitButton from "./ui/form/SubmitButton";
import Status from "./ui/form/Status";

const ResetComponent = () => {
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSending = useCallback((email: string) => {
    const currentURL = window?.location?.href;
    const parsedUrl = new URL(currentURL);
    const origin = parsedUrl.origin;
    const sendResetLink = async () => {
      const user = await findUser(email);

      if (!user) {
        setStatus("User doesn't exists.");
        setIsLoading(false);
        return;
      }
      setStatus("success");
      setIsLoading(false);
      const resetLink = `${origin}/reset-password/${user?.id}`;
      const result = await sendMail(email, resetLink);
      return result;
    };
    try {
      sendResetLink().then((res) => {
        setIsLoading(false);
        console.log({ res });
      });
    } catch (error) {
      setIsLoading(false);
      console.error({ error });
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const { email } = Object.fromEntries(formData.entries());

    handleEmailSending(email as string);
  };

  return (
    <FormUi title={`Reset Password`} onSubmit={handleSubmit}>
      <p className="text-sm md:text-[0.9rem] pb-[1rem] text-start">
        Enter the email address associated with your account and we`ll send you
        a link to reset your password.
      </p>
      <Input isLoading={isLoading} type="email" name="email" required />

      <SubmitButton isLoading={isLoading}>Submit Email</SubmitButton>
      <Status status={status} />
    </FormUi>
  );
};

export default ResetComponent;
