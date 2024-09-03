import CartObjects from "@/components/sections/cart/CartObjects";
import { diploma } from "@/fonts/font-init";
import React from "react";

const page = () => {
  return (
    <div className="px-4 lg:px-[20%] py-[90px] lg:py-32">
      <h1
        className={`${diploma.className} text-4xl mb-6 font-semibold text-red-700`}>
        Koszyk
      </h1>
      <CartObjects />
    </div>
  );
};

export default page;
