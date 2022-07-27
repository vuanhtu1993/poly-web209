const intialValue = {
    cart: [],
    total: 0
}

const rootReducer = (state = intialValue, action) => {
    switch(action.type) {
        case "cart/add":
            const newCart = [...state.cart, action.payload]
            return {
                ...state,
                cart: newCart,
                total: newCart.reduce((accu, item) => accu + item.saleOffPrice, 0)
            }
        default: 
            return state
    }
}

export default rootReducer