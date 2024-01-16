"use server";

import prisma from "@/configs/prisma";
import { revalidatePath } from "next/cache";

const getSecrets = async () => {
  try {
    const secrets = await prisma.secret.findMany();
    revalidatePath("secrets");
    return secrets;
  } catch (error) {
    console.error(`an error occured while searching for secrets: ${error}`);
  }
};

export default getSecrets;
