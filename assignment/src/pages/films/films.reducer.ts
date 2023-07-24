import { createReducer, createAction } from '@reduxjs/toolkit'
import { IFilm } from '../../models'

const intialState = {
    films: [],
    isLoading: false
} as { films: IFilm[], isLoading: boolean }

// Acition
export const fetchFilms = createAction<IFilm[]>('films/fetch')

// fetchFilms() => {type: "films/fetch"}
// fetchFilms({a: 10}) => {type: "films/fetch", payload: {a: 10}}
// Reducer
export const filmsReducer = createReducer(intialState, builder => {
    // immerjs
    builder.addCase(fetchFilms, (state, action) => {
        state.films = action.payload
    })
})

