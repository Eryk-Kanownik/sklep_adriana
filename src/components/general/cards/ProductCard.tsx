import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IProductCard {
  id: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<IProductCard> = ({ id, name, price }) => {
  return (
    <Link href={`/products/${id}`}>
      <Image
        src="https://picsum.photos/200/300"
        width={200}
        height={200}
        alt="product photo"
        className="object-cover w-[100%] aspect-square"
      />
      <div className="mt-2">
        <h3 className=" font-semibold text-xl text-red-600">{name}</h3>
        <p className=" text-sm">{(price / 100).toString()} ZŁ</p>
      </div>
    </Link>
  );
};

export default ProductCard;
