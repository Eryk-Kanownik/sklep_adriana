import ProductCard from "@/components/general/cards/ProductCard";
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
      <h2 className={` text-2xl mb-12 font-bold text-red-600 text-center`}>
        Ostatnio dodane
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {latestProducts.map(
          ({ id, name, price, category }: any, key: React.Key) => (
            <ProductCard
              key={key}
              id={id}
              name={name}
              price={price}
              category={category}
            />
          )
        )}
      </div>
    </div>
  );
};

export default LatestProducts;
