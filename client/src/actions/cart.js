const set = (data) => {
  return {
    type: "SET_CART",
    data,
  }
}

const clear = () => {
  return {
    type: "CLEAR_CART"
  }
}

export default { set, clear }