import React from "react";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import logoImage from '../../assets/images/logo.png'
import styled from 'styled-components'
import AutoComplete from "../Input/Autocomplete";

const Header = () => (
    <WrapperMenu mode="horizontal" defaultSelectedKeys={['mail']}>
        <Container>
            <Logo src={logoImage} alt="" />
            <AutoComplete/>
        </Container>
    </WrapperMenu>
);

const Logo = styled.img`
    width: 65px;
    height: auto;
`
const WrapperMenu = styled(Menu)`
    background-color: #D70018;
`

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
`


export default Header