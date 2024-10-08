import AddProductToCartForm from "@/components/forms/AddProductToCartForm";
import ProductCard from "@/components/general/cards/ProductCard";
import ImageCarousel from "@/components/general/carousel/ImageCarousel";
import prisma from "@/lib/db/db";
import React from "react";

async function getSingleProduct(id: string) {
  let product = await prisma.productObject.findFirst({
    where: { id },
    include: { sizes: true },
  });
  return product;
}

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const singleProduct = await getSingleProduct(id);
  return (
    <div className="lg:px-[20%] py-[90px] lg:py-32">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ImageCarousel />
        <div className="">
          <h1 className={` text-4xl mb-2 font-semibold text-red-700`}>
            {singleProduct?.name}
          </h1>
          <h3 className="mb-2 text-gray-500">Spodnie</h3>
          <h3 className="font-medium text-xl">Cena</h3>
          <p className="mb-4">{singleProduct?.price! / 100} ZŁ</p>
          <AddProductToCartForm
            id={singleProduct!.id}
            name={singleProduct!.name}
            category={singleProduct!.category}
            price={singleProduct!.price}
            sizes={singleProduct!.sizes}
          />
        </div>
      </div>
      <div>
        <h3 className="mt-6 ">Zobacz także</h3>
        <div className="grid grid-cols-4 gap-4"></div>
      </div>
    </div>
  );
};

export default page;
