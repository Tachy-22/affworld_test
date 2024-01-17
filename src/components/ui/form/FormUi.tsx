"use client";
import Image from "next/image";
import React, { FormEvent } from "react";

const FormUi = ({
  children,
  title,
  onSubmit,
}: {
  children: React.ReactNode;
  title: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}) => {
  return (
    <div
      className="min-h-[100dvh] max-w-full flex justify-center items-center px-6 lg:px-0 md:pt-0 pt-[4rem]"
      style={{
        background: "url(/bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      <div className="flex flex-col w-[90vw] sm:w-[60vw] lg:w-[50vw] max-w-[50rem] gap-3 h-full  rounded-xl backdrop-blur-lg border border-chestnut-100/70 pb-[3rem] px-4 sm:px-[3rem] md:px-[7rem]">
        <div className="flex justify-center items-center ">
          <Image
            width={317}
            height={320}
            alt="logo"
            className=" w-[8rem] -mb-[2rem] md:-mb-[1rem] "
            src="/anon_logo.png"
          />
        </div>
        <h1 className="text-xl font-bold mb-4">{title}</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          {children}
        </form>
      </div>
    </div>
  );
};

export default FormUi;
