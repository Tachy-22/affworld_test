"use client";
import React, { useCallback, useState } from "react";
import Preview from "./Preview";
import SecretList from "./SecretList";
import NewSecretButton from "./NewSecretButton";
import { useAppSelector } from "@/lib/redux-toolkit/hooks";

const WorkSpace = ({
  params,
}: {
  params: {
    dashboard: string;
    category: string;
  };
}) => {
  const { secrets } = useAppSelector((state) => state.board);
  const { dashboard, category } = params;
  const [searchTerm, setSearchTerm] = useState("");

  const myCondition = category === "my-secrets";

  const filteredSecrets = secrets?.filter((secret) => {
    if (myCondition)
      return (
        secret?.authorId?.toLowerCase() === dashboard.toLowerCase() &&
        secret?.body?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return secret?.body?.toLowerCase().includes(searchTerm.toLowerCase());
  }) as SecretType[];

  const [currentSecret, setCurrentSecret] = useState<SecretType>(
    filteredSecrets && filteredSecrets[0]
  );

  const handleNoteSelection = useCallback((note: SecretType) => {
    setCurrentSecret(note);
  }, []);

  return (
    <div className=" h-full w-full overflow-auto flex md:flex-row flex-col  text-black border-r bg-white/90  ">
      <div className="min-h-[60vh] md:h-full   md:w-[35rem] flex flex-col gap-4 border-r  border-gray-300 pt-3 ">
        <h2 className="text-2xl font-semibold mb-3 px-4 pt-[1rem] md:px-6 capitalize flex justify-between items-center">
          {category.split("-").join(" ")}
          <p className="text-sm bg-chestnut-500 text-white flex items-center justify-center p-2 h-[1.5rem] w-[1.5rem] rounded-full ">
            {" "}
            {filteredSecrets?.length}{" "}
          </p>
        </h2>

        <div className=" px-6 flex flex-col justify-between mb-4 gap-4">
          <input
            type="text"
            name="searchTerm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search secrets..."
            className="border rounded-sm py-1 px-3 focus:outline-none focus:border-blue-500"
          />

          <NewSecretButton />
        </div>

        <SecretList
          filteredSecrets={filteredSecrets}
          currentSecret={currentSecret}
          handleSecretSelection={handleNoteSelection}
        />
      </div>
      <Preview currentSecret={currentSecret} />
    </div>
  );
};

export default WorkSpace;
