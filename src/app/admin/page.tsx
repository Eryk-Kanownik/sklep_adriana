import { diploma } from "@/fonts/font-init";
import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogOutButton from "@/components/general/auth/LogOutButton";

const page = async () => {
  let session = await getServerSession();
  if (session === null) {
    redirect("/");
  }

  return (
    <div className="px-4 flex flex-col lg:px-[20%] py-[90px] lg:py-32">
      <h1
        className={`${diploma.className} text-4xl mb-2 font-semibold text-red-700`}>
        Panel administratora
      </h1>
      <div className="flex flex-col">
        <Link href="/admin/create-product">Utwórz produkt</Link>
        <Link href="/admin/orders">Przeglądaj zamówienia</Link>
        <LogOutButton />
      </div>
    </div>
  );
};

export default page;
