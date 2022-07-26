import { Typography, Row, Col, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { currency } from "../helper";
import { useDispatch } from "react-redux";

const { Title } = Typography;

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch({
      type: "cart/add",
      payload: product
    })
  }
  return (
    <div className="product">
      <Title level={3}>Sản phẩm</Title>
      <Row gutter={10}>
        {product?.map((item) => (
          <Col span={8} key={item.id}>
            <Title level={5}>{item.name}</Title>
            <img width="100%" src={item.image} />
            <div>{currency(item.saleOffPrice)}</div>
            <Button onClick={() => addToCart(item)} type="primary" danger icon={<ShoppingCartOutlined />} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Product;
