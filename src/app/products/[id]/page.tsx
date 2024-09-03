import AddProductToCartForm from "@/components/forms/AddProductToCartForm";
import ImageCarousel from "@/components/general/carousel/ImageCarousel";
import React from "react";

const page = () => {
  return (
    <div className="  lg:px-[20%] py-[90px] lg:py-32">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ImageCarousel />
        <div className="px-4">
          <h1 className={` text-4xl mb-2 font-semibold text-red-700`}>
            Nazwa produktu
          </h1>
          <h3 className="mb-2 text-gray-500">Spodnie</h3>
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            est reiciendis qui aut numquam explicabo iste repellendus
            reprehenderit. Minus, commodi odio. Autem, ea! Vero, similique
            aliquid amet asperiores quaerat et.
          </p>
          <AddProductToCartForm />
        </div>
      </div>
    </div>
  );
};

export default page;
