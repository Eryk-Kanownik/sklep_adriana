"use client";
import React, { useEffect, useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarListItem from "./NavbarListItem";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuUnfolded, setIsMenuUnfolded] = useState(false);

  return (
    <nav
      className={`text-red-500 ${
        isMenuUnfolded ? "bg-gray-950" : ""
      } p-8 flex flex-col md:flex-row md:justify-between fixed top-0 left-0 right-0`}>
      <NavbarLogo />
      <ul
        className={`flex flex-col mt-6 gap-5 ${
          isMenuUnfolded ? "scale-y-100" : "scale-y-0"
        } md:scale-y-100 md:flex-row md:mt-0 duration-200 origin-top`}>
        <NavbarListItem path="/" text="Produkty" />
        <NavbarListItem path="/" text="Koszyk" />
        <NavbarListItem path="/" text="O nas" />
      </ul>
      <div className="md:hidden absolute top-8 right-8">
        <FaBars
          className={`cursor-pointer ${isMenuUnfolded ? "text-red-600" : ""}`}
          onClick={() => setIsMenuUnfolded((prev) => !prev)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
