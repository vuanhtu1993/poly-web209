import { Spin} from "antd";
import { useEffect, useState } from "react";
import Product from "./components/product";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/cart";
import { GETPRODUCTS } from "./redux/actions";
import "./App.css";

export default function App() {
  const dispatch = useDispatch()
  const {products} = useSelector(store => store)

  useEffect(() => {
    dispatch(GETPRODUCTS)
  }, []);

  if(products.length < 1) {
    return (
      <div className="container">
        <Spin/>
      </div>
    )
  }

  return (
    <div className="container">
      <Product product={products} />
      <Cart/>
    </div>
  );
}
