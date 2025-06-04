import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout;

const menuItems = [
  {
    key: "/admin",
    icon: <DashboardOutlined />,
    label: "Bảng điều khiển",
  },
  {
    key: "/admin/users",
    icon: <UserOutlined />,
    label: "Quản lý người dùng",
  },
  {
    key: "/admin/products",
    icon: <AppstoreOutlined />,
    label: "Quản lý sản phẩm",
  },
  {
    key: "/admin/settings",
    icon: <SettingOutlined />,
    label: "Cài đặt",
  },
  {
    key: "/logout",
    icon: <LogoutOutlined />,
    label: "Đăng xuất",
  },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = ({ key }) => {
    if (key === "/logout") {
      // Xử lý đăng xuất tại đây
      // ...
      navigate("/login");
    } else {
      navigate(key);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="60"
        style={{
          background: "#001529",
        }}
      >
        <div className="h-16 flex items-center justify-center text-white text-xl font-bold tracking-wide border-b border-gray-700">
          ADMIN
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            boxShadow: "0 2px 8px #f0f1f2",
            minHeight: 64,
          }}
        >
          <div className="font-semibold text-lg text-blue-700">
            Hệ thống quản lý đóng tàu - Trang quản trị
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0", minHeight: 360 }}>
          <div
            style={{
              padding: 24,
              background: "#fff",
              minHeight: "calc(100vh - 160px)",
              borderRadius: 8,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center", background: "#fff" }}>
          ©2025 Hệ thống quản lý đóng tàu. Admin Dashboard.
        </Footer>
      </Layout>
    </Layout>
  );
}
