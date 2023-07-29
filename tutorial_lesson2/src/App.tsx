import { useCallback, useContext, useMemo, useState } from "react"
import AddTodo from "./components/addTodo"
import Status from "./components/status"
import { ProductContext } from "./context/product.context"

export type Task = {
  name: string,
  isDone: boolean,
  id: number
}

const countTasks = (tasks: Task[]) => {
  console.log("count tasks is called");

  return tasks.length
}



// Reducer
// 1. Pure function
// (a, b) => a * b
// random, time (a, b) => a + Math.random(b)*10
// Side effect

// Action {type: string, payload: data}

function App() {
  const { tasks, dispatch } = useContext(ProductContext)
  const [count, setCount] = useState(0)

  // Buổi 1
  // memo
  // useCallback
  // const func1 = useCallback(() => {}, [deps])
  // type: function => Object
  const handleAddTask = useCallback((task: Task) => {
    // setTasks(prev => [...prev, task])
    dispatch({
      type: "ADD",
      payload: task
    })
  }, [])

  const handleChangeStatus = (id: number) => {
    dispatch({
      type: "CHANGE_STATUS",
      payload: id
    })
  }
  // useMemo
  // const memoFunc1 = useCallback(() => <gia tri>, [deps])
  // const 
  const memoCountTasks = useMemo(() => countTasks(tasks), [tasks])


  // Buổi 2: useReducer
  // 1. AddTodo
  // 2. Update
  // 3. Delete
  // 4. Đổi trạng thái

  // Buổi 2: useContext


  return <div className="container mx-auto">
    <h1 className="text-2xl bg-red-500 text-center">Todo list</h1>
    <div className="mt-4">
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <AddTodo addTask={handleAddTask} />
      <h1>Công việc cần làm: <span className="text-rose-500 font-bold">{memoCountTasks}</span></h1>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {tasks.map((item, index) => <div key={item.id} className="border border-blue-300 border-dashed rounded-sm">
          <h2>stt:{index + 1}</h2>
          <div className="flex justify-between">
            <p>{item.name}</p>
            <Status isDone={item.isDone} onClick={() => handleChangeStatus(item.id)} />
          </div>
        </div>)}
      </div>
    </div>
  </div>
}

export default App
