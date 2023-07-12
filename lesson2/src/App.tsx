import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'
import FilmPage from './pages/film'
import { getAll } from './api/film'
import AddFilmPage from './pages/addFilm'
import { createContext, useState } from 'react'
import Message from './components/message'

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

export const GlobalContext = createContext({})

function App() {
  const [global, setGlobal] = useState({
    contentMessage: null
  })
  return <GlobalContext.Provider value={{ global, setGlobal }}>
    {global.contentMessage && <Message content={global.contentMessage} />}
    <RouterProvider router={routers} />
  </GlobalContext.Provider>
}

export default App
