"use client";
import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarListItem from "./NavbarListItem";
import { FaBars } from "react-icons/fa";
import NavbarCart from "./NavbarCart";

const Navbar = () => {
  const [isMenuUnfolded, setIsMenuUnfolded] = useState(false);

  const onClickNavbarListItem = () => {
    setIsMenuUnfolded(false);
  };

  return (
    <nav
      className={`text-red-500 ${
        isMenuUnfolded ? "bg-black" : ""
      } pl-4 py-8 pr-8 lg:p-8 flex flex-col md:flex-row md:justify-between fixed top-0 left-0 right-0 z-20`}>
      <NavbarLogo />
      <ul
        className={`flex flex-col mt-6 gap-5 ${
          isMenuUnfolded ? "scale-y-100" : "scale-y-0"
        } md:scale-y-100 md:flex-row md:mt-0 duration-200 origin-top`}>
        <NavbarListItem
          path="/products"
          text="Produkty"
          onClick={onClickNavbarListItem}
        />
        <NavbarCart
          path="/cart"
          text="Koszyk"
          onClick={onClickNavbarListItem}
        />
        <NavbarListItem
          path="/about-us"
          text="O nas"
          onClick={onClickNavbarListItem}
        />{" "}
        <NavbarListItem
          path="/admin/create-product"
          text="Utwórz produkt"
          onClick={onClickNavbarListItem}
        />
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
