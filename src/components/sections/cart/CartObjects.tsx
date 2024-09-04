"use client";
import CartItemCard from "@/components/general/cards/CartItemCard";
import useCartStore, { IUseCartStore } from "@/state/cart";
import React from "react";

const CartObjects = () => {
  const { cart } = useCartStore<IUseCartStore>((state) => state);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="mb-2 text-xl font-semibold">
        Ilość przedmiotów:{" "}
        {cart.length > 0
          ? cart
              .map((item: any) => item.count)
              .reduce((total, val) => total + val)
          : 0}
      </h3>

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
