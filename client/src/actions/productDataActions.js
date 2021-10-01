const set = (data) => {
  return {
    type: "SET_PRODUCT_DATA",
    data,
  }
}

const remove = (id) => {
  return {
    type: "DELETE_PRODUCT_DATA",
    id,
  }
}

export default { set, remove }