import React from "react";

const Count = () => {
  return (
    <div className="flex rounded-sm overflow-hidden">
      <button className="w-[40px] h-[40px] border-2 font-bold">-</button>
      <div className="w-[40px] h-[40px] border-y-2 flex justify-center items-center font-bold">
        0
      </div>
      <button className="w-[40px] h-[40px] border-2 font-bold">+</button>
    </div>
  );
};

export default Count;
