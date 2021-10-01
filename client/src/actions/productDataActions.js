const set = (data) => {
  return {
    type: "SET_PRODUCT",
    data,
  }
}

const remove = (id) => {
  return {
    type: "DELETE_PRODUCT",
    id,
  }
}

export default { set, remove }