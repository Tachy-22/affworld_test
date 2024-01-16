"use server";
import prisma from "@/configs/prisma";
import { revalidatePath } from "next/cache";

const findUser = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    revalidatePath("/");
    return user;
  } catch (error) {
    console.error(`an error occured while searching for user: ${error}`);
  }
};

export default findUser;
