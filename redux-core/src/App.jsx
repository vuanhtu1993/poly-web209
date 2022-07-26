import { Col, Row, Typography, Button, Spin} from "antd";
import { useEffect, useState } from "react";
import Product from "./components/product";
import { currency } from "./helper";
import "./App.css";
import { useSelector } from "react-redux";
import Cart from "./components/cart";
const { Title } = Typography;
export default function App() {
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    const data = await (
      await fetch("https://62de615accdf9f7ec2d66ae3.mockapi.io/api/products")
    ).json();
    return setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if(product.length < 1) {
    return <Spin/>
  }

  return (
    <div className="container">
      <Product product={product} />
      <Cart/>
    </div>
  );
}
