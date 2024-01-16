"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React, { useEffect, useState } from "react";
import NewSecretForm from "./NewSecretForm";
import { validateSecretCreation } from "@/actions/secrets/createSecret";
import { useAppSelector } from "@/lib/redux-toolkit/hooks";

const NewSecretButton = () => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const { userData } = useAppSelector((state) => state.board);

  useEffect(() => {
    try {
      const checkValidity = async () => {
        const validity =
          userData && (await validateSecretCreation(userData.id));
        setIsValid(validity);
      };
      checkValidity();
    } catch (error) {
      console.error(error);
    }
  }, [userData]);

  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-3 rounded-md focus:outline-none">
        {" "}
        + New Secret
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="w-full flex justify-between">
            Ready to post a secret?
            <AlertDialogCancel className="rounded-full -translate-y-4 translate-x-4">
              x
            </AlertDialogCancel>
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isValid ? (
              <NewSecretForm />
            ) : (
              <p className="text-red-400">Sorry, you have reached your one secret limit !</p>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter></AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NewSecretButton;
