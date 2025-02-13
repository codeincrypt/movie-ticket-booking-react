import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout } from "antd";

import MainHeader from "../admin/component/Header";
import MainSidebar from "../admin/component/Sidebar";
import MainFooter from "../admin/component/Footer";

const AdminLayout = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.adminAuth.isAuthenticated);
  console.log({ isAuthenticated });

  if (!isAuthenticated) {
    return <Navigate to="/admin-login" />;
  }

  const { Content } = Layout;

  return (
    <Layout>
      <MainSidebar />
      <Layout>
        <MainHeader />
        <Content className="th-scrollbar">
          {children}
        </Content>
        <MainFooter />
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
