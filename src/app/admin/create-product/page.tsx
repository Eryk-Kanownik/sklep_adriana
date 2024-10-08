import CreateProductForm from "@/components/forms/CreateProductForm";
import { diploma } from "@/fonts/font-init";
import React from "react";

const page = () => {
  return (
    <div className="px-4 lg:px-[20%] py-[90px] lg:py-32">
      <h1
        className={`${diploma.className} text-4xl mb-6 font-semibold text-red-700`}>
        Utwórz produkt
      </h1>
      <CreateProductForm />
    </div>
  );
};

export default page;
