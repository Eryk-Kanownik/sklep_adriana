import CartItemCard from "@/components/general/cards/CartItemCard";
import React from "react";

const CartObjects = () => {
  return (
    <div className="flex flex-col gap-4">
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
    </div>
  );
};

export default CartObjects;
