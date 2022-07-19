import React from "react";
import { Row, Col, Carousel } from 'antd'
import HomeMenu from "../../components/Home/Menu";
import styled from "styled-components";
import Banner1 from "../../assets/images/banner1.png";
import Banner2 from "../../assets/images/banner2.png";
import Banner3 from "../../assets/images/banner3.png";
import Banner4 from "../../assets/images/banner4.png";
import Banner5 from "../../assets/images/banner5.png";
import Banner6 from "../../assets/images/banner6.png";


const HomePage = () => {
	const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
	return (
		<>
			<Container>
				<Row>
					<Col span={6}>
						<HomeMenu />
					</Col>
					<Col span={18}>
						<Carousel afterChange={onChange} autoplay>
							<Slider src={Banner1}/>
							<Slider src={Banner2}/>
							<Slider src={Banner3}/>
							<Slider src={Banner4}/>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</>
	)
}

const Container = styled.div`
    max-width: 1200px;
    margin: auto;
`
const Slider = styled.img`
	/* height: 300px;
  color: '#fff',;
	text-align: center;
	background-color: #364d79; */
`

export default HomePage