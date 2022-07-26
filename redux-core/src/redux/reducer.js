const intialValue = {
    cart: [],
    total: 0
  };
  
  const rootReducer = (state = intialValue, action) => {
    switch (action.type) {
      case "cart/add":
        return {
          ...state,
          cart: [...state.cart, action.payload],
          total: [...state.cart, action.payload].reduce((accu, item) => item.total ? accu + item.total : accu + item.saleOffPrice, 0)
        };
      case "cart/increase":
        const id = action.payload
        const cartList = state.cart.filter(item => item.id !== id)
        const newItem = state.cart.find(item => item.id === id)
        if(newItem.amount) {
          newItem.amount = newItem.amount + 1
          newItem.total = newItem.amount * newItem.saleOffPrice
        } else {
          newItem.amount = 2
          newItem.total = newItem.saleOffPrice * 2
        }
        const newCartList = [...cartList, newItem]
        const newTotal = newCartList.reduce((accu, item) => item.total ? accu + item.total : accu + item.saleOffPrice, 0)
        return {
          ...state,
          cart: [
            ...cartList,
            newItem
          ],
          total: newTotal
        }
      default:
        return state;
    }
  };
  
  export default rootReducer;
  