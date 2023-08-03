import { configureStore } from '@reduxjs/toolkit'
import { productAPI } from './services/product.service'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
    products: productAPI.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productAPI.middleware)
})

setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
