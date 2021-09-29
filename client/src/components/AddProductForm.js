import axios from "axios"
import { useState } from "react"

function AddProductForm({productData, setProductData}) {
  // Srdjan: use states with primitives rather than objects
  const [ title, setTitle ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ quantity, setQuantity ] = useState("");
  const [ isVisible, setIsVisible ] = useState(false);

  const handleFormSubmit = (e) => {
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

    const sendForm = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/products", input)

        setProductData(productData.concat(response.data))
        setTitle("");
        setPrice("");
        setQuantity("");
        handleToggleDisplayForm()

      } catch {
        console.log("You raised an error")
      }
    }
    sendForm()
  }

  const handleToggleDisplayForm = () => {
    setIsVisible(!isVisible);
  }

  const formClass = isVisible ? "add-form visible" : "add-form";

  return (
    <div className={formClass} >
      <p id="add-product-button">
        <a className="button add-product-button" onClick={handleToggleDisplayForm}>Add A Product</a>
      </p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={handleFormSubmit}>Add</a>
          <a className="button" onClick={handleToggleDisplayForm}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm;