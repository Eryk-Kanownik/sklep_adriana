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
      <h1
        className={`${diploma.className} text-4xl mb-6 font-semibold text-red-700`}>
        Szukaj produktów
      </h1>
      <SearchForm />
      {search !== undefined && (
        <h3 className="mt-2  text-gray-400 text-sm">
          {products.length} Wyników dla:
        </h3>
      )}

      <div className="grid mt-2 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map(({ id, name, price }: any, key: React.Key) => (
          <ProductCard key={key} id={id} name={name} price={price} />
        ))}
      </div>
    </div>
  );
};

export default page;
