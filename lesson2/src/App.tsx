import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'
import AddFilmPage from './pages/addFilm'


const routers = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/add", element: <AddFilmPage /> },
])

function App() {
  return <RouterProvider router={routers} />
}

export default App
