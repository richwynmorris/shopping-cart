import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import CartTable from "./CartTable";
import cartActions from "../actions/cart";

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cart");
        dispatch(cartActions.setCartItems(response.data))
      } catch (e) {
        console.log(e);
      }
    }
    fetchCart()
  }, [dispatch])

  const emptyCart = cart.length === 0 ? true : false;

  const handleDeleteCart = async () => {
    try {
      await axios.post(`http://localhost:5000/api/cart/checkout`);
      dispatch(cartActions.clearCartItems());
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
        < CartTable />
        <a className="button checkout" onClick={handleDeleteCart}>Checkout</a>
      </div>
    );
  }
}

export default Cart;