"use client";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/lib/redux-toolkit/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateSecrets } from "@/lib/redux-toolkit/boardSlice";
import { Skeleton } from "@/components/ui/skeleton";
import returnInitials from "@/functions/returnInitials";

const SideNav = ({ secrets }: { secrets: SecretType[] }) => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const { data: session } = useSession();
  const { userData } = useAppSelector((state) => state.board);

  useEffect(() => {
    const fetchSecrets = async () => {
      dispatch(updateSecrets(secrets as SecretType[]));
    };
    userData && fetchSecrets();
  }, [dispatch, secrets, userData]);

  const links = [
    {
      text: "My Secrets ",
      path: "my-secrets",
    },
    {
      text: "All Secrets",
      path: "all-secrets",
    },
  ];

  return (
    <aside className="w-[30vw] lg:w-[20vw]  transition-all duration-700 bg-chestnut-950 h-full flex flex-col text-chestnut-50">
      <section className="border-b border-chestnut-100/30 w-full flex flex-col justify-center items-center gap-4 p-6">
        <Avatar className="h-[5rem] w-[5rem] aspect-square text-chestnut-950 text-3xl font-bold">
          <AvatarImage src="" />
          <AvatarFallback>
            {" "}
            {returnInitials(session?.user?.name as string)}
          </AvatarFallback>
        </Avatar>
        <h2 className=" text-xl uppercase">{session?.user?.name}</h2>
      </section>
      <section className="flex flex-col   h-full py-[2rem] gap-2">
        {userData &&
          links.map((link, index) => (
            <Link
              key={index}
              href={`/dashboard/${userData.id}/${link.path}`}
              className={`p-3 hover:bg-chestnut-400/40  ${
                pathname.split("/").at(-1) === link.path
                  ? "bg-chestnut-300/30"
                  : ""
              }`}
            >
              {link.text}
            </Link>
          ))}
        {!userData &&
          links.map((_, id) => (
            <div key={id} className="rounded-md w-full h-[3rem]" />
          ))}
      </section>
    </aside>
  );
};

export default SideNav;
