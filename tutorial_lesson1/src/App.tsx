import { useCallback, useState } from "react"
import AddTodo from "./components/addTodo"

export type Task = {
  name: string,
  isDone: boolean,
  id: number
}

function App() {
  const [tasks, setTasks] = useState([
    { name: "Công việc 1", isDone: false, id: 1 },
    { name: "Công việc 2", isDone: false, id: 2 },
    { name: "Công việc 3", isDone: true, id: 3 },
  ])
  const [count, setCount] = useState(0)

  // type: function => Object
  const handleAddTask = useCallback((task: Task) => {
    setTasks(prev => [...prev, task])
  }, [])

  // memo
  // useCallback
  // const func1 = useCallback(() => {}, [deps])

  return <div className="container mx-auto">
    <h1 className="text-2xl bg-red-500 text-center">Todo list</h1>
    <div className="mt-4">
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <AddTodo addTask={handleAddTask} />
      <div className="mt-4 grid grid-cols-4 gap-3">
        {tasks.map((item, index) => <div key={item.id} className="border border-blue-300 border-dashed rounded-sm">
          <h2>stt:{index + 1}</h2>
          <div className="flex justify-between">
            <p>{item.name}</p>
            {!item.isDone ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="w-6 h-6 text-red-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                className="w-6 h-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>}
          </div>
        </div>)}
      </div>
    </div>
  </div>
}

export default App
