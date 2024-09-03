import React from "react";
import Image from "next/image";
const CartItemCard = () => {
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
        <h2>Nazwa produktu</h2>
        <p>Ilość</p>
        <p>Cena</p>
      </div>
    </div>
  );
};

export default CartItemCard;
