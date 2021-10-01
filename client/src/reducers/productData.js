const productData = (state = [], action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      console.log(action.data)
      return action.data;
    case "DELETE_PRODUCT":
      console.log(state)
      const newState = state.filter(obj => obj._id != action.id); // TO DO: remove product in here with action.id, then return new state
      console.log(newState)
      return newState;
    default:
      return state
  }
}

export default productData;