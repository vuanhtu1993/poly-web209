import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { filmReducer } from './pages/film/film.reducer'
import { authReducer } from './pages/auth/auth.slice'
import { filmAPI } from './services/film.service'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [filmAPI.reducerPath]: filmAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(filmAPI.middleware)
  }
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
