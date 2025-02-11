import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout } from "antd";

import MainHeader from "../containers/main/include/Header";
import MainSidebar from "../containers/main/include/Sidebar";
import MainFooter from "../containers/main/include/Footer";
import "./../assets/css/allcss.scss";

const AdminLayout = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log({ isAuthenticated });

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
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
