const cart = (state = [], action) => {
  switch(action.type) {
    case "SET_CART_ITEMS":
      return action.data;
    case "ADD_CART_ITEM":
      if (state.length === 0) {
        return state.concat(action.data)
      } else {
        const newState = state.map(obj => {
          if (obj._id === action.id) {
            return action.data
          } else {
            return obj
          }
        }) 
        return newState
      }


    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

export default cart;

