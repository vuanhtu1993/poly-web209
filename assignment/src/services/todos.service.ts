import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITodo } from '../models'

export const todoAPI = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    headers: {
      Authentication: "Bearer "
    }
  }),
  endpoints: builder => ({
    // action
    getTodos: builder.query<ITodo[], void>({
      query: () => "/todos"  // GET
    }),

    addTodo: builder.mutation({
      query: (todo: ITodo) => ({
        url: `/todos`,
        method: "POST",
        body: todo
      })
    })
  })
})

export const { useGetTodosQuery, useAddTodoMutation } = todoAPI
