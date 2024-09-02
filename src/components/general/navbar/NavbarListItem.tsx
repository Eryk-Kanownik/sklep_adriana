import Link from "next/link";
import React from "react";

interface INavbarListItem {
  path: string;
  text: string;
}

const NavbarListItem: React.FC<INavbarListItem> = ({ path, text }) => {
  return (
    <li>
      <Link href={path} className="duration-200 hover:text-red-500 ">
        {text}
      </Link>
    </li>
  );
};

export default NavbarListItem;
