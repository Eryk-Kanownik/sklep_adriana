import React, { useEffect, useState } from "react";

interface ICount {
  setAmount: (amount: number) => void;
}

const Count: React.FC<ICount> = ({ setAmount }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setAmount(count);
  }, [count]);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="flex rounded-sm overflow-hidden">
      <button
        className="w-[40px] h-[40px] border-2 font-bold hover:bg-red-700"
        type="button"
        onClick={decrease}>
        -
      </button>
      <div className="w-[40px] h-[40px] border-y-2 flex justify-center items-center font-bold">
        {count}
      </div>
      <button
        className="w-[40px] h-[40px] border-2 font-bold hover:bg-red-700"
        type="button"
        onClick={increase}>
        +
      </button>
    </div>
  );
};

export default Count;
