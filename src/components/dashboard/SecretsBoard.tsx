"use client";
import { useAppSelector } from "@/configs/redux-toolkit/hooks";
import React from "react";
import SecretCard from "./SecretCard";
import { Skeleton } from "../ui/skeleton";

const SecretsBoard = () => {
  const { secrets } = useAppSelector((state) => state.board);
  const dummyArray = Array.from({ length: 6 }, (_, i) => i);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full overflow-auto ">
      {secrets?.map((secret, id) => (
        <SecretCard key={id} currentSecret={secret} />
      ))}
      {!secrets && (
        <>
          {dummyArray.map((params, id) => {
            return (
              <Skeleton
                className="flex flex-col min-w-[20rem] gap-[2rem]  shadow-lg   w-[90%]   p-[2rem] rounded-xl mx-auto"
                key={id}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default SecretsBoard;
