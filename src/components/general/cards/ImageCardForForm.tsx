import React from "react";
import Image from "next/image";
import { diploma } from "@/fonts/font-init";
interface IImageCardForForm {
  order: number;
}

const ImageCardForForm: React.FC<IImageCardForForm> = ({ order }) => {
  return (
    <div className="relative">
      <Image
        src="https://picsum.photos/200/300"
        width={200}
        height={200}
        alt="product photo"
        className="object-cover aspect-square w-[100%] rounded-sm"
      />
      <div
        className={`${diploma.className} absolute top-1 left-1 w-[30px] h-[30px] rounded-md bg-red-700 flex justify-center items-center`}>
        {order}
      </div>
      <div className="absolute  flex justify-center items-center bottom-1 right-1 font-bold py-1 px-2 cursor-pointer rounded-sm bg-red-700 hover:bg-red-500 ">
        Usuń
      </div>
    </div>
  );
};

export default ImageCardForForm;
