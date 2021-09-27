import React from "react";
import Header from "./Header";
import ProductListing from "./ProductListing";
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
      < ProductListing data={data} />
    </div>
  );
};

export default App;
