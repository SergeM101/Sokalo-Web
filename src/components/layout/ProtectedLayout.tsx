//import React from "react";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <main className="flex-1 ml-64 p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayout;
