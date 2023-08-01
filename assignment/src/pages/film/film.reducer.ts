import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IFilm } from '../../models'
import { getAll, postFilm } from '../../api/film'

const intialState = {
    films: [],
    isLoading: false
} as { films: IFilm[], isLoading: boolean }

export const fetchFilm = createAsyncThunk("film/fetch", async (arg, thunkAPI) => {
    try {
        const data = await getAll()
        return data
    } catch (err: any) {
        return thunkAPI.rejectWithValue(err.message)
    }

})

export const createFilm = createAsyncThunk("film/create", async (body: { title: string, extract: string }, thunkAPI) => {
    try {
        const data = await postFilm(body)
        return data
    } catch (err: any) {
        return thunkAPI.rejectWithValue(err.message)
    }
})

// export const fetchFilm = createAction<IFilm[]>('film/fetch')
// export const startLoading = createAction('film/startLoading')
// export const endLoading = createAction('film/endLoading')

// // fetchFilm() => {type: 'film/fetch'}
// // fetchFilm({id: 1}) => {type: 'film/fetch', payload: {id: 1}}

// export const filmReducer = createReducer(intialState, builder => {
//     builder.addCase(fetchFilm, (state, action) => {
//         state.films = action.payload
//     })
//     builder.addCase(startLoading, (state) => {
//         state.isLoading = true
//     })
//     builder.addCase(endLoading, (state) => {
//         state.isLoading = false
//     })
// })

// Slice = Reducer + action
const filmSlice = createSlice({
    name: "film",
    initialState: intialState,
    reducers: {
        // fetch: (state, action) => {
        //     state.films = action.payload
        // },
        // startLoading: (state) => {
        //     state.isLoading = true
        // },
        // endLoading: (state) => {
        //     state.isLoading = false
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilm.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchFilm.fulfilled, (state, action) => {
            state.films = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchFilm.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(createFilm.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createFilm.fulfilled, (state, action) => {
            // Nghiem cam
            // state.films.push(action.payload)
            state.isLoading = false
        })
        builder.addCase(createFilm.rejected, (state) => {
            state.isLoading = false
        })
    }
})

// export const {  } = filmSlice.actions
export const filmReducer = filmSlice.reducer
