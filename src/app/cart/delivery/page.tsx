import DeliveryForm from "@/components/forms/DeliveryForm";
import { diploma } from "@/fonts/font-init";
import React from "react";

const page = () => {
  return (
    <div className="px-4 flex flex-col lg:px-[20%] py-[90px] lg:py-32">
      <h1
        className={`${diploma.className} text-4xl mb-2 font-semibold text-red-700`}>
        Dostawa i płatność
      </h1>
      <DeliveryForm />
    </div>
  );
};

export default page;
