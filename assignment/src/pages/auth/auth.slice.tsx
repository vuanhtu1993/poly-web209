import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../models'
import { signupApi } from '../../api/auth'

const initialState = {
  user: {},
  accessToken: "",
  isLoading: false
} as { user: IUser, isLoading: boolean, accessToken: string }

export const signup = createAsyncThunk(
  'auth/signup',
  async (user: IUser, thunkAPI) => {
    try {
      const data = await signupApi(user)
      return data
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
)

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(signup.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
      localStorage.setItem("accessToken", JSON.stringify(action.payload.accessToken))
      state.isLoading = false
    })
    builder.addCase(signup.rejected, (state) => {
      state.isLoading = false
    })
  }
})

export const authReducer = AuthSlice.reducer
