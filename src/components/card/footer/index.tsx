import React from "react";

const Footer: React.FC<{ children: React.ReactNode; mT?: string }> = ({
  children,
  mT,
}) => {
  return (
    <div className={`w-full ${mT || "mt-4"} flex justify-end items-center`}>
      {children}
    </div>
  );
};

export default Footer;
