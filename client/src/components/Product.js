import axios from "axios";
import { useState } from "react";
import EditForm from "./EditForm";

function Product({product, productData, setProductData}) {
  const [ editFormIsVisible, setEditFormIsVisible ] = useState(false);

  const handleProductDeletion = async (e) => {
    const anchorTag = e.target.nodeName == "SPAN" ? e.target.parentNode : e.target;

    const productId = anchorTag.dataset.id;
    const url = `http://localhost:5000/api/products/${productId}`;
    const response = await axios.delete(`${url}`);

    try {
      anchorTag.parentElement.parentElement.style.display = "none";
    } catch {
      console.log(response)
    }
  }

  const handleAddToCart = () => {
    const stock = product.quantity;
    // If the product already exists in the cart
      // If stock > number of times product is in stock
        // Increase cart quantity by 1
      // Else
        // Don't change it
    // Else the product isnt in the cart
      // Add cart item with quantity of 1
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