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
    getTodos: builder.query<ITodo[], string>({
      query: () => "/todos"
    })
  })
})

export const { useGetTodosQuery } = todoAPI
