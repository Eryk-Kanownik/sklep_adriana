import React, { useEffect, useState } from "react";
import SizeButton from "./SizeButton";

interface ISizes {
  setSize: (size: string | number) => void;
}

const Sizes: React.FC<ISizes> = ({ setSize }) => {
  const [chosenSize, setChosenSize] = useState<string | number | null>(null);

  useEffect(() => {
    setSize(chosenSize!);
  }, [chosenSize]);

  const onClickSizeButton = (size: string | number) => {
    setChosenSize(size);
  };

  return (
    <div className="flex gap-2">
      <SizeButton
        size={28}
        count={30}
        onClick={onClickSizeButton}
        chosenSize={chosenSize}
      />
      <SizeButton
        size={29}
        count={30}
        onClick={onClickSizeButton}
        chosenSize={chosenSize}
      />
      <SizeButton
        size={30}
        count={0}
        onClick={onClickSizeButton}
        chosenSize={chosenSize}
      />
      <SizeButton
        size={31}
        count={5}
        onClick={onClickSizeButton}
        chosenSize={chosenSize}
      />
      <SizeButton
        size={32}
        count={30}
        onClick={onClickSizeButton}
        chosenSize={chosenSize}
      />
      <SizeButton
        size={33}
        count={0}
        onClick={onClickSizeButton}
        chosenSize={chosenSize}
      />
      <SizeButton
        size={34}
        count={5}
        onClick={onClickSizeButton}
        chosenSize={chosenSize}
      />
    </div>
  );
};

export default Sizes;
