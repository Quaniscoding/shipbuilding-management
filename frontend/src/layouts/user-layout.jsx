import React from "react";
import PageHeading from "../components/page-heading";
import { Outlet } from "react-router-dom";
import PageFooter from "../components/page-footer";

export default function UserLayout() {
  return (
    <div className="h-screen overflow-auto">
      <div className="fixed top-0 left-0 w-full z-50">
        <PageHeading />
      </div>
      <div className="overflow-y-auto h-full sm:h-auto mt-[72px]">
        <Outlet />
      </div>
      <PageFooter />
    </div>
  );
}
