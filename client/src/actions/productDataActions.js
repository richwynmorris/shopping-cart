// Changed action name
const setProducts = (data) => {
  return {
    type: "SET_PRODUCTS",
    data,
  }
}

const updateProduct = (id, data) => {
  return {
    type: "UPDATE_PRODUCT",
    id,
    data
  }
}

// Changed action name
const removeProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    id,
  }
}

const addProduct = (data) => {
  return {
    type: "ADD_PRODUCT",
    data
  }
}

const decrementProductQuantity = (id, data) => {
  return {
    type: "DECREMENT_PRODUCT",
    id,
    data
  }
}

export default { setProducts, updateProduct, removeProduct, addProduct, decrementProductQuantity }