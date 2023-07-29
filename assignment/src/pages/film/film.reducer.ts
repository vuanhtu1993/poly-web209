import { createReducer, createAction } from '@reduxjs/toolkit'
import { IFilm } from '../../models'

const intialState = {
    films: [],
    isLoading: false
} as { films: IFilm[], isLoading: boolean }

export const fetchFilm = createAction<IFilm[]>('film/fetch')

// fetchFilm() => {type: 'film/fetch'}
// fetchFilm({id: 1}) => {type: 'film/fetch', payload: {id: 1}}

export const filmReducer = createReducer(intialState, builder => {
    builder.addCase(fetchFilm, (state, action) => {
        state.films = action.payload
    })
})
