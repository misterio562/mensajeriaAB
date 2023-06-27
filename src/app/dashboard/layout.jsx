import Sidebar from "@/components/sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <main>
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
