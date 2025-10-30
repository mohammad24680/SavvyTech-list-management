import React from "react";

const HeaderTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="text-primary text-base font-medium mb-5">{children}</div>
  );
};

export default HeaderTitle;
