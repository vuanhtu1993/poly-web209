import React, { useContext } from "react";
import Header from '../../components/Header'
import {Outlet} from 'react-router-dom'
import { ThemeContext } from "../../App";
import styled from "styled-components";


const UserLayout = (props: any) => {
    const {theme, setTheme} = useContext(ThemeContext)
    return (
        <Container theme={theme}>
            <Header/>
            <Outlet/>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${props => props.theme == "dark" ? "#001529" : "white"};
    min-height: 100vh
`

export default UserLayout