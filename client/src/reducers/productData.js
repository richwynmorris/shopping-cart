const productData = (state = [], action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return action.data;
    case "DELETE_PRODUCT":
      const newState = state.filter(obj => obj._id != action.id); // TO DO: remove product in here with action.id, then return new state
      return newState;
    default:
      return state
  }
}

export default productData;