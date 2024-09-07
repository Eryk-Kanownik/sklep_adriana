import React, { useState } from "react";
import Image from "next/image";
import Count from "@/components/sections/products/[id]/Count";

interface ICartItemCard {
  id: string;
  name: string;
  count: string;
  category: string;
  price: number;
  size: string;
}

const CartItemCard: React.FC<ICartItemCard> = ({
  id,
  name,
  count,
  category,
  price,
  size,
}) => {
  const [c, setC] = useState<number>(0);

  const setCount = (amount: number) => {
    setC(amount);
  };

  return (
    <div className="p-4 border-[1px] rounded-sm flex flex-col sm:flex-row gap-4">
      <Image
        src="https://picsum.photos/200/300"
        width={200}
        height={200}
        alt="product photo"
        className="object-cover aspect-square w-[100%] sm:w-[200px]"
      />
      <div>
        <h2 className="font-bold text-2xl text-red-700">{name}</h2>
        <p>
          <span className="font-bold">Cena:</span> {price / 100} ZŁ
        </p>
        <p>
          <span className="font-bold">Rozmiar:</span> {size}
        </p>
        <p className="font-bold mb-2">Ilość:</p>
        <Count setAmount={setCount} />
      </div>
      <div>
        <p>Usuń</p>
        <p>Zmień ilość</p>
      </div>
    </div>
  );
};

export default CartItemCard;
