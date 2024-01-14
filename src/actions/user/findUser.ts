"use server"
import prisma from "@/configs/prisma";

const findUser = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user;
};

export default findUser;
