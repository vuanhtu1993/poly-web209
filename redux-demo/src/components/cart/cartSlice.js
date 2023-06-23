import {createSlice} from '@reduxjs/toolkit'
// Slice thay thế cho Reducer và action
const initialValue = {
    cart: [],
    total: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState: initialValue,
    reducers: {
        add: (state, action) => {
            // Mutable -> IMMER
            state.cart.push(action.payload)
        },
        increase: (state, action) => {
            const currentItem = state.cart.find(item => item.id === action.payload)
            // currentItem.amount = currentItem.amount ? currentItem.amount + 1 : 2
            // currentItem.total = currentItem.amount * currentItem.saleOffPrice
            console.log(currentItem);
        }
    }
})

export default cartSlice