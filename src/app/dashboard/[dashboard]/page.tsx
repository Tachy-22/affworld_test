import SecretsBoard from "@/components/dashboard/SecretsBoard";
import React from "react";

const page = async () => {
  return (
    <div className="p-4  w-full flex flex-col gap-3 ">
      <h1 className="text-uppercase pt-[1rem] text-chestnut-900 font-semibold text-2xl">Secrets</h1>
      <SecretsBoard />
    </div>
  );
};

export default page;
