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
<<<<<<< HEAD
const Projects = lazy(() => import("../pages/projects"));
const Customers = lazy(() => import("../pages/customers"));
const ManageUsers = lazy(() => import("../modules/admin/pages/manage-users"));
=======
const ManageUsers = lazy(() => import("../modules/users/pages/manage-user"));
const ManageProjects = lazy(() =>
  import("../modules/projects/pages/project-management-page")
);
>>>>>>> 88b9c09d6749a46e9d24e37d513b62c97af26fd6
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
