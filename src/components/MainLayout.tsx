import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router";

export const MainLayout: React.FC = () => {
  return (
    <Layout className="h-screen w-screen">
      <div className="px-10 pb-10">
        <div className="text-black font-bold text-3xl py-3 text-center">
          Star Wars Planets
        </div>

        <Outlet />
      </div>
    </Layout>
  );
};
