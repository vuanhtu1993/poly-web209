// import { createStore, applyMiddleware } from "redux";
// import thunk from 'redux-thunk'
// import rootReducer from "./reducer";
//
// const store = createStore(rootReducer, applyMiddleware(thunk));
//
// export default store;

import {configureStore} from '@reduxjs/toolkit'
import cartSlice from "../components/Cart/cartSlice.js";
import productSlice from "../components/Product/productSlice.js";

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    cart: cartSlice.reducer,
  }
})

export default store