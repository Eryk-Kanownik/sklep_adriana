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
        className="object-cover w-[100%] aspect-[2/3]"
      />
      <div className="pt-3">
        <p className="text-[12px] text-gray-300 font-light mt-1">{category}</p>
        <h3 className=" font-bold mb-2 text-sm text-red-700">{name}</h3>
        <p className="text-sm font-bold">{(price / 100).toFixed(2)} zł</p>
      </div>
    </Link>
  );
};

export default ProductCard;
