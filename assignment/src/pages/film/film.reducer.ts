import { createReducer, createAction } from '@reduxjs/toolkit'
import { IFilm } from '../../models'

const intialState = {
    films: [],
    isLoading: false
} as { films: IFilm[], isLoading: boolean }

export const fetchFilm = createAction<IFilm[]>('film/fetch')
export const startLoading = createAction('film/startLoading')
export const endLoading = createAction('film/endLoading')

// fetchFilm() => {type: 'film/fetch'}
// fetchFilm({id: 1}) => {type: 'film/fetch', payload: {id: 1}}

export const filmReducer = createReducer(intialState, builder => {
    builder.addCase(fetchFilm, (state, action) => {
        state.films = action.payload
    })
    builder.addCase(startLoading, (state) => {
        state.isLoading = true
    })
    builder.addCase(endLoading, (state) => {
        state.isLoading = false
    })
})
