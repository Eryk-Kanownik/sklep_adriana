import React, { useEffect, useState } from "react";
import SizeButton from "./SizeButton";

interface ISizes {
  sizes: Array<object>;
  setSize: (size: string | number) => void;
}

const Sizes: React.FC<ISizes> = ({ sizes, setSize }) => {
  const [chosenSize, setChosenSize] = useState<string | number | null>(null);

  useEffect(() => {
    setSize(chosenSize!);
  }, [chosenSize]);

  const onClickSizeButton = (size: string | number) => {
    setChosenSize(size);
  };

  return (
    <div className="flex gap-2">
      {sizes?.map(({ size, amount }: any, key: React.Key) => (
        <SizeButton
          key={key}
          size={size}
          amount={amount}
          onClick={onClickSizeButton}
          chosenSize={chosenSize}
        />
      ))}
    </div>
  );
};

export default Sizes;
