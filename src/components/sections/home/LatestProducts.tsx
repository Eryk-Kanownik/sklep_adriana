import ProductCard from "@/components/general/cards/ProductCard";
import { diploma } from "@/fonts/font-init";
import React from "react";

const LatestProducts = () => {
  return (
    <div className="px-4 md:px-[20%] py-10">
      <h2 className={`${diploma.className} text-4xl mb-8 text-red-600`}>
        Ostatnio dodane
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default LatestProducts;
