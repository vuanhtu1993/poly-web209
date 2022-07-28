const intialValue = {
    cart: [],
    total: 0,
    products: []
  };
  
  const rootReducer = (state = intialValue, action) => {
    switch (action.type) {
      case "product/get":
        return {
          ...state,
          products: action.payload
        }
      case "cart/add":
        return {
          ...state,
          cart: [...state.cart, action.payload],
          total: [...state.cart, action.payload].reduce((accu, item) => item.total ? accu + item.total : accu + item.saleOffPrice, 0)
        };
      case "cart/increase":
        //refactor
        const cartList = state.cart.map(item => {
          if (item.id === action.payload) {
            const amount = item.amount ? item.amount + 1 : 2
            return {...item, amount: amount, total: amount ? amount * item.saleOffPrice : item.saleOffPrice * 2}
          }
        })
        return {
          ...state,
          cart: [
            ...cartList
          ],
          total: cartList.reduce((accu, item) => item.total ? accu + item.total : accu + item.saleOffPrice, 0)
        }
      default:
        return state;
    }
  };
  
  export default rootReducer;
  