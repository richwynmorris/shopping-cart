import axios from "axios";
import CartTable from "./CartTable";

function Cart({cart, setCart}) {
  // TODO: use props to get length of cart items and render UI

  const emptyCart = cart.length === 0 ? true : false;

  const handleDeleteCart = async () => {
    // Why is this not working? Should update UI but isn't!

    try {
      const response = await axios.post(`http://localhost:5000/api/cart/checkout`);
      setCart([]);
    } catch (e) {
      console.log(e);
    }
  }

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
        <a className="button checkout" onClick={handleDeleteCart}>Checkout</a>
      </div>
    );
  }
}

export default Cart;