import { createReducer, createAction } from '@reduxjs/toolkit'
import { IFilm } from '../../models'


const intialState = {
    films: [],
    isLoading: false
} as { films: IFilm[], isLoading: boolean }

export const fetchFilm = createAction<IFilm[]>("film/fetch")
export const addFilm = createAction<IFilm>("film/add")

// fetchFilm() => {type: "film/fetch"}
// fetchFilm({a: 10}) => {type: "film/fetch", payload: {a: 10}}

export const filmReducer = createReducer(intialState, (builder) => {
    // immerjs integrated
    builder.addCase(fetchFilm, (state, action) => {
        state.films = action.payload
    })
    builder.addCase(addFilm, (state, action) => {
        // state.films.push(action.payload)
    })
})