import useCartStore, { IUseCartStore } from "@/state/cart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

interface INavbarCart {
  className?: string;
  path: string;
  text: string;
  onClick: () => void;
}

const NavbarCart: React.FC<INavbarCart> = ({
  path,
  text,
  className,
  onClick,
}) => {
  const { cart } = useCartStore<IUseCartStore>((state) => state);
  return (
    <Link
      onClick={onClick}
      href={path}
      className={`flex gap-2 bg-red-700 px-3 py-2 rounded-sm font-bold duration-200 hover:bg-red-500 ${className}`}>
      <div className="flex items-center text-sm ">
        <div className="flex gap-1 items-center">
          <p>{text}</p>
          <ShoppingCart size={15} strokeWidth={3} />
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
  );
};

export default NavbarCart;
