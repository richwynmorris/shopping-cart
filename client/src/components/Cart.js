import CartTable from "./CartTable";

function Cart({cart}) {
  // TODO: use props to get length of cart items and render UI

  const emptyCart = cart.length === 0 ? true : false;

  if (emptyCart) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <a className="button checkout disabled">Checkout</a>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        < CartTable cart={cart} />
        <a className="button checkout">Checkout</a>
      </div>
    );
  }
}

export default Cart;