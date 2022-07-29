import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        total: 0
    },
    reducers: {
        add: (state, action) => {
            // IMMMER
            // Mutable => Immutable
            state.cart.push(action.payload)
        },
        increase: (state, action) => {
            const currentItem = state.cart.find(item => item.id = action.payload)
            currentItem.amount = currentItem.amount ? currentItem.amount + 1 : 2
            currentItem.total = currentItem.amount * currentItem.saleOffPrice
        }
    }
})

export default cartSlice