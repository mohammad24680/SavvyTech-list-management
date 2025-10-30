import React from "react";

const CardBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="w-full h-full">{children}</div>;
};

export default CardBody;
