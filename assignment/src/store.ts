import { configureStore } from '@reduxjs/toolkit'
import { filmReducer } from './pages/film/film.reducer'
import { authReducer } from './pages/auth/auth.slice'

export const store = configureStore({
  reducer: {
    films: filmReducer,
    auth: authReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
