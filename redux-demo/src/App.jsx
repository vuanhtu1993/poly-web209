import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Product from './components/product'
import Cart from './components/cart'
import { useDispatch, useSelector } from 'react-redux'
import { GETPRODUCT } from './redux/actions'

function App() {
  const [product, setProduct] = useState([])
  const store = useSelector(store => store)
  const fetchData = async () => {
    const data = await(await fetch('https://62de615accdf9f7ec2d66ae3.mockapi.io/api/products')).json()
    setProduct(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <Product product={product}/>
      <Cart/>
    </div>
  )
}

export default App
