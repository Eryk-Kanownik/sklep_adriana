import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IProductCard {
  id: string;
  name: string;
  price: number;
  category: string;
}

const ProductCard: React.FC<IProductCard> = ({ id, name, price, category }) => {
  return (
    <Link href={`/products/${id}`} className=" rounded-sm ">
      <Image
        src="https://picsum.photos/200/300"
        width={200}
        height={200}
        alt="product photo"
        className="object-cover w-[100%] aspect-square"
      />
      <div className="px-4 pt-3 pb-4 bg-red-800">
        <h3 className=" font-semibold text-xl text-white  ">{name}</h3>
        <p className=" text-sm font-semibold text-gray-300">{category}</p>
        <p className=" text-sm font-bold">{(price / 100).toString()} ZŁ</p>
      </div>
    </Link>
  );
};

export default ProductCard;
