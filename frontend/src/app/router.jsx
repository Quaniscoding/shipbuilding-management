import React from "react";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/not-found-page";
import AppLayout from "../layouts/app-layout";
import AdminLayout from "../layouts/admin-layout";
const HomePage = lazy(() => import("../pages/home-page"));
const LoginPage = lazy(() => import("../modules/auth/pages/login-page"));
const RegisterPage = lazy(() => import("../modules/auth/pages/register-page"));
const AboutUs = lazy(() => import("../pages/about-us"));
const Projects = lazy(() => import("../pages/projects"));
const Customers = lazy(() => import("../pages/customers"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/users",
        element: <ManageUsers />,
      },
      {
        path: "/admin/products",
        element: <ManageProducts />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
