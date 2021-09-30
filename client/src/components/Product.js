import axios from "axios";
import { useState } from "react";
import EditForm from "./EditForm";

function Product({product, productData, setProductData, cart, setCart}) {
  const [ editFormIsVisible, setEditFormIsVisible ] = useState(false);

  const handleProductDeletion = async (e) => {
    const anchorTag = e.target.nodeName == "SPAN" ? e.target.parentNode : e.target;
    const productId = anchorTag.dataset.id;
    const url = `http://localhost:5000/api/products/${productId}`;

    try {
      const response = await axios.delete(`${url}`);
      anchorTag.parentElement.parentElement.style.display = "none";
    } catch (e) {
      console.log(e)
    }
  }

  const handleDeleteCart = async (newCart = []) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/cart/checkout`);
      setCart(newCart);
    } catch (e) {
      console.log(e);
    }
  }

  const handleAddToCart = async () => {
    const cartItem = {
      productId: product._id,
      title: product.title,
      price: product.price,
    };

    try {
      const response = await axios.post(`http://localhost:5000/api/cart`, cartItem);
      const existingCartItem = cart.filter(obj => obj._id === product._id).length === 1;

      if (existingCartItem) {
        // Change state of cart to add +1 quantity
        const newCart = cart.map(obj => {
          if (obj._id === product._id) {
            obj.quantity += 1;
            return obj;
          } else {
            return obj;
          }
        });
        setCart(newCart);
      } else {
        // concatenate to array and add the response.data object
        const newCart = [...cart, response.data];
        setCart(newCart);
      }
    } catch {
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
        < EditForm product={product} productData={productData} setProductData={setProductData} toggleForm={handleToggleEditForm} />
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