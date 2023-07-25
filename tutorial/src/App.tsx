import { useEffect, useState } from "react"
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState<{ name: string, id: number, isDone: boolean }[] | []>([])
  const [todo, setTodo] = useState("")
  const [status, setStatus] = useState<boolean | null>(null)

  // UseEffect
  useEffect(() => {
    console.log(status);

    axios.get('http://localhost:3000/tasks', {
      params: {
        isDone: status
      }
    }).then(res => setTasks(res.data))
  }, [status])

  const handleAddTodo = (e: React.KeyboardEvent) => {
    if (e.code === "Enter") {
      const newTask = {
        name: todo,
        isDone: false,
        id: Date.now()
      }
      // tasks.push(newTask)
      setTasks([...tasks, newTask])
      setTodo("")
    }
  }

  // console.log(tasks);


  return (
    <div className="text-center container mx-auto">
      <h1 className="text-2lg font-bold bg-red-400">Todo list</h1>
      <div className="mt-4">
        <label
          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <span className="text-xs font-medium text-gray-700"> Email </span>

          <input
            onChange={(e) => setTodo(e.target.value)}
            onKeyPress={handleAddTodo}
            type="text"
            value={todo}
            placeholder="Task 1"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
      </div>
      <div>
        <h1>Công việc trong ngày</h1>
        <select name="" id="" className="block ml-auto" onChange={e => {
          console.log(e.target.value);

          setStatus(e.target.value == "null" ? null : Boolean(e.target.value))
        }}>
          <option value="null">Tất cả</option>
          <option value="true">Hoàn thành</option>
          <option value="false">Chưa hoàn thành</option>
        </select>
        <div className="grid grid-cols-4 gap-3 mt-4">
          {tasks.map((item, index) => <div key={item.id}>
            <p className="border border-red-500 border-dashed text-sm">{index + 1}</p>
            <h2>{item.name}</h2>
            {!item.isDone ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto text-red-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          </div>)}
        </div>
      </div>

    </div>
  )
}

export default App
