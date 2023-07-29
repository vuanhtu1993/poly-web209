import { createContext, useReducer } from 'react'
import taskReducer from '../reducers/task.reducer'
import { produce } from 'immer'

export const ProductContext = createContext({})

const intialState = [
  { name: "Công việc 1", isDone: false, id: 1 },
  { name: "Công việc 2", isDone: false, id: 2 },
  { name: "Công việc 3", isDone: true, id: 3 },
] as { name: string, isDone: boolean, id: number }[]

const ProductProvider = (props: { children?: React.ReactNode }) => {
  const [tasks, dispatch] = useReducer(produce(taskReducer), intialState)
  return <ProductContext.Provider value={{ tasks: tasks, dispatch: dispatch }}>
    {props.children}
  </ProductContext.Provider>
}

export default ProductProvider
