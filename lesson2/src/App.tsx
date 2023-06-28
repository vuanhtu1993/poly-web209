import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ClientLayout from "./components/layout/client"
import HomePage from "./pages/homePage"
import FilmPage from "./pages/filmPage"

const router = createBrowserRouter([
  {
    path: "/", element: <ClientLayout />, children: [
      { path: "/", element: <HomePage /> },
      { path: "/film/:id", element: <FilmPage /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
