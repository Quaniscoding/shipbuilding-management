import React from "react";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/not-found-page";
const HomePage = lazy(() => import("../pages/home-page"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
