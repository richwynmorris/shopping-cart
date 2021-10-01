const cart = (state = [], action) => {
  switch(action.type) {
    case "SET_CART":
      return action.data;
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

export default cart;