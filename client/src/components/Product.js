import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import cartActions from "../actions/cart";
import productDataActions from "../actions/productDataActions";
import EditForm from "./EditForm";

function Product({ product }) {
  const [ editFormIsVisible, setEditFormIsVisible ] = useState(false);
  const cart = useSelector(state => state.cart)
  const productData = useSelector(state => state.productData)
  const dispatch = useDispatch()

  const handleProductDeletion = async (e) => {
    const anchorTag = e.target.nodeName === "SPAN" ? e.target.parentNode : e.target;
    const productId = anchorTag.dataset.id;
    const url = `http://localhost:5000/api/products/${productId}`;

    try {
      await axios.delete(`${url}`);
      dispatch(productDataActions.removeProduct(productId));
    } catch (e) {
      console.log(e)
    }
  }

  const handleAddToCart = async () => {
    const cartItem = {
      productId: product._id,
      title: product.title,
      price: product.price,
    };

    if ( addToCartStatus === "button add-to-cart disabled") { return  }

    try {
      product.quantity -= 1
      await axios.put(`http://localhost:5000/api/products/${product._id}`, product).then()
      dispatch(productDataActions.decrementProductQuantity(product._id, product))

      const response = await axios.post(`http://localhost:5000/api/cart`, cartItem);
      dispatch(cartActions.addCartItem(response.data._id, response.data))
    } catch (e) {
      console.log(e);
    }
  }

  const handleToggleEditForm = () => {
    setEditFormIsVisible(!editFormIsVisible);
  }

  const quantityStatus = product.quantity === 0 ? "quantity none-left" : "quantity";
  const addToCartStatus = product.quantity === 0 ? "button add-to-cart disabled" : "button add-to-cart";

  if (editFormIsVisible) {
    return (
      <div className="product">
        <div className="product-details">
          <h3>
            {product.title}
          </h3>
          <p className="price">${product.price}</p>
          <p className={quantityStatus}>{product.quantity} left in stock</p>
          <a className="delete-button" data-id={product._id} onClick={handleProductDeletion}><span>X</span></a>
        </div>
        < EditForm product={product} toggleForm={handleToggleEditForm} />
      </div>
    )
  } else {
    return (
      <div className="product">
        <div className="product-details">
          <h3>
            {product.title}
          </h3>
          <p className="price">${product.price}</p>
          <p className={quantityStatus}>{product.quantity} left in stock</p>
          <div className="actions product-actions">
            <a className={addToCartStatus} onClick={handleAddToCart}>Add to Cart</a>
            <a className="button edit" onClick={handleToggleEditForm}>Edit</a>
          </div>
          <a className="delete-button" data-id={product._id} onClick={handleProductDeletion}><span>X</span></a>
        </div>
      </div>
    )
  }
}

export default Product