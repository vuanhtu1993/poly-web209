import { createReducer, createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilm } from '../../models'


const intialState = {
    films: [],
    isLoading: false
} as { films: IFilm[], isLoading: boolean }

// export const fetchFilm = createAction<IFilm[]>("film/fetch")
// export const addFilm = createAction<IFilm>("film/add")

// // fetchFilm() => {type: "film/fetch"}
// // fetchFilm({a: 10}) => {type: "film/fetch", payload: {a: 10}}

// export const filmReducer = createReducer(intialState, (builder) => {
//     // immerjs integrated
//     builder.addCase(fetchFilm, (state, action) => {
//         state.films = action.payload
//     })
//     builder.addCase(addFilm, (state, action) => {
//         // state.films.push(action.payload)
//     })
// })

// Slice
const filmSlice = createSlice({
    name: "film",
    initialState: intialState,
    reducers: {
        startLoading: function (state, action: PayloadAction<void>) {
            state.isLoading = true
        },
        endLoading: function (state, action: PayloadAction<void>) {
            state.isLoading = false
        },
        fetch: function (state, action) {
            // film/fetch
            state.films = action.payload
        },
        add: function (state, action) {
            // 
        }
    }
})

export const filmReducer = filmSlice.reducer
export const { fetch, add, startLoading, endLoading } = filmSlice.actions