import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'
import FilmPage from './pages/film'
import { getAll } from './api/film'
import AddFilmPage from './pages/addFilm'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    loader: async () => {
      const films = await getAll()
      return { films }
    }
  },
  { path: '/film/:id', element: <FilmPage /> },
  { path: '/film/add', element: <AddFilmPage /> },
])

function App() {
  return <RouterProvider router={routers} />
}

export default App
