// import {createStore} from 'redux'
// import rootReducer from './reducer'

// const store = createStore(rootReducer)
// export default store

import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../components/cart/cartSlice'

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export default store