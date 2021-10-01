// Changed action name
const setProducts = (data) => {
  return {
    type: "SET_PRODUCTS",
    data,
  }
}

const updateProduct = (id) => {
  return {
    type: "UPDATE_PRODUCT",
    id,
  }
}

// Changed action name
const removeProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    id,
  }
}

export default { set, remove }