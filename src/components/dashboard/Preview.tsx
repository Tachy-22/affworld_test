import React from "react";
import Image from "next/image";
import { SettingsIcon } from "lucide-react";
import SecretCard from "./SecretCard";

const Preview = ({ currentSecret }: { currentSecret: SecretType }) => {
  return (
    <div className=" bg-chestnut-50 h-fit flex-grow flex-col flex px-4 py-[1rem] md:border-0 border-t items-center justify-center  ">
      {currentSecret && (
        <div
          style={{
            backgroundImage: "url(/phone_mock.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex  flex-col w-[367px]   border rounded-[3.5rem] p-2 justify-top  py-[4rem] items-center bg-chestnut-300/30 h-[750px] md:scale-100 scale-[95%] "
        >
          <div className="border-t border-black w-full" />
          <div className="flex justify-between items-center  w-full px-4 ">
            <Image
              width={317}
              height={320}
              alt="logo"
              className=" w-[4rem] - "
              src="/anon_logo.png"
            />
            <SettingsIcon size={20} />
          </div>
          <div className=" py-4 w-[90%] ">
            <h2 className="text-start text-3xl font-bold w-full ">Secret</h2>
          </div>
          <SecretCard currentSecret={currentSecret} />
          <div className="py-4">
            <Image
              width={866}
              height={678}
              alt="logo"
              className=" w-full   "
              src="/Begin-chat.png"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Preview;
