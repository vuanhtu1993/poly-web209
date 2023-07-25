import React, { useState } from "react"
import { Task } from "../App"

const AddTodo = function ({ addTodo }: { addTodo: (task: Task) => void }) {
  const [todo, setTodo] = useState("")

  const handleAddTodo = function (e: React.KeyboardEvent) {
    if (e.code === "Enter") {
      const newTask = {
        name: todo,
        isDone: false,
        id: Date.now()
      }
      addTodo(newTask)
      setTodo("")
    }
  }

  console.log("AddTodo");


  return <div className="mt-4">
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
}

export default React.memo(AddTodo)
