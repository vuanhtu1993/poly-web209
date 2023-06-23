import { configureStore } from '@reduxjs/toolkit'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'
import cartSlice from '../components/cart/cartSlice'

// const store = createStore(reducer, initialValue, middleware)
// const store = createStore(rootReducer, applyMiddleware(thunk))
// export default store

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export default store