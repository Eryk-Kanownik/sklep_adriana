import React from "react";

const template = ({ children }: { children: React.ReactNode }) => {
  return <div className="page-transition-class">{children}</div>;
};

export default template;
