import type { ReactNode } from "react";
import useWindowSize from "../utils/use-window-size";
import Breadcrumbs from "./breadcrumbs";
import Sidebar from "./sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayOut = ({ children }: DashboardLayoutProps) => {
  const [width] = useWindowSize();

  return (
    <div className="h-screen w-full box-border flex justify-end items-start overflow-hidden">
      <div className="w-64 lg:shadow-sideBar  h-full max-h-screen overflow-y-auto bg-transparent flex justify-start items-end flex-col absolute top-0 right-0 z-20">
        <Sidebar />
      </div>
      <div className="bg-surface h-full flex justify-between w-[calc(100%-256px)] items-center flex-col overflow-y-auto overflow-x-hidden z-30">
        <header
          className="mx-auto w-full flex justify-center items-center bg-blue_050 h-16 px-4 lg:px-8"
          style={{ height: width < 430 ? "7.5rem" : "4.5rem" }}
        >
          <div className="max-w-fit min-h-24 flex justify-center items-center relative font-bold">
            نرم افزار تستی
          </div>
        </header>
        <Breadcrumbs />
        <div className="w-full min-h-full h-auto pb-3 bg-surface mx-auto px-5">
          <div className="w-full max-w-[1310px] mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayOut;
