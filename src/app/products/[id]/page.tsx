import AddProductToCartForm from "@/components/forms/AddProductToCartForm";
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
  console.log(singleProduct);
  return (
    <div className="  lg:px-[20%] py-[90px] lg:py-32">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ImageCarousel />
        <div className="px-4">
          <h1 className={` text-4xl mb-2 font-semibold text-red-700`}>
            {singleProduct?.name}
          </h1>
          <h3 className="mb-2 text-gray-500">Spodnie</h3>
          <p className="mb-8">{singleProduct?.description}</p>
          <h3 className="font-semibold text-xl mb-2">Cena</h3>
          <p className="mb-4">{singleProduct?.price! / 100} ZŁ</p>
          <AddProductToCartForm sizes={singleProduct?.sizes!} />
        </div>
      </div>
    </div>
  );
};

export default page;
