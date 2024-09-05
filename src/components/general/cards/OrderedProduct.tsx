"use client";
import React, { useState } from "react";
import Image from "next/image";
interface IOrderedProduct {
  id: string;
  name: string;
  amount: number;
  size: string;
}

const OrderedProduct: React.FC<IOrderedProduct> = ({
  id,
  name,
  amount,
  size,
}) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div
      className={`relative border-[1px] border-gray-600 duration-200 p-2 flex items-center gap-2 ${
        isDone && "bg-green-600"
      }`}>
      <Image
        src="https://picsum.photos/200/300"
        width={200}
        height={200}
        alt="product photo"
        className="object-cover aspect-square w-[70px] h-[70px]"
      />
      <div>
        <h2 className="text-md font-bold">{name}</h2>
        <div>
          <p className="text-sm">
            <span className="font-semibold ">Ilość:</span> {amount}
          </p>
          <p className=" text-sm">
            <span className="font-semibold">Rozmiar:</span> {size}
          </p>
        </div>
      </div>
      <input
        type="checkbox"
        className="absolute top-2 right-2"
        onClick={(e: any) => {
          setIsDone(e.target.checked);
        }}
      />
    </div>
  );
};

export default OrderedProduct;
