import React from "react";
import Image from "next/image";
import { diploma } from "@/fonts/font-init";
interface IImageCardForForm {
  src: string;
  order: number;
  deleteImage: any;
}

const ImageCardForForm: React.FC<IImageCardForForm> = ({
  src,
  order,
  deleteImage,
}) => {
  return (
    <div className="relative">
      <Image
        src={src}
        width={200}
        height={200}
        alt="product photo"
        className="object-cover aspect-square w-[100%] rounded-sm"
      />

      <button
        onClick={() => deleteImage(order)}
        type="button"
        className="absolute  flex justify-center items-center bottom-1 right-1 font-bold py-1 px-2 cursor-pointer rounded-sm bg-red-700 hover:bg-red-500 ">
        Usuń
      </button>
    </div>
  );
};

export default ImageCardForForm;
