import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
  isLoading: false
} as { data: any, isLoading: boolean }

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {

    }
  }
})
