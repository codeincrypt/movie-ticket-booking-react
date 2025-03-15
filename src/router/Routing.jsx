import { Route, Routes } from "react-router-dom";
import { AuthRouter, UserAuthRouter, UserRouter, AdminRouter, SellerRouter } from "./Router";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import AdminLayout from "../layout/AdminLayout";
import SellerLayout from "../layout/SellerLayout.jsx";
import UserAuthLayout from "../layout/UserAuthLayout";

const Navigation = () => {
  return (
    <Routes>
      {UserAuthRouter?.map((item) => (
        <Route
          path={item.path}
          key={item.path}
          element={
            <UserAuthLayout>
              <item.component />
            </UserAuthLayout>
          }
        />
      ))}
      {AuthRouter?.map((item) => (
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

      {UserRouter?.map((item) => (
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

      {AdminRouter?.map((item) => (
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

      {SellerRouter?.map((item) => (
        <Route
          path={item.path}
          key={item.path}
          element={
            <SellerLayout>
              <item.component />
            </SellerLayout>
          }
        />
      ))}

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Navigation;
