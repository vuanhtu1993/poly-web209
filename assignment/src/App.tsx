import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home/home'
import FilmPage from './pages/film/film'
import AddFilmPage from './pages/film/addFilm'
import MessageProvider from './context/message-context'
import FilmProvider from './context/film-context'
import SignUp from './pages/auth/signup'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  { path: '/film/:id', element: <FilmPage /> },
  { path: '/film/add', element: <AddFilmPage /> },
  { path: '/signup', element: <SignUp /> },
])

function App() {
  return <FilmProvider>
    <MessageProvider>
      <RouterProvider router={routers} />
    </MessageProvider>
  </FilmProvider>
}

export default App
