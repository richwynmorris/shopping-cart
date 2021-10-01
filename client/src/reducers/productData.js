const productData = (state = [], action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.data;
    case "UPDATE_PRODUCT":
      // Change all the state and return the new state
      // Use action.id to identify the product to change
      return state;
    case "DELETE_PRODUCT":
      const newState = state.filter(obj => obj._id != action.id);
      return newState;
    default:
      return state
  }
}

export default productData;