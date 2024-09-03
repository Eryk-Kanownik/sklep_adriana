import React from "react";

interface ICreateSizeCard {
  size: string | number;
  amount: number;
}

const CreateSizeCard: React.FC<ICreateSizeCard> = ({ size, amount }) => {
  return (
    <div className="grid grid-cols-[100px,100px,1fr] border-b-[1px] border-slate-700 p-2 items-center">
      <div>
        <p className="font-bold text-center">{size}</p>
      </div>
      <div>
        <p className="text-center">{amount}</p>
      </div>
      <div className="flex justify-end gap-2">
        <button className="border-2 rounded-sm py-1 px-2  hover:border-red-700  duration-200">
          Edytuj
        </button>
        <button className="border-2 rounded-sm py-1 px-2  hover:border-red-700  duration-200">
          Usuń
        </button>
      </div>
    </div>
  );
};

export default CreateSizeCard;
