import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRouter, UserRouter } from "./Router";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";

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

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Navigation;
