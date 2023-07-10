import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import HomePage from "./pages/home"
import AddFilmPage from './pages/addFilm'

function UserLayout() {
  return <div>
    <header>
      <img className="w-[80px]" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
    </header>
    <Outlet />
    <footer>
      Footer
    </footer>
  </div>
}

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/", element: <UserLayout />, children: [
        { path: "/", element: <HomePage /> },
        { path: "/add", element: <AddFilmPage /> },
      ]
    },
  ])
  return <RouterProvider router={router} />
}

export default App
