import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <Link href="/products/1">
      <Image
        src="https://picsum.photos/200/300"
        width={200}
        height={200}
        alt="product photo"
        className="object-cover w-[100%] aspect-square rounded-md"
      />
      <div className="mt-2">
        <h3 className=" font-semibold text-red-600">Bluza</h3>
        <p className=" text-sm">60.99ZŁ</p>
      </div>
    </Link>
  );
};

export default ProductCard;
