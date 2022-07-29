import { Spin} from "antd";
import { useEffect, useState } from "react";
import Product from "./components/Product";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart";
import { GETPRODUCTS } from "./redux/actions";
import "./App.css";
import productSlice, {fetchProduct} from "./components/Product/productSlice.js";

export default function App() {
  const dispatch = useDispatch()
  const {product} = useSelector(store => store)
  useEffect(() => {
    // fetchData()
    dispatch(fetchProduct())
  }, []);

  if(product.length < 1) {
    return (
      <div className="container">
        <Spin/>
      </div>
    )
  }

  return (
    <div className="container">
      <Product product={product} />
      <Cart/>
    </div>
  );
}
