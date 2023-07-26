import { createReducer, createAction, createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { IFilm } from '../../models'
import { getAll } from '../../api/film'

// CreateAsyncThunk => payloadCreation
export const fetchFilm = createAsyncThunk<IFilm[]>('film/fetch', async (arg, { rejectWithValue, }) => {
    try {
        const data = await getAll()
        return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

// // Sync
// const fetchFilmPending = createAction('film/fetch')
// const fetchFilmFullfilled = createAction('film/fetch')

const intialState = {
    films: [],
    isLoading: false
} as { films: IFilm[], isLoading: boolean }

// Slice => reducer + action
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
    },
    extraReducers: builder => {
        builder.addCase(fetchFilm.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchFilm.fulfilled, (state, action) => {
            state.films = action.payload
            state.isLoading = false
        })
    }
})

export const filmReducer = filmSlice.reducer
export const { fetch, add, startLoading, endLoading } = filmSlice.actions