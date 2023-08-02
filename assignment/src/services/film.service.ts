import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IFilm } from '../models'

export const filmAPI = createApi({
  reducerPath: "films",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    headers: {

    }
  }),
  endpoints: builder => ({
    fetchFilm: builder.query<IFilm[], void>({
      query: () => "/movies"
    }),
    createFilm: builder.mutation({
      query: (film: IFilm) => ({
        url: "/movies",
        method: "POST",
        body: film
      })
    })
  })
})

export const { useCreateFilmMutation, useFetchFilmQuery } = filmAPI
