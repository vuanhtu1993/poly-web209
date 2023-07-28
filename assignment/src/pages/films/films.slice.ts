import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IFilm } from '../../models'
import { getAll } from '../../api/film'

const intialState = {
    films: [],
    isLoading: false
} as { films: IFilm[], isLoading: boolean }

export const fetchFilms = createAsyncThunk(
    'film/fetch',
    async (arg, thunkAPI) => {
        try {
            const data = await getAll()
            return data
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

// Acition
// export const fetchFilms = createAction<IFilm[]>('films/fetch')
// export const startLoading = createAction('films/startLoading')
// export const endLoading = createAction('films/endLoading')

// // fetchFilms() => {type: "films/fetch"}
// // fetchFilms({a: 10}) => {type: "films/fetch", payload: {a: 10}}
// // Reducer
// export const filmsReducer = createReducer(intialState, builder => {
//     // immerjs
//     builder.addCase(fetchFilms, (state, action) => {
//         state.films = action.payload
//     })
//     builder.addCase(startLoading, (state) => {
//         state.isLoading = true
//     })
//     builder.addCase(endLoading, (state) => {
//         state.isLoading = false
//     })
// })

// Slice
export const filmSlice = createSlice({
    name: "films",
    initialState: intialState,
    reducers: {
        fetch: (state, action) => {
            state.films = action.payload
        },
        startLoading: (state) => {
            state.isLoading = true
        },
        endLoading: (state) => {
            state.isLoading = false
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchFilms.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchFilms.fulfilled, (state, action) => {
            state.films = action.payload
            state.isLoading = false
        })
    }
})

export const { fetch, startLoading, endLoading } = filmSlice.actions
export const filmsReducer = filmSlice.reducer
