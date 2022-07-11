import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/product' element={<ProductDetail />}></Route>
      </Routes>
    </Container>
  )
}

const Container = styled.div`

`

export default App
