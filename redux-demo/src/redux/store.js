import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'

// const store = createStore(reducer, initialValue, middleware)
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store

// import {configureStore} from '@reduxjs/toolkit'
// import cartSlice from '../components/cart/cartSlice'

// const store = configureStore({
//     reducer: {
//         cart: cartSlice.reducer
//     }
// })

// export default store