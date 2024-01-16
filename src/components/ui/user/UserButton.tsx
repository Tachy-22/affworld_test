"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useSession } from "next-auth/react";
import React from "react";
import LogOutButton from "../boarding/LogOutButton";
import returnInitials from "@/functions/returnInitials";

const UserButton = () => {
  const { data: session } = useSession();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full">
          <Avatar className="text-chestnut-950  font-bold">
            <AvatarImage />
            <AvatarFallback>
              {returnInitials(session?.user?.name as string)}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="capitalize">
            {session?.user?.name}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{session?.user?.email}</DropdownMenuItem>
          <DropdownMenuItem>
            <LogOutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
