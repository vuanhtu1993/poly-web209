import { useEffect, useState } from "react"
import Film from "./components/film"
import { getAll } from "./api/film"

function App() {
  const [films, setFilms] = useState([])
  // useEffect:
  // 1. Tham số thứ 2 = undefined
  // 2. Tham số thứ 2 = []
  // 3. Tham số thứ 2 phụ thuộc vào props hoặc state
  useEffect(() => {
    const getFilms = async () => {
      const data = await getAll()
      setFilms(data)
    }
    getFilms()
  }, [])
  return <div>
    <header>
      <img className="w-[80px]" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
    </header>
    <div className="pt-4 grid grid-cols-3 gap-2">
      {/* Render dynamic - props*/}
      {films.map((item) => <Film data={item} />)}

    </div>
  </div>
}

export default App
