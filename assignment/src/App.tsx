import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home/home'
import FilmPage from './pages/film/film'
import { getAll } from './api/film'
import AddFilmPage from './pages/film/addFilm'
import MessageProvider from './context/message-context'
import FilmProvider from './context/film-context'

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
  return <FilmProvider>
    <MessageProvider>
      <RouterProvider router={routers} />
    </MessageProvider>
  </FilmProvider>
}

export default App
