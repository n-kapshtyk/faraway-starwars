import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router";

export const MainLayout: React.FC = () => {
  return (
    <Layout className="h-full w-screen min-h-screen">
      <div className="px-10 pb-10">
        <div className="text-black font-bold text-3xl py-3 text-center">
          Star Wars Planets
        </div>

        <div className="flex flex-col space-y-3 bg-white rounded-xl p-5">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};
