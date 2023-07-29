import React, { useState } from 'react'
import { Task } from '../App'

const AddTodo = ({ addTask }: { addTask: (task: Task) => void }) => {
  const [todo, setTodo] = useState("")

  const handleAddTask = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      const target = e.target as HTMLInputElement
      const newTask = {
        name: target.value,
        isDone: false,
        id: Date.now()
      }
      setTodo("")
      addTask(newTask)
    }
  }

  return <label
    className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
  >
    <span className="text-xs font-medium text-gray-700"> Task </span>

    <input
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      onKeyPress={handleAddTask}
      type="text"
      placeholder="Something must do"
      className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
    />
  </label>
}

export default React.memo(AddTodo)
