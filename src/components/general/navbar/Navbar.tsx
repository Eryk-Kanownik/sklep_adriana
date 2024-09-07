"use client";
import React, { useEffect, useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarListItem from "./NavbarListItem";
import { FaBars } from "react-icons/fa";
import NavbarCart from "./NavbarCart";

const Navbar = () => {
  const [isMenuUnfolded, setIsMenuUnfolded] = useState(false);

  const onClickNavbarListItem = () => {
    setIsMenuUnfolded(false);
  };

  useEffect(() => {
    window.addEventListener("resize", (e: any) => {
      if (e.target.innerWidth > 768) {
        setIsMenuUnfolded(false);
      } else {
        setIsMenuUnfolded(true);
      }
    });
  }, []);

  return (
    <nav
      className={`text-red-500  ${
        isMenuUnfolded ? "bg-black" : ""
      } pl-4 py-4 pr-8 lg:p-4 flex flex-col md:flex-row md:justify-between md:items-center fixed top-0 left-0 right-0 z-20`}>
      <NavbarLogo />
      <ul
        className={`hidden overflow-hidden md:flex gap-3 md:gap-5 md:max-h-[600px] md:flex-row md:items-center md:mt-0 origin-top`}>
        <NavbarListItem
          path="/products"
          text="Przeglądaj produkty"
          onClick={onClickNavbarListItem}
        />
        <NavbarListItem
          path="/about-us"
          text="O nas"
          onClick={onClickNavbarListItem}
        />
        <NavbarListItem
          path="/admin/create-product"
          text="Utwórz produkt"
          onClick={onClickNavbarListItem}
        />
        <NavbarListItem
          path="/admin/orders"
          text="Zamówienia"
          onClick={onClickNavbarListItem}
        />
      </ul>
      <NavbarCart
        path="/cart"
        text="Koszyk"
        className="hidden md:block"
        onClick={onClickNavbarListItem}
      />
      <div className="md:hidden absolute top-5 right-5">
        <FaBars
          className={`cursor-pointer ${isMenuUnfolded ? "text-red-600" : ""}`}
          onClick={() => setIsMenuUnfolded((prev) => !prev)}
        />
      </div>
      <ul
        className={` flex flex-col gap-2 overflow-hidden ${
          isMenuUnfolded ? "max-h-[600px] mt-3" : "max-h-0 mt-0"
        } md:hidden`}>
        <NavbarListItem
          path="/products"
          text="Przeglądaj produkty"
          onClick={onClickNavbarListItem}
        />
        <NavbarListItem
          path="/about-us"
          text="O nas"
          onClick={onClickNavbarListItem}
        />
        <NavbarListItem
          path="/admin/create-product"
          text="Utwórz produkt"
          onClick={onClickNavbarListItem}
        />
        <NavbarListItem
          path="/admin/orders"
          text="Zamówienia"
          onClick={onClickNavbarListItem}
        />
        <NavbarCart
          path="/cart"
          text="Koszyk"
          onClick={onClickNavbarListItem}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
