import React from "react";
import { Suspense, useState } from "react";
import LoadingOverlay from "../components/ui/loading-overlay";
import UserLayout from "./user-layout";
import AdminLayout from "./admin-layout";
export default function AppLayout() {
  const { isAdmin } = useState("admin");

  return (
    <Suspense fallback={<LoadingOverlay show={true} />}>
      {isAdmin ? <AdminLayout /> : <UserLayout />}
    </Suspense>
  );
}
