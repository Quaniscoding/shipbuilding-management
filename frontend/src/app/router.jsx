import React from "react";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/not-found-page";
import AppLayout from "../layouts/app-layout";
import AdminLayout from "../layouts/admin-layout";
const HomePage = lazy(() => import("../pages/home-page"));
const Customers = lazy(() => import("../pages/customers"));
const Projects = lazy(() => import("../pages/projects"));
const LoginPage = lazy(() => import("../modules/auth/pages/login-page"));
const RegisterPage = lazy(() => import("../modules/auth/pages/register-page"));
const AboutUs = lazy(() => import("../pages/about-us"));
const ManageUsers = lazy(() => import("../modules/users/pages/manage-user"));
const ManageProjects = lazy(() =>
  import("../modules/projects/pages/project-management-page")
);
const ManagePhases = lazy(() =>
  import("../modules/Phases/pages/phases-managenment-page")
);
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
        path: "/admin/projects",
        element: <ManageProjects />,
      },
      {
        path: "/admin/phases",
        element: <ManagePhases />,
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
