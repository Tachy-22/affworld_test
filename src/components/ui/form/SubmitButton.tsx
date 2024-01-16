"use client";
import React from "react";

const SubmitButton = ({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: React.ReactNode;
}) => {
  return (
    <button
      disabled={isLoading}
      className={` rounded-md w-full p-2 my-4 bg-chestnut-600 transition-colors duration-500 hover:bg-chestnut-500 text-white ${
        isLoading ? "hover:cursor-wait opacity-50" : ""
      } `}
      type="submit"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
