import { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import UrlSlugs from "../utils/dataTypes/UrlSlugs";
import AuthLayout from "../layouts/Auth";

// pages
const Login = lazy(()=>import("../pages/auth/LoginPage"));

const Public = () =>
  useRoutes([
    {
      element: <AuthLayout />,
      children: [
        { path: UrlSlugs.LOGIN, element: <Login /> },
        { path: UrlSlugs.REGISTER, element: <Login /> },
        { path: "/", element: <Navigate to={UrlSlugs.LOGIN} replace /> },
        { path: "*", element: <Navigate to={UrlSlugs.LOGIN} replace /> },
      ],
    },
  ]);

export default Public;