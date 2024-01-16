import React from "react";
import SideNav from "./SideNav";
import getSecrets from "@/actions/secrets/getSecrets";

const DashLayout = async ({
  params,
  children,
}: {
  params: { dashboard: string };
  children: React.ReactNode;
}) => {
  const secrets = await getSecrets();
  return (
    <div className="pt-[4rem] flex h-full fixed w-full">
      <SideNav secrets={secrets as SecretType[]} />
      {children}
    </div>
  );
};

export default DashLayout;
