import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {currency} from "../helper.js";

const Cart = () => {
  const {cart, products, total} = useSelector(store => store)
  const dispatch = useDispatch()
  console.log(cart);

  const increase = (id) => {
    dispatch({
      type: "cart/increase",
      payload: id
    })
  }

  return (
    <div className='cart-container'>
      <h3>Cart</h3>
      {cart?.map(item => (
        <div className="cart-item">
          <div style={{display: "flex"}}>
            <h4>{item.name}</h4>
            <img style={{width: "20%"}} src={item.image} alt="" />
            <div>
              <button>-</button>
              <input type="number" value={item.amount || 1}/>
              <button onClick={() => increase(item.id)}>+</button>
            </div>
          </div>
          <p>{currency(item.total ? item.total : item.saleOffPrice)}</p>
        </div>
      ))}
      <div className="total">
        <div>Total</div>
        <h2>{0}</h2>
      </div>
    </div>
  )
}

export default Cart