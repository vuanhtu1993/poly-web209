const intialValue = {
    cart: [],
    total: 0
  };
  
  const rootReducer = (state = intialValue, action) => {
    switch (action.type) {
      case "cart/add":
        return {
          ...state,
          cart: [...state.cart, action.payload]
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  