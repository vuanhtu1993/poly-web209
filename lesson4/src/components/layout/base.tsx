import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import styled from 'styled-components'
import Header from "../header";
import  {Outlet} from 'react-router-dom'

const { Content, Footer, Sider } = Layout;


const BaseLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="site-layout">
        <Header/>
        <Outlet/>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

const SiderContainer = styled(Sider)`
    background-color: red;
`

const CustomSider = styled.div`
  min-width: 300px;
`

export default BaseLayout;