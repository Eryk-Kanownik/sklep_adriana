import React from "react";

const Page = () => {
  return (
    <div className="mt-20">
      <h1 className={` text-4xl mb-2 font-semibold text-red-700 text-center`}>
        Sukces!
      </h1>
      <p className={`  mb-2 font-semibold text-red-700 text-center`}>
        Płatność zakończona! Za 5 sekund zostaniesz przekierowany do strony
        głównej...
      </p>
    </div>
  );
};

export default Page;
