import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0
  },
  reducers: {
    add: (state, action) => {
      //  Viết code mutation nhưng hoạt động như immutaion
      state.cart.push(action.payload)
      state.total = state.cart.reduce((accu, item) => item.total ? accu + item.total : accu + item.saleOffPrice, 0)
    },
    increase: (state, action) => {
      const currentItem = state.cart.find(item => item.id === action.payload)
      currentItem.amount = currentItem.amount ? currentItem.amount + 1 : 2
      currentItem.total = currentItem.saleOffPrice * currentItem.amount
      state.total = state.cart.reduce((accu, item) => item.total ? accu + item.total : accu + item.saleOffPrice, 0)
    }
  }
})

export default cartSlice