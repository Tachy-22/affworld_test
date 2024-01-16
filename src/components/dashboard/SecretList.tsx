import React from "react";

const SecretList = ({
  currentSecret,
  filteredSecrets,
  handleSecretSelection,
}: {
  currentSecret: SecretType;
  filteredSecrets: SecretType[];
  handleSecretSelection: (secret: SecretType) => void;
}) => {
  return (
    <div className="w-full overflow-hidden bg-white h-full flex flex-col flex-grow">
      {" "}
      <div className="border-t overflow-auto  h-full border-gray-300  flex flex-col  w-full ">
        {filteredSecrets?.map((secret) => (
          <div
            key={secret.id}
            onClick={() => handleSecretSelection(secret)}
            className={`${
              currentSecret?.id === secret?.id ? "bg-gray-600/10" : ""
            }  hover:bg-gray-600/20 px-6 py-4 cursor-pointer`}
          >
            <span className="flex justify-end text-sm">
              <p className="text-gray-500 mb-1 ">{secret.date}</p>
            </span>
            <h3 className="text-md font-semibold mb-1">{secret.body}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecretList;
