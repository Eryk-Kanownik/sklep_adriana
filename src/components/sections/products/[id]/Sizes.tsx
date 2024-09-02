import React from "react";
import SizeButton from "./SizeButton";

const Sizes = () => {
  return (
    <div className="flex gap-2">
      <SizeButton size={28} count={30} />
      <SizeButton size={29} count={30} />
      <SizeButton size={30} count={0} />
      <SizeButton size={31} count={5} />
      <SizeButton size={32} count={30} />
      <SizeButton size={33} count={0} />
      <SizeButton size={34} count={5} />
    </div>
  );
};

export default Sizes;
