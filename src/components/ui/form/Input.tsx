"use client";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isLoading?: boolean;
}
const Input: React.FC<InputProps> = ({ isLoading, name, ...props }) => {
  const [isVisible, setIsVisible] = useState(name !== "password");
  return (
    <div className="flex flex-col gap-1">
      <label className="capitalize text-chestnut-950/90 text-sm" htmlFor={name}>
        {name}:
      </label>
      <br />
      <div
        className={`flex justify-between items-center border border-chestnut-300 rounded-lg px-3 py-2  focus:outline focus:outline-chestnut-400 focus:border-transparent bg-white  ${
          isLoading ? "hover:cursor-not-allowed opacity-70" : ""
        } `}
      >
        {" "}
        <input
          type={isVisible ? "text" : "password"}
          id={name}
          disabled={isLoading}
          name={name}
          className="outline-none w-full"
          {...props}
        />
        {name === "password" && (
          <div
            onClick={() => {
              setIsVisible((prev) => !prev);
            }}
          >
            {isVisible ? <EyeIcon size={18} /> : <EyeOffIcon size={18} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
