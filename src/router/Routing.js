import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRouter, UserRouter, AdminRouter } from "./Router";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import AdminLayout from "../layout/AdminLayout";

const Navigation = () => {
  return (
    <Routes>
      {AuthRouter?.map((item, index) => (
        <Route
          path={item.path}
          key={item.path}
          element={
            <AuthLayout>
              <item.component />
            </AuthLayout>
          }
        />
      ))}

      {UserRouter?.map((item, index) => (
        <Route
          path={item.path}
          key={item.path}
          element={
            <MainLayout>
              <item.component />
            </MainLayout>
          }
        />
      ))}

      {AdminRouter?.map((item, index) => (
        <Route
          path={item.path}
          key={item.path}
          element={
            <AdminLayout>
              <item.component />
            </AdminLayout>
          }
        />
      ))}

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Navigation;
