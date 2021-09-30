const set = (data) => {
  return {
    type: "SET_PRODUCT_DATA",
    payload: data
  }
}

const remove = (data) => {
  return {
    type: "DELETE_PRODUCT_DATA",
    payload: data
  }
}

export default { set, remove }