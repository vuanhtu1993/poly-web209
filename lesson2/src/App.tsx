import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'


const routers = createBrowserRouter([
  { path: "/", element: <HomePage /> }
])

function App() {
  return <RouterProvider router={routers} />
}

export default App
