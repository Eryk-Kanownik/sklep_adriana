import ProductCard from "@/components/general/cards/ProductCard";
import { diploma } from "@/fonts/font-init";
import prisma from "@/lib/db/db";
import React from "react";

async function getLatestProducts() {
  let products = await prisma.productObject.findMany();
  return products;
}

const LatestProducts = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div className="px-4 md:px-[20%] py-10">
      <h2 className={`${diploma.className} text-4xl mb-8 text-red-600`}>
        Ostatnio dodane
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {latestProducts.map(({ id, name, price }: any, key: React.Key) => (
          <ProductCard key={key} id={id} name={name} price={price} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
