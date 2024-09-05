"use client";
import React, { useState } from "react";

interface ICreateSizeCard {
  size: string;
  amount: number;
  updateSizes: (size: string, amount: number) => void;
  deleteSize: (size: string) => void;
}

const CreateSizeCard: React.FC<ICreateSizeCard> = ({
  size,
  amount,
  deleteSize,
  updateSizes,
}) => {
  const [isEditable, setIsEditable] = useState(false);
  const [newAmount, setNewAmount] = useState<any>(amount);

  const onClickEdit = () => {
    setIsEditable(true);
  };

  const onClickSave = () => {
    let a = parseInt(newAmount);
    updateSizes(size, a);
    setIsEditable(false);
  };

  return (
    <div className="grid grid-cols-[100px,100px,1fr] border-b-[1px] border-slate-700 p-2 items-center">
      <div>
        <p className="font-medium text-sm text-center">{size}</p>
      </div>
      <div className="flex justify-center">
        {isEditable ? (
          <input
            type="number"
            defaultValue={amount}
            className="p-1 rounded-sm bg-black text-center border-2 w-16"
            onChange={(e) => setNewAmount(e.target.value)}
          />
        ) : (
          <p className="text-center text-sm">{amount}</p>
        )}
      </div>
      <div className="flex justify-end gap-2">
        {isEditable ? (
          <button
            onClick={onClickSave}
            className="border-[1px] rounded-sm py-1 px-2  hover:border-red-700  duration-200"
            type="button">
            Zapisz
          </button>
        ) : (
          <button
            onClick={onClickEdit}
            className="border-[1px] rounded-sm py-1 px-2  hover:border-red-700  duration-200"
            type="button">
            Edytuj
          </button>
        )}

        <button
          onClick={() => deleteSize(size)}
          className="border-[1px] rounded-sm py-1 px-2  hover:border-red-700  duration-200"
          type="button">
          Usuń
        </button>
      </div>
    </div>
  );
};

export default CreateSizeCard;
