import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ConfigProvider, Layout } from "antd";

import MainHeader from "../seller/component/Header";
import MainSidebar from "../seller/component/Sidebar";

const AdminLayout = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.sellerauth.isAuthenticated);
  console.log({ isAuthenticated });

  if (!isAuthenticated) {
    return <Navigate to="/seller-login" />;
  }

  const { Content } = Layout;

  return (
    <ConfigProvider
      theme={{
        // algorithm: theme.darkAlgorithm, // Optional: for dark mode
        token: {
          // colorBgLayout: "blue",
          colorPrimary: "#58595b",
          colorSecondary: "red",
          colorFillSecondary: "red",
          colorFillPrimary: "#58595b",
          colorBgBase: "#fff",
          colorBgLayout: "#fff",
        },
        components: {
          Layout: {
            headerBg: "#fff", // Header background color
            siderBg: "#fff", // Sidebar background color
          },
        },
      }}
    >
    <Layout>
      <MainSidebar />
      <Layout>
        <MainHeader />
        <Content className="p-3 bg-muted">
          {children}
        </Content>
      </Layout>
    </Layout>
    </ConfigProvider>
  );
};

export default AdminLayout;
