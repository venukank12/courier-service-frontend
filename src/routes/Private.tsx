import { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import UrlSlugs from "../utils/dataTypes/UrlSlugs";
import DashboardLayout from "../layouts/Dashboard";

// pages
const Dashboard = lazy(()=>import("../pages/dashboard"));

const Private = () =>
  useRoutes([
    {
      element: <DashboardLayout />,
      children: [
        { path: UrlSlugs.HOME, element: <Dashboard /> },
        { path: "/", element: <Navigate to={UrlSlugs.HOME} replace /> },
        { path: "*", element: <Navigate to={UrlSlugs.HOME} replace /> },
      ],
    },
  ]);

export default Private;