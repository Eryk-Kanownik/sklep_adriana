import ProductCard from "@/components/general/cards/ProductCard";
import SearchForm from "@/components/sections/products/SearchForm";
import React from "react";

const page = () => {
  return (
    <div className=" lg:px-[20%] py-[90px] lg:py-32">
      <h1 className="text-4xl mb-2 font-semibold text-red-500">
        Szukaj produktów
      </h1>
      <SearchForm />
      <div className="grid grid-cols-3 gap-4">
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
