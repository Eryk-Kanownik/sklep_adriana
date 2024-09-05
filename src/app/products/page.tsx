import ProductCard from "@/components/general/cards/ProductCard";
import SearchForm from "@/components/sections/products/SearchForm";
import React from "react";
import { diploma } from "@/fonts/font-init";
import prisma from "@/lib/db/db";

async function getProducts(search: string) {
  if (search === undefined) {
    let products = await prisma.productObject.findMany({});
    return products;
  } else {
    let products = await prisma.productObject.findMany({
      where: { name: { contains: search, mode: "insensitive" } },
    });
    return products;
  }
}

const page = async ({
  searchParams: { search },
}: {
  searchParams: {
    search: string;
  };
}) => {
  const products = await getProducts(search);

  return (
    <div className="px-4 lg:px-[20%] py-[90px] lg:py-32">
      <h1 className={`${diploma.className} text-4xl mb-6  text-red-700`}>
        Szukaj produktów
      </h1>
      <SearchForm />
      {search !== undefined && (
        <h3 className="mt-2  text-gray-400 text-sm">
          {products.length} Wyników dla: {search}
        </h3>
      )}
      <div className=" mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {products.map(({ id, name, price, category }: any, key: React.Key) => (
          <ProductCard
            key={key}
            id={id}
            name={name}
            price={price}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
