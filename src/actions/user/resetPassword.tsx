"use server";
import prisma from "@/configs/prisma";
import { hash } from "bcrypt";
import { revalidatePath } from "next/cache";

const resetPassword = async (id: string, password: string) => {
  try {
    console.log({ password });
    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        password: hashedPassword,
      },
    });
    console.log({ id, password, hashedPassword });
    revalidatePath("/");
    console.log({ user });
    return user;
  } catch (error) {
    console.error(`an error occured while updating user password: ${error}`);
  }
};

export default resetPassword;
