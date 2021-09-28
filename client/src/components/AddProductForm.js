import axios from "axios"
import { useState } from "react"

const handleDisplayForm = (e) => {
  e.preventDefault()
  e.target.style.display = "none"
  e.target.parentElement.nextSibling.style.display = "block"
  e.target.parentElement.nextSibling.nextSibling.style.display = "block"
}

function AddProductForm({productData, setProductData}) {
  const [input, setInput] = useState({ title: "", price: "", quantity: "" })

  const handleFormSubmit = (e) => {
    if ( Number.isNaN(Number(input.price)) ) {
      input.price = 0 
    } else {
      input.price = Number(input.price)
    }

    if ( Number.isNaN(Number(input.quantity)) ) {
      input.quantity = 0 
    } else {
      input.quantity = Number(input.quantity)
    }

    const sendForm = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/products", input)
        setProductData(productData.concat(response.data))
        setInput({ title: "", price: "", quantity: "" })
      } catch {
        console.log("You raised an error")
      }  
    }
    sendForm()
  }

  return (
    <div className="add-form" >
      <p>
        <a className="button add-product-button" onClick={handleDisplayForm}>Add A Product</a>
      </p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={input.title} onChange={(e) => setInput({...input, title:e.target.value})}/>
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={input.price} onChange={(e) => setInput({...input, price:e.target.value})}/>
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={input.quantity} onChange={(e) => setInput({...input, quantity:e.target.value})}/>
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={handleFormSubmit}>Add</a>
          <a className="button">Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm;