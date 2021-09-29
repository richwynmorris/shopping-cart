import { useState } from "react";
import axios from "axios";

const EditForm = ({product, productData, setProductData, toggleForm}) => {
  const [ title, setTitle ] = useState(product.title);
  const [ price, setPrice ] = useState(product.price);
  const [ quantity, setQuantity ] = useState(product.quantity);

  const handleProductUpdate = async () => {
    const url = `http://localhost:5000/api/products/${product._id}`;
    const input = {
      title,
    }

    if ( Number.isNaN(Number(price)) ) {
      input.price = 0
    } else {
      input.price = Number(price)
    }

    if ( Number.isNaN(Number(quantity)) ) {
      input.quantity = 0
    } else {
      input.quantity = Number(quantity)
    }

    const response = await axios.put(url, input);

    try {
      toggleForm();

      const newState = productData.map((obj) => {
        if (obj._id === product._id) {
          return response.data;
        } else {
          return obj;
        }
      });

      setProductData(newState);
    } catch {
      console.log(response);
    }
  }

  return (
  <div class="edit-form">
    <h3>Edit Product</h3>
    <form>
      <div class="input-group">
        <label for="product-name">Product Name</label>
        <input type="text" id="product-name" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>

      <div class="input-group">
        <label for="product-price">Price</label>
        <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>

      <div class="input-group">
        <label for="product-quantity">Quantity</label>
        <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>

      <div class="actions form-actions">
        <a class="button" onClick={handleProductUpdate}>Update</a>
        <a class="button" onClick={toggleForm}>Cancel</a>
      </div>
    </form>
  </div>
  )
};

export default EditForm;