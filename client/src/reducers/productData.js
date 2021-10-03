const productData = (state = [], action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.data;
    case "ADD_PRODUCT":
      return [...state, action.data]
    case "UPDATE_PRODUCT":
      const editedState = state.map((obj) => {
        if (obj._id === action.id) {
          return action.data;
        } else {
          return obj;
        }
      });
      return editedState;
    case "DECREMENT_PRODUCT":
      const updatedQuantityState = state.map((obj) => {
        if (obj._id === action.id) {
          return action.data
        } else {
          return obj
        }
      })
      return updatedQuantityState;
    case "DELETE_PRODUCT":
      const newState = state.filter(obj => obj._id != action.id);
      return newState;
    default:
      return state
  }
}

export default productData;