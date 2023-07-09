import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ClientLayout from "./components/layout/client"
import HomePage from "./pages/homePage"
import FilmPage from "./pages/filmPage"
import { getAll } from './api/films'
import AdminPage from './pages/adminPage'
import AddFilmPage from './pages/addPage'
import { createContext, useContext, useState } from 'react'
import Message from './components/message'

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

type AppContextType = {
  appState: AppStateType | null,
  showMessage: (content: { message: string, type: string }) => void | null
}

type AppStateType = {
  messageContent?: {
    message: string,
    type: string
  }
}

export const AppContext = createContext<AppContextType>({
  appState: null,
  showMessage: function () {
    return null
  }
})
function App() {
  const [appState, setAppState] = useState<AppStateType>({})

  const showMessage = (content: { message: string, type: string }) => {
    setAppState((state) => {
      return { ...state, messageContent: content }
    })
  }

  return <AppContext.Provider value={{ appState, showMessage }}>
    {appState.messageContent && <Message content={appState.messageContent} />}
    <RouterProvider router={router} />
  </AppContext.Provider>
}

export default App
