import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ClientLayout from "./components/layout/client"
import HomePage from "./pages/homePage"
import FilmPage from "./pages/filmPage"
import { getAll } from './api/films'

const router = createBrowserRouter([
  {
    path: "/", element: <ClientLayout />, children: [
      {
        path: "/",
        element: <HomePage />,
        loader: async () => {
          const films = await getAll()
          return { films }
        }
      },
      { path: "/film/:id", element: <FilmPage /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
