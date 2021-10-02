const setCartItems = (data) => {
  return {
    type: "SET_CART_ITEMS",
    data,
  }
}

const addCartItem = (id, data) => {
  return {
    type: "ADD_CART_ITEM",
    id,
    data
  }
}

const clearCartItems = () => {
  return {
    type: "CLEAR_CART"
  }
}

export default { setCartItems, clearCartItems, addCartItem }