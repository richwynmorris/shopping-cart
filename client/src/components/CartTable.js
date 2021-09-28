import CartItem from "./CartItem";

function CartTable() {
  // TODO: map and reduce methods to create rows and total
  return (
    <table className="cart-items">
      <tbody><tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
        Map to create rows
      <tr>
        <td colspan="3" className="total">Total: reduce to add dollars</td>
      </tr>
    </tbody></table>
  )
}

export default CartTable;