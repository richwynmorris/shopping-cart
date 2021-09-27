import React from "react";
import Header from "./Header";
import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";
import data from "../lib/data";
import { useState, useEffect } from "react";

const App = () => {
  const [ state, setState ] = useState([]);

  useEffect(() => {
    setState(data)
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
