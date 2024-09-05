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
        className="flex  gap-2 bg-red-700 px-4 py-2 rounded-sm font-bold duration-200 hover:bg-red-500">
        <div className="flex items-center text-sm ">
          <div className="flex gap-1 items-center">
            <p>{text}</p>
            <FaCartShopping />

            {cart.length > 0 && (
              <span>
                {"("}
                {cart
                  .map((item: any) => item.count)
                  .reduce((total, val) => total + val)}
                {")"}
              </span>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default NavbarCart;
