import React from "react";

interface ISizeButton {
  size: number | string;
  count: number;
  chosenSize: string | number | null;
  onClick: (size: string | number) => void;
}

const SizeButton: React.FC<ISizeButton> = ({
  size,
  count,
  chosenSize,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick(size)}
      className={`${count > 0 && count < 15 ? "border-gray-500" : ""} 
        ${
          chosenSize === size
            ? "bg-red-700 border-red-700 hover:border-red-700"
            : "hover:border-slate-400"
        }
      p-2 aspect-square rounded-sm border-2 w-[40px] h-[40px] flex justify-center items-center  cursor-pointer disabled:border-gray-700 disabled:text-gray-700`}
      disabled={count > 0 ? false : true}
      type="button">
      {size}
    </button>
  );
};

export default SizeButton;
