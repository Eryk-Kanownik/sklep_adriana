import AdminLoginForm from "@/components/forms/AdminLoginForm";
import { diploma } from "@/fonts/font-init";
import React from "react";

const page = () => {
  return (
    <div className="px-4 flex flex-col lg:px-[20%] py-[90px] lg:py-32 items-center">
      <h1
        className={`${diploma.className} text-4xl mb-6 font-semibold text-red-700`}>
        Logowanie Administratora
      </h1>
      <AdminLoginForm />
    </div>
  );
};

export default page;
