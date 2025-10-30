import React from "react";
import DashboardLayout from "../layout/index";

const Dashboard = React.lazy(() => import("../pages/dashboard/index"));
const ListUsers = React.lazy(() => import("../pages/users/index"));

const routes: any = [
  {
    path: "/",
    exact: true,
    name: "داشبورد",
    layout: DashboardLayout,
    Component: Dashboard,
    breadcrumb: "داشبورد",
  },
  {
    path: "/users",
    exact: true,
    name: "کاربران",
    layout: DashboardLayout,
    Component: ListUsers,
    description: "از این قسمت برای مدیریت و ایجاد قراردادها استفاده کنید.",
    breadcrumb: "کاربران",
  },
];

export default routes;
