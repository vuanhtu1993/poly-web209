import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import AddProduct from './pages/add'

const router = createBrowserRouter([
  {
    path: '/', element: <Dashboard />,
  },
  {
    path: '/add', element: <AddProduct />,
  }
])
function App() {
  return <RouterProvider router={router} />
}

export default App
