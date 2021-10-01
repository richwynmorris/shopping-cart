import { useSelector } from "react-redux"

function CartTable() {
  const cart = useSelector(state => state.cart)

  console.log(cart)

  return (
    <table className="cart-items">
      <tbody>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {cart.map((item) => {
          return (
          <tr>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>${item.price}</td>
          </tr>
          )
        })}
      <tr>
        <td colspan="3" className="total">Total: ${cart.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
          }, 0)}</td>
      </tr>
    </tbody></table>
  )
}

export default CartTable;