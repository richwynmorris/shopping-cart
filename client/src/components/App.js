import React from "react";
import Header from "./Header";
import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";
import { useState, useEffect } from "react";
import axios from "axios"

const App = () => {
  const [ productData, setProductData ] = useState([]);
  const [ cart, setCart ] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products")
      setProductData(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  const fetchCart = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/cart");
      setCart(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  // The first hook is processed last
  useEffect(() => {
    fetchCart();
  }, [])

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div id="app">
      < Header cart={cart} setCart={setCart} />
      <main>
        < ProductListing productData={productData} setProductData={setProductData} cart={cart} setCart={setCart} />
        < AddProductForm productData={productData} setProductData={setProductData}/>
      </main>
    </div>
  );
};

export default App;
