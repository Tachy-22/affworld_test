import SignUpButton from "@/components/ui/boarding/SignUpButton";
import Image from "next/image";

export default async function Home() {
  return (
    <main
      style={{
        background: "url(/bg.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex min-h-screen flex-col pt-[4rem] items-center justify-center"
    >
      <div className="max-w-7xl h-full xl:px-0 px-[10%]  items-center lg:flex-row  flex-col flex justify-between mx-auto py-[2rem]">
        <section className="text-start flex-col flex w-full gap-[2rem]  h-full">
          <h1 className="text-5xl md:text-6xl font-bold">
            {" "}
            Send Secret Anonymous Messages Online
          </h1>
          <p className="">
            {" "}
            Anon is an interactive anonymous messaging app with a dare game.
            Create your Profile Link and Send it to all your contacts to check
            what do your friends think about you. With the help of Anon, you can
            send and recieve anonymous compliments easily for free!
          </p>
          <div className="">
            {" "}
            <SignUpButton />
          </div>
        </section>
        <section className="sm:flex hidden w-fit ">
          {" "}
          <div className="flex justify-center items-center ">
            {" "}
            <Image
              width={1050}
              height={1934}
              alt="phone"
              className=" w-[60%] h-[full] "
              src="/phone.png"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
