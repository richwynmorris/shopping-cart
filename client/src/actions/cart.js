const setCartItems = (data) => {
  return {
    type: "SET_CART_ITEMS",
    data,
  }
}

const updateCartItem = () => {
  return {
    type: "UPDATE_CART_ITEM",
  }
}

const clear = () => {
  return {
    type: "CLEAR_CART"
  }
}

export default { set, clear }