import React from "react";
import { Link, useLocation } from "react-router-dom";
import mockData from "./mockData.json";

interface IData {
  id: number;
  parentId: number;
  to: string;
  name: string;
  key: string;
}

const Sidebar = () => {
  const { pathname } = useLocation();

  const menuEngine = (data: IData[]) => {
    return (
      <ul className={`z-99 list-none p-0 w-full mt-24`}>
        {data.map((item) => {
          const active = pathname === item.to;
          if (item.parentId === 0) {
            return (
              <li
                key={item.key}
                className={`relative bg-white w-auto max-w-full min-h-[56px] hover:font-bold hover:text-primary hover:bg-white_100 ${
                  active && `text-primary bg-white_100`
                }`}
              >
                <Link
                  className={`padding-right-4 flex justify-center min-h-[56px] text-decoration-none text-h5 font-medium text-blue-400 w-full relative `}
                  to={item.to}
                >
                  <span className="relative flex items-center">
                    <span className={`item-text font-bold`}>{item.name}</span>
                  </span>
                </Link>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    );
  };

  return (
    <div className="w-full h-[calc(100vh-72px)] max-h-[calc(100vh-72px)] overflow-y-auto">
      {mockData && menuEngine(mockData)}
    </div>
  );
};

export default React.memo(Sidebar);
