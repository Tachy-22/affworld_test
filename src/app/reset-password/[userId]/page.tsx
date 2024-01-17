import ResetPasswordForm from "@/components/forms/ResetPasswordForm";
import React from "react";

const page = ({ params }: { params: { userId: string } }) => {
  return <ResetPasswordForm userId={params.userId} />;
};

export default page;
