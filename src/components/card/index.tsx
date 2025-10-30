import React from "react";

import CardBody from "./body";
import CardHeader from "./header";
import CardFooter from "./footer";
import HeaderTitle from "./header/headerTitle";
import useWindowSize from "../../utils/use-window-size";

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [width] = useWindowSize();
  return (
    <div
      className="px-2 py-4 mx-auto bg-white rounded-lg min-h-96"
      style={{ overflowX: width < 430 ? "auto" : "visible" }}
    >
      {children}
    </div>
  );
};

export { Card, CardBody, CardFooter, CardHeader, HeaderTitle };
