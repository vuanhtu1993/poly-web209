import React from "react";
import {Col, Divider, Row, Typography} from 'antd'
import { useSelector } from "react-redux";
import { currency } from "../helper";

const {Title} = Typography

const Cart = () => {
    const store = useSelector(store => store)
    console.log("Cart------", store)
    return (
        <div className="cart">
            <Title level={3}>Giỏ hàng</Title>
            {store.cart?.map(item => (
                <Row key={item.id}>
                    <Col span={20}>
                        <Title level={5}>{item.name}</Title>
                        <img width="20%" src={item.image}/>
                    </Col>
                    <Col span={4}>
                        <Title level={5}>{currency(item.saleOffPrice)}</Title>
                    </Col>
                </Row>
            ))}
            <Divider/>
            <Row>
                <Col span={20}>Tổng số tiền</Col>
                <Col span={4}></Col>
            </Row>
        </div>
    )
}

export default Cart