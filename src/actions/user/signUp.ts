"use server";
import bcrypt from "bcrypt";
import findUser from "./findUser";
import createUser from "./createUser";

export async function signUp(cred: any) {
  const { name, email, password } = cred;

  if (!name || !email || !password) {
    return;
  }

  const exist = await findUser(email);

  if (exist) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const data = { name, email, hashedPassword };
  const user = await createUser(data);

  return user;
}
