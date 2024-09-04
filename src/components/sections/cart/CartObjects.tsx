"use client";
import CartItemCard from "@/components/general/cards/CartItemCard";
import useCartStore, { IUseCartStore } from "@/state/cart";
import React from "react";

const CartObjects = () => {
  const { cart } = useCartStore<IUseCartStore>((state) => state);
  return (
    <div className="flex flex-col gap-4">
      {cart?.map(
        (
          { product: { id, name, category, price, size }, count }: any,
          key: React.Key
        ) => (
          <CartItemCard
            key={key}
            id={id}
            name={name}
            count={count}
            category={category}
            price={price}
            size={size}
          />
        )
      )}
    </div>
  );
};

export default CartObjects;
