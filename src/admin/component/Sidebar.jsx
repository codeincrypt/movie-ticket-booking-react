import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, Layout, Menu } from "antd";

import { toggleSidebar } from "../../../store/slices/sidebarSlice";
import LOGO from "./../../../assets/logo.png";
import { getAdminMenuList } from "../../../services/navigationCategory";

const MainSidebar = () => {
  const { Sider } = Layout;
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.sidebarCollapse.isCollapsed);

  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    getSidebarMenu();
  }, []);

  const getSidebarMenu = async () => {
    const response = await getAdminMenuList();
    setMenuList(response?.data);
  };

  const toggleCollapsed = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Sider
    width={250}
      collapsible
      trigger={null}
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      className="sidebar"
    >
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        <div className="sidebar-logo d-flex align-items-center p-3">
          {collapsed ? (
            <Avatar style={{ verticalAlign: "middle" }} size="large">
              LV
            </Avatar>
          ) : (
            <img src={LOGO} alt="logo" />
          )}
        </div>

        {menuList?.map(
          (menuItem, index) =>
            menuItem?.parent === 0 &&
            (menuItem?.treeview === 1 ? (
              <Menu.SubMenu
                key={`submenu${menuItem.id}`}
                icon={
                  <>
                    {menuItem.icon === "-" ? (
                      <img src={require(`./../../../assets/icons/dashboard.svg`)} alt={menuItem.id} className="icons"/>
                    ) : (
                      <img src={require(`./../../../assets/icons/${menuItem.icon}.svg`)} alt={menuItem.id} className="icons"/>
                    )}
                  </>
                }
                title={menuItem.pageName}
              >
                {menuItem?.submenu?.map((subMenuItem, subIndex) => (
                  <Link to={`/${subMenuItem?.url}`} key={subMenuItem.id || subIndex}>
                    <Menu.Item>
                      {subMenuItem?.pageName}
                    </Menu.Item>
                  </Link>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={menuItem.id} 
                icon={
                  <>
                    {menuItem.icon !== "-" ? (
                      <img src={require(`./../../../assets/icons/${menuItem.icon}.svg`)} alt={menuItem.id} className="icons"/>
                    ) : (
                      <img src={require(`./../../../assets/icons/dashboard.svg`)} alt={menuItem.id} className="icons"/>
                    )}
                  </>
                }>
                <Link to={`/${menuItem?.url}`}>{menuItem?.pageName}</Link>
              </Menu.Item>
            ))
        )}
      </Menu>
    </Sider>
  );
};

export default MainSidebar;
