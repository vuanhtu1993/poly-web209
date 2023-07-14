import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'
import FilmPage from './pages/film'
import { getAll } from './api/film'
import AddFilmPage from './pages/addFilm'
import MessageProvider from './store/message-context'
import FilmProvider from './store/film-context'

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
