import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'
import AddFilmPage from './pages/film/addFilm'
import { createContext, useState } from 'react'
import Message from './components/message'


const routers = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/add", element: <AddFilmPage /> },
])

export const MessageContext = createContext({} as any)

function App() {
  const [message, setMessage] = useState(null)
  return <MessageContext.Provider value={{ message, setMessage }}>
    {message && <Message content={message} />}
    <RouterProvider router={routers} />
  </MessageContext.Provider>
}

export default App
