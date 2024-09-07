"use client";
import CartItemCard from "@/components/general/cards/CartItemCard";
import useCartStore, { IUseCartStore } from "@/state/cart";
import { redirect } from "next/navigation";

import React from "react";

const CartObjects = () => {
  const { cart } = useCartStore<IUseCartStore>((state) => state);

  const onClickDeliveryAndPayment = () => {
    redirect("/cart/deliver");
  };

  return (
    <div className="flex flex-col gap-4 mb-6">
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
      <div className="flex justify-end">
        <button
          className="mt-4 border-2 px-4 py-2 rounded-sm font-bold hover:border-red-700  duration-200 disabled:border-gray-700 disabled:text-gray-700"
          onClick={onClickDeliveryAndPayment}
          disabled={cart.length === 0 ? true : false}>
          Dostawa i Płatność
        </button>
      </div>
    </div>
  );
};

export default CartObjects;
