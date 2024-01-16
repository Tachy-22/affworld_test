import ResetPasswordForm from "@/components/user/ResetPasswordForm";
import React from "react";

const page = ({ params }: { params: { userId: string } }) => {

  return <ResetPasswordForm userId={params.userId} />;
};

export default page;
