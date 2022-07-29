import React from "react";
import { Col, Divider, Row, Typography, Button, InputNumber } from 'antd'
import { useDispatch, useSelector } from "react-redux";
import { currency } from "../../helper.js";
import cartSlice from "./cartSlice.js";

const { Title } = Typography

const Index = () => {
    const {cart} = useSelector(store => store)
    const dispatch = useDispatch()
    const increaseProduct = (id) => {
        dispatch(cartSlice.actions.increase(id))
    }
    return (
        <div className="cart">
            <Title level={3}>Giỏ hàng</Title>
            {cart.cart?.map(item => (
                <Row key={item.id}>
                    <Col span={20}>
                        <Title level={5}>{item.name}</Title>
                        <Row>
                            <Col>
                                <img width="50%" src={item.image} />
                            </Col>
                            <Col>
                                <Typography>Số lượng</Typography>
                                <Row>
                                    <Col><Button>-</Button></Col>
                                    <Col><InputNumber value={item.amount ? item.amount : 1}/></Col>
                                    <Col><Button onClick={() => increaseProduct(item.id)}>+</Button></Col>
                                </Row>
                            </Col>
                        </Row>

                    </Col>
                    <Col span={4}>
                        <Title level={5}>{currency(item.total || item.saleOffPrice)}</Title>
                    </Col>
                </Row>
            ))}
            <Divider />
            <Row>
                <Col span={20}>Tổng số tiền</Col>
                <Col span={4}><Title level={3} style={{color: "red"}}>{currency(cart.total)}</Title></Col>
            </Row>
        </div>
    )
}

export default Index