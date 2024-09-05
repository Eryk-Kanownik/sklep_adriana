"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { diploma } from "@/fonts/font-init";

const ImageCarousel = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [images, setImages] = useState<Array<string>>([
    "https://picsum.photos/1000/1500",
    "https://picsum.photos/300/300",
    "https://picsum.photos/200/300",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCarouselWidth, setCurrentCarouselWidth] = useState(0);
  const [transformValue, setTransformValue] = useState(0);

  useEffect(() => {
    let width = wrapperRef!.current!.clientWidth;
    setCurrentCarouselWidth(width);
  }, []);

  useEffect(() => {
    setTransformValue(currentCarouselWidth * currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (wrapperRef.current) {
        var width = wrapperRef!.current!.clientWidth;
      }
      setCurrentCarouselWidth(width!);
      setTransformValue(width! * currentIndex);
    });
  }, []);

  const prevImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex((prev) => images.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const nextImage = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="w-[100%] h-[100%] select-none relative overflow-hidden aspect-square ">
      <div className="absolute left-4 top-[47%] z-10" onClick={prevImage}>
        <FaArrowAltCircleLeft
          size={30}
          className="text-red-500 duration-200  hover:text-red-300 cursor-pointer"
        />
      </div>
      <div
        className="w-[100%] h-[100%] flex flex-row bg-black duration-200"
        ref={wrapperRef}
        style={{ transform: `translateX(-${transformValue}px)` }}>
        {images.map((img, key) => (
          <div
            key={key}
            className="min-w-[100%] min-h-[100%] bg-red-700 flex justify-center">
            <Image
              className="h-[100%] w-auto"
              width={400}
              height={400}
              alt="product image"
              src={img}
            />
          </div>
        ))}
      </div>
      <div className="absolute right-4 top-[47%] z-10" onClick={nextImage}>
        <FaArrowAltCircleRight
          size={30}
          className="text-red-500 duration-200  hover:text-red-300 cursor-pointer"
        />
      </div>
      <div
        className={`text-white absolute right-4 bottom-4 ${diploma.className}`}>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageCarousel;
