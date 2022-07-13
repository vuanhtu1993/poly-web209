import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import ProductAdminPage from './pages/Admin/product'
import CategoriesPage from './pages/Admin/categories'
import AdminLayout from './components/Layout/admin'
import UserLayout from './components/Layout/user'
import HomePage from './pages/Home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserLayout/>}>
          <Route index element={<HomePage/>}/>
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<ProductAdminPage/>}/>
          <Route path='categories' element={<CategoriesPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
