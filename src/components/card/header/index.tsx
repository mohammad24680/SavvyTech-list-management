import React from "react";

const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="w-full mb-2">{children}</div>;
};

export default Header;
