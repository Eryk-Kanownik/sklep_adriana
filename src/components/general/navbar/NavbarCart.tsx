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
      <Link href={path} className=" flex items-center gap-1">
        <p className="duration-200 hover:text-red-500 ">
          {text} {cart.length}
        </p>
      </Link>
    </li>
  );
};

export default NavbarCart;
