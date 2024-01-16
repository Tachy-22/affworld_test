"use server";

import prisma from "@/configs/prisma";
import { revalidatePath } from "next/cache";

const createSecret = async (authorId: string, body: string, date: string) => {
  try {
    const secrets = await prisma.secret.create({
      data: {
        authorId: authorId,
        body: body,
        date: date,
      },
    });
    revalidatePath("secrets");
    return secrets;
  } catch (error) {
    console.error(`an error occured while searching for secrets: ${error}`);
  }
};

export default createSecret;

export const validateSecretCreation = async (authorId: string) => {
  try {
    const secrets = (await prisma.user.findUnique({
      where: {
        id: authorId,
      },
      include: {
        secrets: true,
      },
    })) as unknown as SecretType[];

    if (secrets?.length > 1) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.error(`an error occured while searching for secrets: ${error}`);
  }
};
