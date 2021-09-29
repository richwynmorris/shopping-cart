import React from "react";
import Header from "./Header";
import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";
import { useState, useEffect } from "react";
import axios from "axios"

const App = () => {
  const [ productData, setProductData ] = useState([]);
  const [ cart, setCart ] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:5000/api/products")
      try {
        setProductData(response.data);
      } catch{
        console.log(response);
      }
    }

    const fetchCart = async () => {
      const response = await axios.get("http://localhost:5000/api/cart");
      try {
        setCart(response.data);
      } catch {
        console.log(response);
      }
    }

    fetchProducts();
    fetchCart();
  }, [])

  return (
    <div id="app">
      < Header cart={cart} />
      <main>
        < ProductListing productData={productData} setProductData={setProductData} cart={cart} setCart={setCart} />
        < AddProductForm productData={productData} setProductData={setProductData}/>
      </main>
    </div>
  );
};

export default App;
