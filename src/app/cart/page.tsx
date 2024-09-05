import CartObjects from "@/components/sections/cart/CartObjects";
import { diploma } from "@/fonts/font-init";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="px-4 flex flex-col lg:px-[20%] py-[90px] lg:py-32">
      <h1
        className={`${diploma.className} text-4xl mb-2 font-semibold text-red-700`}>
        Koszyk
      </h1>
      <CartObjects />
      <Link
        className="border-2 px-4 py-2 rounded-sm font-bold hover:border-red-700 duration-200 self-end"
        href="/cart/delivery">
        Dostawa i Płatność
      </Link>
    </div>
  );
};

export default page;
