import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IFilm } from '../../models'
import { getAll, postFilm } from '../../api/film'

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
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
)

// createAsyncThunk -> 3 action (pending, fulfilled, rejected)
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

export const { fetch, startLoading, endLoading } = filmSlice.actions
export const filmsReducer = filmSlice.reducer
