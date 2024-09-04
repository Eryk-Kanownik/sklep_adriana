import React from "react";
import Image from "next/image";
import { diploma } from "@/fonts/font-init";
import Link from "next/link";

import heroImage from "../../../../public/hero-background.jpg";

const HeroSection = () => {
  return (
    <div className="h-[100vh] width-[100vw] flex justify-center items-center overflow-hidden">
      <div className="px-4 md:px-[20%] grid grid-cols-1 gap-4">
        <div className="order-last md:order-first flex flex-col items-center">
          <h1
            className={`${diploma.className} font-bold text-[50px] text-red-600 `}>
            Sklep Adriana
          </h1>
          <p className="mb-4  text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            deserunt? Odit repudiandae reiciendis incidunt voluptate delectus
            alias est veniam cumque aperiam quaerat saepe, voluptatum minima.
            Temporibus quaerat laborum unde harum?
          </p>
          <div className="flex gap-2 justify-center md:justify-normal">
            <button
              className={` ${diploma.className} border-2 border-red-600 rounded-sm py-2 px-4 bg-red-600`}>
              Promocje
            </button>
            <Link
              href="/products"
              className={` ${diploma.className} border-2 border-red-600 rounded-sm py-2 px-4 `}>
              Produkty
            </Link>
          </div>
          <Image
            src={heroImage}
            width={1000}
            height={1000}
            alt="product photo"
            className="object-cover h-[100%] w-[100%] rounded-md absolute top-0 left-0 right-0 bottom-0 -z-10 blur-md"
          />
        </div>
        {/*
          <div>
            <Image
              src="https://picsum.photos/200/150"
              width={200}
              height={200}
              alt="product photo"
              className="object-cover w-[100%] rounded-md"
            />
          </div>
          */}
      </div>
    </div>
  );
};

export default HeroSection;
