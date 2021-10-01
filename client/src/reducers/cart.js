const cart = (state = [], action) => {
  switch(action.type) {
    case "SET_CART":
      return {
        ...state,
        cart: action.payload
      }
    case "CLEAR_CART":
      return []
    default:
      return state
  }
}

export default cart