import { create } from "zustand";

export interface IUseCartStore {
  cart: object[];
  addToCart: (cartObject: object) => void;
}

const useCartStore = create<IUseCartStore>((set) => ({
  cart: [],
  addToCart: (cartObject: object) =>
    set((state: any) => ({ cart: [...state.cart, cartObject] })),
}));

export default useCartStore;
