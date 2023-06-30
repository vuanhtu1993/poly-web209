import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'
import FilmPage from './pages/film'
import { getAll } from './api/film'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    loader: async () => {
      const films = await getAll()
      return { films }
    }
  },
  { path: '/product/:id', element: <FilmPage /> },
])

function App() {
  return <RouterProvider router={routers} />
}

export default App
