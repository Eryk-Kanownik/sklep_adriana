import Link from "next/link";
import React from "react";

interface INavbarListItem {
  path: string;
  text: string;
  onClick: () => void;
}

const NavbarListItem: React.FC<INavbarListItem> = ({ path, text, onClick }) => {
  return (
    <li onClick={onClick} className="relative">
      <Link
        href={path}
        className="duration-200 hover:text-red-500 font-semibold text-sm ">
        {text}
      </Link>
    </li>
  );
};

export default NavbarListItem;
