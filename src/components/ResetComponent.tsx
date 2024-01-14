"use client";

import sendMail from "@/actions/mailer/sendMail";
import Image from "next/image";
import { FormEvent, useCallback } from "react";

const ResetComponent = () => {

  const handleEmailSending = useCallback((email: string) => {
    const sendResetLink = async () => {
      const result = await sendMail(email);
      return result;
    };
    try {
      sendResetLink().then((res) => {
        console.log({ res });
      });
    } catch (error) {
      console.log({ error });
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const { email } = Object.fromEntries(formData.entries());
    console.log("Form data:", email);
    handleEmailSending(email as string);
  };

  return (
    <div
      className="min-h-screen max-w-full flex justify-center items-center "
      style={{ background: "url(/bg.jpg)", backgroundSize: "cover" }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-[40vw] max-w-[25rem] md:min-w-[40vw] min-w-[80vw] h-full rounded-xl backdrop-blur-lg border border-chestnut-100/70 pb-[3rem] px-[7rem]"
      >
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
        <p className="text-sm md:text-[0.9rem] pb-[1rem] text-start">
          Enter the email address associated with your account and we`ll send
          you a link to reset your password.
        </p>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            required
            className="border border-chestnut-300 rounded-lg px-3 py-2 outline-none focus:outline focus:outline-chestnut-400 focus:border-transparent bg-chestnut-50"
          />
        </div>

        <button
          className="rounded-md w-full p-2 bg-chestnut-500 transition-colors duration-500 hover:bg-chestnut-700 text-white"
          type="submit"
        >
          Submit Email
        </button>
      </form>
    </div>
  );
};

export default ResetComponent;
