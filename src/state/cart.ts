import { create } from "zustand";

import _ from "lodash";

export interface IUseCartStore {
  cart: object[];
  addToCart: (cartObject: object) => void;
}

const useCartStore = create<IUseCartStore>((set) => ({
  cart: [],
  addToCart: (cartObject: any) =>
    set((state: any) => {
      let template = {
        id: cartObject.product.id,
        size: cartObject.product.size,
      };
      let isInCart = false;
      let itemIndex = null;
      state.cart!.map((item: any, index: number) => {
        let obj = { id: item.product.id, size: item.product.size };
        let isEq = _.isEqual(obj, template);
        if (isEq) {
          isInCart = true;
          itemIndex = index;
        }
      });
      if (isInCart) {
        let newArr = state.cart;
        newArr[itemIndex!].count = newArr[itemIndex!].count + cartObject.count;
        return { cart: newArr };
      } else {
        return { cart: [...state.cart, cartObject] };
      }
    }),
}));

export default useCartStore;
