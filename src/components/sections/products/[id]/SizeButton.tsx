import React from "react";

interface ISizeButton {
  size: number | string;
  count: number;
}

const SizeButton: React.FC<ISizeButton> = ({ size, count }) => {
  return (
    <button
      className={`${
        count > 0 && count < 15 ? "border-red-500" : ""
      } p-2 aspect-square rounded-sm border-2 w-[40px] h-[40px] flex justify-center items-center hover:border-slate-400 cursor-pointer disabled:border-gray-700 disabled:text-gray-700`}
      disabled={count > 0 ? false : true}>
      {size}
    </button>
  );
};

export default SizeButton;
