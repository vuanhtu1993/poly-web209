import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'
import FilmPage from './pages/film'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  { path: '/product/:id', element: <FilmPage /> },
])

function App() {
  return <RouterProvider router={routers} />
}

export default App
