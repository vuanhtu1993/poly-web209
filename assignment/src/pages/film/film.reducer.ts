import { createReducer, createAction, createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { IFilm } from '../../models'
import { getAll, postFilm } from '../../api/film'
import { AxiosError } from 'axios'

// CreateAsyncThunk => payloadCreation
export const fetchFilm = createAsyncThunk<IFilm[]>('film/fetch', async (arg, { rejectWithValue, }) => {
  try {
    const data = await getAll()
    return data
  } catch (err: any) {
    return rejectWithValue(err.message)
  }
})

export const createFilm = createAsyncThunk(
  'film/create',
  async (film: IFilm, thunkAPI) => {
    try {
      const data = await postFilm(film)
      return data
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
)

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

  },
  extraReducers: builder => {
    builder.addCase(fetchFilm.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchFilm.fulfilled, (state, action) => {
      state.films = action.payload
      state.isLoading = false
    })
    builder.addCase(createFilm.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(createFilm.fulfilled, (state, action) => {
      // state.films.push(action.payload)
      state.isLoading = false
    })
    builder.addCase(createFilm.rejected, (state) => {
      state.isLoading = false
    })
  }
})

export const filmReducer = filmSlice.reducer
