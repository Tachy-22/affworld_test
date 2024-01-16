import React from "react";

const SecretCard = ({ currentSecret }: { currentSecret?: SecretType }) => {
  return (
    <div
     // style={{ background: "url(/secretbg.jpg)", backgroundSize: "cover" }}
      className="flex flex-col min-w-[20rem] gap-[2rem] bg-gradient-to-br shadow-lg from-chestnut-800  to-chestnut-400 w-[90%]   p-[2rem] rounded-xl mx-auto"
    >
      <p className="w-full h-fit text-lg  text-chestnut-100  text-center rounded-md py-2">
        {currentSecret?.body}
      </p>
      <small className="text-chestnut-200 text-end w-full">
        {currentSecret?.date}
      </small>
    </div>
  );
};

export default SecretCard;
