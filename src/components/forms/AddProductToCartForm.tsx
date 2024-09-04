"use client";
import React, { useState } from "react";
import Count from "../sections/products/[id]/Count";
import Sizes from "../sections/products/[id]/Sizes";
import useCartStore, { IUseCartStore } from "@/state/cart";

interface IAddProductToCartForm {
  id: string;
  name: string;
  category: string;
  price: number;
  sizes: Array<object>;
}

const AddProductToCartForm: React.FC<IAddProductToCartForm> = ({
  id,
  name,
  category,
  price,
  sizes,
}) => {
  const { addToCart } = useCartStore<IUseCartStore>((state) => state);
  const [cartObject, setCartObject] = useState<ICartObject>({
    product: {
      id: id,
      name: name,
      category: category,
      price: price,
      size: null,
    },
    count: 1,
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addToCart(cartObject);
  };

  const setSize = (size: string | number) => {
    setCartObject((prev) => ({ ...prev, product: { ...prev.product, size } }));
  };

  const setCount = (count: number) => {
    setCartObject((prev) => ({ ...prev, count }));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3 className="font-semibold text-xl mb-2">Rozmiary</h3>
      <Sizes sizes={sizes} setSize={setSize} />
      <h3 className="font-semibold text-xl my-2">Ilość</h3>
      <Count setAmount={setCount} />
      <button
        className="border-2 px-4 py-2 mt-4 rounded-sm font-bold hover:border-red-700  duration-200 disabled:border-gray-700 disabled:text-gray-700"
        type="submit"
        disabled={cartObject.product.size === null ? true : false}>
        Dodaj do koszyka
      </button>
    </form>
  );
};

interface ICartObject {
  product: {
    id: string;
    name: string;
    category: string;
    price: number;
    size: null | string | number;
  };
  count: number;
}

export default AddProductToCartForm;
