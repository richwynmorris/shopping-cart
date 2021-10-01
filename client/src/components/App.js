import React from "react";
import Header from "./Header";
import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";

const App = () => {
  return (
    <div id="app">
      < Header />
      <main>
        < ProductListing />
        < AddProductForm />
      </main>
    </div>
  );
};

export default App;
