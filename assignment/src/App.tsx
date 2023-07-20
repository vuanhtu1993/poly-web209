import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ClientLayout from "./components/layout/client"
import HomePage from "./pages/homePage"
import FilmPage from "./pages/filmPage/filmPage"
import { getAll } from './api/films'
import AdminPage from './pages/adminPage'
import AddFilmPage from './pages/filmPage/addFilmPage'
import MessageProvider from './context/message-context'

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
      { path: "/film/:id", element: <FilmPage /> },
      {
        path: "/admin",
        element: <AdminPage />,
        loader: async () => {
          const films = await getAll()
          return { films }
        }
      },
      {
        path: "/admin/add",
        element: <AddFilmPage />
      }
    ]
  }
])
function App() {
  return <MessageProvider>
    <RouterProvider router={router} />
  </MessageProvider>
}

export default App
