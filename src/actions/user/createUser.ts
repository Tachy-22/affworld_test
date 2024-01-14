"use server";
import prisma from "@/configs/prisma";
import { hash } from "bcrypt";

const createUser = async (data: any) => {
  try {
    const { name, email, password } = data;
    const hashedPassword = await hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return user;
  } catch (error) {
    console.log({ error });
    return;
  }
};

export default createUser;
