import useCartStore, { IUseCartStore } from "@/state/cart";
import Link from "next/link";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

interface INavbarCart {
  path: string;
  text: string;
  onClick: () => void;
}

const NavbarCart: React.FC<INavbarCart> = ({ path, text, onClick }) => {
  const { cart } = useCartStore<IUseCartStore>((state) => state);
  return (
    <li onClick={onClick}>
      <Link
        href={path}
        className="flex items-center gap-2 bg-red-700 px-4 py-2 rounded-sm font-bold duration-200 hover:bg-red-500">
        <div className="flex gap-2 items-center">
          <p>{text}</p>
          <FaCartShopping />
          <span>
            {" "}
            {cart.length > 0
              ? cart
                  .map((item: any) => item.count)
                  .reduce((total, val) => total + val)
              : ""}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default NavbarCart;
