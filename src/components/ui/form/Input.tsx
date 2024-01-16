"use client";

import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isLoading?: boolean;
}
const Input: React.FC<InputProps> = ({ isLoading, name, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="capitalize text-chestnut-950/90 text-sm" htmlFor={name}>
        {name}:
      </label>
      <br />
      <input
        id={name}
        disabled={isLoading}
        name={name}
        className={` border border-chestnut-300 rounded-lg px-3 py-2 outline-none focus:outline focus:outline-chestnut-400 focus:border-transparent bg-white  ${
          isLoading ? "hover:cursor-not-allowed opacity-70" : ""
        } `}
        {...props}
      />
    </div>
  );
};

export default Input;
