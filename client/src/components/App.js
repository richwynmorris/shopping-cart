import React from "react";
import Header from "./Header";
import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";
import { useState, useEffect } from "react";
import axios from "axios"

const App = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await axios.get("localhost:5000/api/products")
      console.log(productData)
      setData(productData.data)
    }
    fetchProducts()
  }, [])

  return (
    <div id="app">
      < Header />
      <main>
        < ProductListing data={data} />
        < AddProductForm />
      </main>
    </div>
  );
};

export default App;
