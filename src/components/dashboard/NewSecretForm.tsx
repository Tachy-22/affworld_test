"use client";
import React, { FormEvent } from "react";
import { Button } from "../ui/button";
import { AlertDialogAction } from "../ui/alert-dialog";
import createSecret from "@/actions/secrets/createSecret";
import { useAppSelector } from "@/lib/redux-toolkit/hooks";
import { useDispatch } from "react-redux";
import { updateSecrets } from "@/lib/redux-toolkit/boardSlice";

const NewSecretForm = () => {
  const dispatch = useDispatch();

  const { userData, secrets } = useAppSelector((state) => state.board);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const { secret } = Object.fromEntries(formData.entries());
    const currentDate = new Date();
    const formattedDate = `${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}/${currentDate.getFullYear().toString().slice(-2)}`;

    console.log({ secret, date: formattedDate });

    const secretsUpdate = {
      authorId: userData.id,
      body: secret as string,
      date: formattedDate,
    };
    dispatch(
      updateSecrets([...(secrets as SecretType[]), secretsUpdate as SecretType])
    );

    try {
      const getResult = async () => {
        const result = await createSecret(
          userData.id,
          secret as string,
          formattedDate
        );

        if (result) {
          return
        } else {
           dispatch(
             updateSecrets([
               ...(secrets as SecretType[]),
               secretsUpdate as SecretType,
             ])
           );
        }

        console.log({ result });
      };
      getResult();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <textarea
        name="secret"
        className="w-full border p-3 rounded-xl outline-none focus:border-chestnut-600 text-black"
      />
      <AlertDialogAction className="bg-chestnut-800 w-full">
        <Button className="bg-chestnut-800 w-full">Post </Button>
      </AlertDialogAction>
    </form>
  );
};

export default NewSecretForm;
