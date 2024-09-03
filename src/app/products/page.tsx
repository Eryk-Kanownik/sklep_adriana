import ProductCard from "@/components/general/cards/ProductCard";
import SearchForm from "@/components/sections/products/SearchForm";
import React from "react";
import { diploma } from "@/fonts/font-init";

const page = () => {
  return (
    <div className="px-4 lg:px-[20%] py-[90px] lg:py-32">
      <h1
        className={`${diploma.className} text-4xl mb-6 font-semibold text-red-700`}>
        Szukaj produktów
      </h1>
      <SearchForm />
      <h3 className="mt-2  text-gray-400 text-sm">Wyniki dla:</h3>
      <div className="grid mt-2 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default page;
