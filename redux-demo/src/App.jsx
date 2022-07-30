import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Product from './components/product'
import Cart from './components/cart'
import { useDispatch, useSelector } from 'react-redux'
import { GETPRODUCT } from './redux/actions'

function App() {
  const store = useSelector(store => store)
  console.log(store);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GETPRODUCT)
  }, [])
  return (
    <div>
      <Product product={store.products}/>
      <Cart/>
    </div>
  )
}

export default App
