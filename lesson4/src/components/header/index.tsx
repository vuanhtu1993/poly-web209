import React from "react";
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const Header = () => (
    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
        <Menu.Item key="home" icon={<MailOutlined />}>
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="project" icon={<MailOutlined />}>
            <Link to="/projects">Projects</Link>
        </Menu.Item>
        <Menu.SubMenu key="SubMenu" title="Navigation Two - Submenu" icon={<SettingOutlined />}>
            <Menu.Item key="two" icon={<AppstoreOutlined />}>
                Navigation Two
            </Menu.Item>
            <Menu.Item key="three" icon={<AppstoreOutlined />}>
                Navigation Three
            </Menu.Item>
            <Menu.ItemGroup title="Item Group">
                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Navigation Four
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Navigation Five
                </Menu.Item>
            </Menu.ItemGroup>
        </Menu.SubMenu>
    </Menu>
);

export default Header
