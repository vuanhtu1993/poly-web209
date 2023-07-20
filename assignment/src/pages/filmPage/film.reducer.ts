import { createReducer, createAction } from '@reduxjs/toolkit'
import { IFilm } from '../../models'

type FilmState = {
  films: IFilm[],
  isLoading: boolean
}

const intialState: FilmState = {
  films: [],
  isLoading: false
}

export const fetchFilm = createAction<IFilm[]>('film/fetch')
export const addFilm = createAction<IFilm>("film/add")

export const FilmReducer = createReducer(intialState, (builder) => {
  builder.addCase(fetchFilm, (state, action) => {
    state.films = action.payload
  })
  builder.addCase(addFilm, (state, action) => {
    state.films.push(action.payload)
  })
})
