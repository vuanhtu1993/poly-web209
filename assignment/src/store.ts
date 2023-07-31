import { configureStore } from '@reduxjs/toolkit'
import { filmsReducer } from './pages/films/films.slice'
import { todoAPI } from './services/todos.service'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    [todoAPI.reducerPath]: todoAPI.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(todoAPI.middleware)
  }
})

setupListeners(store.dispatch)
// Redux toolkit query (optional)
// react-query, swr

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
