import React from "react";
import Image from "next/image";

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
  return (
    <div className="p-4 border-2 rounded-sm flex gap-2">
      <Image
        src="https://picsum.photos/200/300"
        width={200}
        height={200}
        alt="product photo"
        className="object-cover aspect-square"
      />
      <div>
        <h2 className="font-bold text-2xl text-red-700">{name}</h2>
        <p>Ilość: {count}</p>
        <p>Cena: {price}</p>
        <p>Rozmiar: {size}</p>
      </div>
    </div>
  );
};

export default CartItemCard;
