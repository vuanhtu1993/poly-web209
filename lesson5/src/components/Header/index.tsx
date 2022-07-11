import React from "react";
import styled from 'styled-components'
import logoImage from '../../assets/images/logo.png'
import deliveryImage from '../../assets/images/delivery.svg'
import ServiceBtn from "../Buttons/Service";
import InputSearch from "../Input/Search";

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Logo src={logoImage} />
                <InputSearch/>
                <Services>
                    <ServiceBtn
                        image={deliveryImage}
                        title1="Gọi mua hàng" title2="1800.2097" />
                    <ServiceBtn
                        image={deliveryImage}
                        title1="Gọi mua hàng" title2="1800.2097" />
                    <ServiceBtn
                        image={deliveryImage}
                        title1="Gọi mua hàng" title2="1800.2097" />
                </Services>

            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #D70018;
`

const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 60px;
    height: auto;
    margin-right: 60px;
`

const Search = styled.input`
    height: 36px;
    border-radius: 10px;
    border: none;
    min-width: 500px;
`
const Services = styled.div`
    display: flex;
    margin-left: 48px;
`

const Service = styled.div`
    display: flex;
`

export default Header